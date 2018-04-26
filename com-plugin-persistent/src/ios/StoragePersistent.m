//
//  StoragePersistent.m
//
//  Created by Hubert Yap on 25/10/2016.
//

#import "StoragePersistent.h"

static BOOL const kDebug = YES;

@implementation StoragePersistent

- (void)setBoolean:(CDVInvokedUrlCommand *)command {
    if (kDebug) {
        NSLog(@"setBoolean: %@", command.arguments);
    }

    [self.commandDelegate runInBackground:^{
        CDVPluginResult *pluginResult = nil;
        NSString *key = [command.arguments objectAtIndex:0];
        NSNumber *value = [command.arguments objectAtIndex:1];

        NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
        [defaults setBool:value.boolValue forKey:key];
        [defaults synchronize];

        // return result
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}


- (void)getBoolean:(CDVInvokedUrlCommand *)command {
    if (kDebug) {
        NSLog(@"getBoolean: %@", command.arguments);
    }

    [self.commandDelegate runInBackground:^{
        CDVPluginResult *pluginResult = nil;
        NSString *key = [command.arguments objectAtIndex:0];

        NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
        BOOL value = [defaults boolForKey:key];

        // return result
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsBool:value];

        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}


- (void)setInt:(CDVInvokedUrlCommand *)command {
    if (kDebug) {
        NSLog(@"setInt: %@", command.arguments);
    }

    [self.commandDelegate runInBackground:^{
        CDVPluginResult *pluginResult = nil;
        NSString *key = [command.arguments objectAtIndex:0];
        NSNumber *value = [command.arguments objectAtIndex:1];

        NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
        [defaults setInteger:value.integerValue forKey:key];
        [defaults synchronize];

        // return result
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}


- (void)getInt:(CDVInvokedUrlCommand *)command {
    if (kDebug) {
        NSLog(@"getInt: %@", command.arguments);
    }

    [self.commandDelegate runInBackground:^{
        CDVPluginResult *pluginResult = nil;
        NSString *key = [command.arguments objectAtIndex:0];

        NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
        NSInteger value = [defaults integerForKey:key];

        // return result
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsNSInteger:value];

        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}


- (void)setLong:(CDVInvokedUrlCommand *)command {
    if (kDebug) {
        NSLog(@"setLong: %@", command.arguments);
    }

    [self.commandDelegate runInBackground:^{
        CDVPluginResult *pluginResult = nil;
        NSString *key = [command.arguments objectAtIndex:0];
        NSNumber *value = [command.arguments objectAtIndex:1];

        NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
        [defaults setInteger:value.integerValue forKey:key];
        [defaults synchronize];

        // return result
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}


- (void)getLong:(CDVInvokedUrlCommand *)command {
    if (kDebug) {
        NSLog(@"getLong: %@", command.arguments);
    }

    [self.commandDelegate runInBackground:^{
        CDVPluginResult *pluginResult = nil;
        NSString *key = [command.arguments objectAtIndex:0];

        NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
        NSInteger value = [defaults integerForKey:key];

        // return result
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsNSInteger:value];

        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}


- (void)setString:(CDVInvokedUrlCommand *)command {
    if (kDebug) {
        NSLog(@"setString: %@", command.arguments);
    }

    [self.commandDelegate runInBackground:^{
        CDVPluginResult *pluginResult = nil;
        NSString *key = [command.arguments objectAtIndex:0];
        NSString *value = [command.arguments objectAtIndex:1];

        NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
        [defaults setObject:value forKey:key];
        [defaults synchronize];

        // return result
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}


- (void)getString:(CDVInvokedUrlCommand *)command {
    if (kDebug) {
        NSLog(@"getLong: %@", command.arguments);
    }

    [self.commandDelegate runInBackground:^{
        CDVPluginResult *pluginResult = nil;
        NSString *key = [command.arguments objectAtIndex:0];

        NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
        NSString *value = [defaults objectForKey:key];

        // return result
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:value];

        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}


@end
