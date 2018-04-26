//
//  NSArray+Serialization.m
//
//  Created by Hubert Yap on 20/06/2014.
//  Copyright (c) 2014 Hubert Yap. All rights reserved.
//

#import "NSArray+Serialization.h"

@implementation NSArray (Serialization)

- (NSString *)jsonString {
    NSError *error;
    NSData *jsonData = [NSJSONSerialization dataWithJSONObject:self options:0 error:&error];
    if (error) {
        NSLog(@"NSArray+Serialization jsonString error. Param: %@, error: %@, user info: %@", self, error, [error userInfo]);
        return @"";
    }
    return [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
}

+ (NSArray *)arrayFromJSONString:(NSString *)jsonString {
    NSError *error;
    NSData *jsonData = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
    NSArray *jsonArray = [NSJSONSerialization JSONObjectWithData:jsonData
                                                         options:NSJSONReadingAllowFragments
                                                           error:&error];
    if (error) {
        NSLog(@"NSArray+Serialization arrayFromJSONString error. Param: %@, error: %@, user info: %@", jsonString, error, [error userInfo]);
        jsonArray = @[];
    }
    return jsonArray;
}

@end
