//
//  NSArray+Serialization.h
//
//  Created by Hubert Yap on 20/06/2014.
//  Copyright (c) 2014 Hubert Yap. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface NSArray (Serialization)

- (NSString *)jsonString;
+ (NSArray *)arrayFromJSONString:(NSString *)jsonString;

@end
