# NativeCameraModule

A simple camera app consisting of two screens built using React Native, TypeScript and a cameraView.swift native class. For Now it will only work for iOS

Getting Started
Clone the repository to your local machine

Install the required dependencies using yarn

Run the app on a simulator or device using npx react-native  run-ios or npx react-native  run-android

Screen Overview
Camera Screen: A Camera Screen camera view that allows users to take photos, a permission popup will appear to get camera permission

Result Screen: A screen that displays the photos taken in the app
Press Retake button to take photo again, it will pop back to Camera Screen, while use photo will do nothing

Features
Native camera integration using cameraView.swift, here I am using cameraView.swift as native class for iOS camera
calling Native Camera class using Bridging to React Native side, 

const CameraView = requireNativeComponent(`CameraView`) // allows us to calling native module to React Native side



Dependencies
React Native
React Native Camera
Contributions

Feel free to contribute to the project by creating pull requests.

Contact
For any questions or inquiries, please reach out to send2danyalaslam@gmail.com.
