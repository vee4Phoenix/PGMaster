//
//  NSDictionary+Serialization.h
//
//  Created by Hubert Yap on 20/06/2014.
//  Copyright (c) 2014 Hubert Yap. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface NSDictionary (Serialization)

- (id)objectForKey:(id)aKey or:(id)value;
- (NSString *)stringForKey:(id)aKey;
- (NSNumber *)integerForKey:(id)aKey;
- (NSNumber *)doubleForKey:(id)aKey;
- (NSNumber *)booleanForKey:(id)aKey;
- (NSString *)jsonString;
+ (NSDictionary *)dictionaryFromJSONString:(NSString *)jsonString;

@end
