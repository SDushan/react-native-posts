# React Native Post List Example

A mobile application created using Expo CLI, Redux-saga, [JSONPlaceholder]( https://jsonplaceholder.typicode.com) & "eject" to create own native builds.

<img src="https://user-images.githubusercontent.com/10815317/62893073-4fd2b180-bd67-11e9-992f-7ad6a19fa761.jpg" width="200"> <img src="https://user-images.githubusercontent.com/10815317/62894033-87daf400-bd69-11e9-86ad-81c4cb0db5d3.jpg" width="200"> <img src="https://user-images.githubusercontent.com/10815317/62894040-8c9fa800-bd69-11e9-8d97-83d0ff54292c.jpg" width="200"> <img src="https://user-images.githubusercontent.com/10815317/62894052-8f020200-bd69-11e9-8aca-01f0da81b771.jpg" width="200">

## Features
* This shows 100 posts in a list that contained post title, user’s name.
* The list can be refreshed by pulling down.
* The posts are cached so that the second time the app runs it will read them from the cache.
* Display description of post.
* Fetch related photos according to post & show the thumbnails in a grid layout When clicking thumbnail, shows the full version of the image.

## Dependencies
[react-navigation]( https://reactnavigation.org/)\
[react-native-modal]( https://github.com/react-native-community/react-native-modal)\
[react-native-grid-component]( https://github.com/phil-r/react-native-grid-component)\
[react-native-image-zoom-viewer]( https://github.com/ascoders/react-native-image-viewer)

## Setup instructions
```
https://github.com/SDushan/react-native-example.git
cd react-native-example
npm install
```
Run project on Android
```
react-native run-android
```