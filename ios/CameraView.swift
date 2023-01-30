import ARKit
import UIKit

func imageFrom(scene:ARSCNView) -> UIImage {
    UIGraphicsBeginImageContextWithOptions(scene.bounds.size, scene.isOpaque, 0.0)
    scene.drawHierarchy(in: scene.bounds, afterScreenUpdates: false)
    let image = UIGraphicsGetImageFromCurrentImageContext()
    UIGraphicsEndImageContext()
    return UIImage(cgImage: (image?.cgImage)!)
}

@objc @objcMembers
class NativeCamera: UIView, ARSCNViewDelegate {
    var sceneView: ARSCNView?
    var lightModel: SCNMaterial.LightingModel = .physicallyBased
    var videoFormat: ARFaceTrackingConfiguration.VideoFormat?
    public var onResultImageExported: RCTBubblingEventBlock?
    

    override init(frame: CGRect) {
        super.init(frame: frame)
        let rect = CGRect(x: 0, y: 0, width: frame.width, height: frame.height)
        sceneView = ARSCNView(frame: rect)
        self.layer.cornerRadius = 25
        self.layer.masksToBounds = true;
        self.addSubview(sceneView!)
        sceneView!.delegate = self
        sceneView!.showsStatistics = false
        
        let configuration = ARFaceTrackingConfiguration()
      videoFormat = configuration.videoFormat
      
      
      print("Swift camera")
        self.start()
    }
  
    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
  
    override func layoutSubviews() {
        super.layoutSubviews()
        let rect = CGRect(x: 0, y: 0, width: self.frame.width, height: self.frame.height)
        self.sceneView?.frame = rect
    }
    
    public func start() {
        let configuration = ARFaceTrackingConfiguration()
        configuration.isLightEstimationEnabled = true
      
      if(videoFormat != nil) {
        configuration.videoFormat =   videoFormat!

      }
          
      print("Scene view")
                sceneView!.session.run(configuration)
    }
  

    public func takePhoto() {
      let path = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true).first!
      let url = URL(fileURLWithPath: path).appendingPathComponent("photoProcessed.png")
      
      try! imageFrom(scene: self.sceneView!).pngData()?.write(to: url)
      
      self.onResultImageExported?(["resultUrl":url.path])
    }
}


@objc (CameraView)
class CameraView: RCTViewManager {
  var nativeCamera : NativeCamera?
  override class func requiresMainQueueSetup() -> Bool {
    return true;
  }
  

  
  
  override func view() -> UIView! {
    
   return initializeNativeCamera()
  }
  

  
  @objc  func takePhoto(_ node:NSNumber) {
      nativeCamera?.takePhoto()
    }
    
  func initializeNativeCamera() -> NativeCamera {
  if (nativeCamera == nil) {
  nativeCamera = NativeCamera()
  }

    return nativeCamera!
  }
    
  
}


