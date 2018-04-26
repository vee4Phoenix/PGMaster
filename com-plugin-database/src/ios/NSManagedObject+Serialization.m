//
//  NSManagedObject+Serialization.m
//
//  Created by Hubert Yap on 20/06/2014.
//  Copyright (c) 2014 Hubert Yap. All rights reserved.
//

#import "NSManagedObject+Serialization.h"
#import "NSDictionary+Serialization.h"

@implementation NSManagedObject (Serialization)

- (NSDictionary *)toDictionary
{
    NSLog(@"To be implemented in each class...");
    return nil;
}


- (void)populateFromDictionary:(NSDictionary *)dict
{
    NSLog(@"To be implemented in each class...");
}


+ (instancetype)initWithDictionary:(NSDictionary *)dict
                         inContext:(NSManagedObjectContext *)context
{
    id newObject = [NSEntityDescription insertNewObjectForEntityForName:NSStringFromClass([self class])
                                                 inManagedObjectContext:context];
    [newObject populateFromDictionary:dict];
    return newObject;
}


- (NSString *)description
{
    return [[self toDictionary] jsonString];
}

@end
