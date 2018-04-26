//
//  Reflection+Serialization.m
//
//  Created by Hubert Yap on 26/3/18.
//

#import "Reflection+Serialization.h"
#import "NSDictionary+Serialization.h"
#import "NSManagedObjectID+TBString.h"

@implementation Reflection (Serialization)

NSString *const kCoreReflection                  = @"Reflection";
NSString *const kCoreReflectionAttrID            = @"id";
NSString *const kCoreReflectionAttrText          = @"text";
NSString *const kCoreReflectionAttrSectionNumber = @"sectionNumber";
NSString *const kCoreReflectionAttrOrder         = @"order";


- (NSDictionary *) toDictionary {
    NSMutableDictionary *dict = [NSMutableDictionary dictionary];

    [dict setObject:self.objectID.stringRepresentation forKey:kCoreReflectionAttrID];
    [dict setObject:self.text forKey:kCoreReflectionAttrText];
    [dict setObject:[NSNumber numberWithInt:self.sectionNumber] forKey:kCoreReflectionAttrSectionNumber];
    [dict setObject:[NSNumber numberWithInt:self.order] forKey:kCoreReflectionAttrOrder];

    return dict;
}


- (void) populateFromDictionary:(NSDictionary *)dict {
    self.text           = [dict stringForKey:kCoreReflectionAttrText];
    self.sectionNumber  = [dict integerForKey:kCoreReflectionAttrSectionNumber].intValue;
    self.order          = [dict integerForKey:kCoreReflectionAttrOrder].intValue;
}

@end
