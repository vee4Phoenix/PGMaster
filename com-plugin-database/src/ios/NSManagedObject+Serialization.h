//
//  NSManagedObject+Serialization.h
//
//  Created by Hubert Yap on 20/06/2014.
//  Copyright (c) 2014 Hubert Yap. All rights reserved.
//

#import <CoreData/CoreData.h>

@interface NSManagedObject (Serialization)

- (NSDictionary *)toDictionary;

- (void)populateFromDictionary:(NSDictionary *)dict;

+ (instancetype)initWithDictionary:(NSDictionary *)dict
                         inContext:(NSManagedObjectContext *)context;

@end
