//
//  CameraViewManager.m
//  NativeCameraView
//
//  Created by Danyal Aslam on 28.01.23.
//

#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import <React/RCTBridgeModule.h>


@interface RCT_EXTERN_MODULE(CameraView, RCTViewManager)

RCT_EXTERN_METHOD(takePhoto:(nonnull NSNumber *)node)

RCT_EXPORT_VIEW_PROPERTY(onResultImageExported, RCTBubblingEventBlock)

@end
