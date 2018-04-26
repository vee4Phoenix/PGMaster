//
//  DatabasePlugin.h
//
//  Created by Hubert Yap on 20/06/2014.
//  Copyright (c) 2014 Hubert Yap. All rights reserved.
//

#import <Cordova/CDVPlugin.h>

@interface DatabasePlugin : CDVPlugin

- (void)saveReflection:(CDVInvokedUrlCommand *)command;
- (void)getReflections:(CDVInvokedUrlCommand *)command;
- (void)getAllReflections:(CDVInvokedUrlCommand *)command;

@end
