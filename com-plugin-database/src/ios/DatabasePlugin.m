//
//  DatabasePlugin.m
//
//  Created by Hubert Yap on 20/06/2014.
//  Copyright (c) 2014 Hubert Yap. All rights reserved.
//

#import "DatabasePlugin.h"
#import "TBCoreDataStoreS1.h"
#import "NSManagedObject+TBAdditions.h"
#import "NSManagedObjectID+TBString.h"
#import "NSArray+Serialization.h"
#import "NSDictionary+Serialization.h"
#import "NSManagedObject+Serialization.h"

#import "Reflection+Serialization.h"

static BOOL const kDebug = YES;

@implementation DatabasePlugin

- (void)saveReflection:(CDVInvokedUrlCommand *)command
{
    if (kDebug) {
        NSLog(@"saveReflection: %@", command.arguments);
    }

    [self.commandDelegate runInBackground:^{
        NSManagedObjectContext *context = [TBCoreDataStoreS1 privateQueueContext];
        [context performBlock:^{
            CDVPluginResult *pluginResult = nil;

            // get parameter
            NSDictionary *param = [command.arguments objectAtIndex:0];
            NSString *stringID = [param objectForKey:kCoreReflectionAttrID];
            Reflection *obj;

            // get object
            if (stringID)
            {
                // update
                obj = (Reflection *)[self getWithStringID:stringID fromContext:context];
            }
            else
            {
                // insert
                obj = [Reflection createManagedObjectInContext:context];
                [self saveContext:context];
                stringID = obj.objectID.stringRepresentation;
            }

            // update object
            [obj populateFromDictionary:param];
            [self saveContext:context];

            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:stringID];

            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }];
}


- (void)getReflections:(CDVInvokedUrlCommand *)command
{
    if (kDebug) {
        NSLog(@"getReflections: %@", command.arguments);
    }

    [self.commandDelegate runInBackground:^{
        NSManagedObjectContext *context = [TBCoreDataStoreS1 privateQueueContext];
        [context performBlock:^{
            CDVPluginResult *pluginResult = nil;

            // get parameter
            NSNumber *sectionNumber = [command.arguments objectAtIndex:0];

            // fetch object
            NSFetchRequest *fetchRequest = [NSFetchRequest fetchRequestWithEntityName:kCoreReflection];
            NSPredicate *p = [NSPredicate predicateWithFormat:@"sectionNumber = %@", sectionNumber];
            [fetchRequest setPredicate:p];
            NSSortDescriptor *sortDescriptor = [NSSortDescriptor sortDescriptorWithKey:kCoreReflectionAttrOrder ascending:YES];
            fetchRequest.sortDescriptors = @[sortDescriptor];
            NSArray *result = [self select:fetchRequest fromContext:context];

            // transform result into JSON array
            NSMutableArray *validJSONResult = [NSMutableArray arrayWithCapacity:result.count];
            for (Reflection *obj in result)
            {
                [validJSONResult addObject:[obj toDictionary]];
            }

            // return result
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsArray:validJSONResult];

            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }];
}


- (void)getAllReflections:(CDVInvokedUrlCommand *)command
{
    if (kDebug) {
        NSLog(@"getAllReflections: %@", command.arguments);
    }

    [self.commandDelegate runInBackground:^{
        NSManagedObjectContext *context = [TBCoreDataStoreS1 privateQueueContext];
        [context performBlock:^{
            CDVPluginResult *pluginResult = nil;

            // fetch object
            NSFetchRequest *fetchRequest = [NSFetchRequest fetchRequestWithEntityName:kCoreReflection];
            NSSortDescriptor *sortDescriptor1 = [NSSortDescriptor sortDescriptorWithKey:kCoreReflectionAttrSectionNumber ascending:YES];
            NSSortDescriptor *sortDescriptor2 = [NSSortDescriptor sortDescriptorWithKey:kCoreReflectionAttrOrder ascending:YES];
            fetchRequest.sortDescriptors = @[sortDescriptor1, sortDescriptor2];
            NSArray *result = [self select:fetchRequest fromContext:context];

            // transform result into JSON array
            NSMutableArray *validJSONResult = [NSMutableArray arrayWithCapacity:result.count];
            for (Reflection *obj in result)
            {
                [validJSONResult addObject:[obj toDictionary]];
            }

            // return result
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsArray:validJSONResult];

            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }];
}


- (NSArray *)select:(NSFetchRequest *)fetchRequest
        fromContext:(NSManagedObjectContext *)context {

    NSError *error;
    NSArray *results = [context executeFetchRequest:fetchRequest error:&error];
    if (error) {
        NSLog(@"DatabasePlugin select error: %@", [error description]);
        results = [NSArray array];
    }
    return results;
}


- (void)saveContext:(NSManagedObjectContext *)context {
    NSError *error = nil;
    if ([context hasChanges] && ![context save:&error]) {
        NSLog(@"DatabasePlugin save error %@, %@", error, [error userInfo]);
    }
}


- (NSManagedObject *)getWithStringID:(NSString *)stringID
                         fromContext:(NSManagedObjectContext *)context {

    NSManagedObjectID *objID = [TBCoreDataStoreS1 managedObjectIDFromString:stringID];
    return [context objectWithID:objID];
}


- (void)clearEntity:(NSString *)entityName
        fromContext:(NSManagedObjectContext *)context {

    NSFetchRequest *fetchRequest = [NSFetchRequest fetchRequestWithEntityName:entityName];
    NSArray *array = [self select:fetchRequest fromContext:context];
    for (NSManagedObject *obj in array) {
        [context deleteObject:obj];
    }
    [self saveContext:context];
}


- (void)deleteWithStringID:(NSString *)stringID
               fromContext:(NSManagedObjectContext *)context {
    NSManagedObjectID *objID = [TBCoreDataStoreS1 managedObjectIDFromString:stringID];
    NSManagedObject *obj = [context objectWithID:objID];
    [context deleteObject:obj];
    [self saveContext:context];
}

@end
