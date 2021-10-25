# React Native Post List Example

A mobile application created using React Native CLI, React Navigation V6, Redux-saga, Axios & [JSONPlaceholder]( https://jsonplaceholder.typicode.com)

<img src="https://user-images.githubusercontent.com/10815317/138746241-4cbc3118-4a89-4ab4-a2ed-ffafcf73575a.png" width="200"> <img src="https://user-images.githubusercontent.com/10815317/138746263-a175187c-c7d7-4b1a-9c4d-24a31da8318f.png" width="200"> <img src="https://user-images.githubusercontent.com/10815317/138746276-77f13c36-e4f5-447b-883a-b4bf932fd555.png" width="200"> <img src="https://user-images.githubusercontent.com/10815317/138746283-02ed7023-6505-4cab-b06c-ac9aca15773f.png" width="200">

## Features
* This shows summary of 100 posts in a list that contained post title, user’s name.
* The list can be refreshed by pulling down.
* Display description of post.
* Fetch related photos according to post & show the thumbnails in a grid layout When clicking thumbnail, shows the full version of the image.
* Display loading indicator while loading data

## Dependencies
[axios]( https://www.npmjs.com/package/axios/)\
[prop-types]( https://www.npmjs.com/package/prop-types)\
[redux-saga]( https://redux-saga.js.org/)\
[react-navigation]( https://reactnavigation.org/)\
[react-native-modal]( https://github.com/react-native-community/react-native-modal)\
[react-native-image-zoom-viewer]( https://github.com/ascoders/react-native-image-viewer)

## Setup instructions
```
git clone https://github.com/SDushan/react-native-posts.git
cd react-native-posts
npm install
```
Run project on Android
```
react-native run-android
```
Run project on iOS
```
react-native run-ios
