//
//  StoragePersistent.h
//
//  Created by Hubert Yap on 25/10/2016.
//

#import <Cordova/CDVPlugin.h>

@interface StoragePersistent : CDVPlugin

- (void)setBoolean:(CDVInvokedUrlCommand *)command;
- (void)getBoolean:(CDVInvokedUrlCommand *)command;
- (void)setInt:(CDVInvokedUrlCommand *)command;
- (void)getInt:(CDVInvokedUrlCommand *)command;
- (void)setLong:(CDVInvokedUrlCommand *)command;
- (void)getLong:(CDVInvokedUrlCommand *)command;
- (void)setString:(CDVInvokedUrlCommand *)command;
- (void)getString:(CDVInvokedUrlCommand *)command;

@end
