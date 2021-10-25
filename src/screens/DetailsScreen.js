import React from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  Image,
  Linking,
  FlatList,
  StatusBar,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

import Spinner from "../components/Spinner";
import Card from "../components/Card";
import CardSection from "../components/CardSection";
import GridImage from "../components/GridImage";
import ImagePreviewer from "../collections/ImagePreviewer";
import { fetchPhotos } from "../actions";
import { assets } from '../../assets/config';

const ScreenWidth = Dimensions.get("window").width;

class DetailsScreen extends React.Component {
  state = {
    user: [],
    post: null,
    isImagePreview: false,
    selectedImageUrl: "",
  };

  // static navigationOptions = {
  //   title: "Details",
  // };

  componentDidMount() {
    const { route, onFetchPhotos, userData } = this.props;
    onFetchPhotos();
    let selectedUser = userData.users.find(
      (user) => user.id == route.params.postDetails.userId
    );
    this.setState({
      post: route.params.postDetails,
      user: selectedUser,
    });
  }

  selectItem = (originalImage) => {
    this.setState({
      isImagePreview: true,
      selectedImageUrl: originalImage,
    });
  };

  onCancelPreviwer = () => {
    this.setState({
      isImagePreview: false,
    });
  };

  linkingUrl = () => {
    Linking.openURL(`https://${this.state.user.website}`);
  };

  renderHeader = () => {
    const { user, post } = this.state;
    const {
      headerContentStyle,
      title,
      headerTitle,
      subHeaderTitle,
      iconContainer,
      iconStyle
    } = styles;

    return (
      <>
        <CardSection>
          <View style={headerContentStyle}>
            <Text style={title}>{post.title}</Text>
            <Text style={subHeaderTitle}>{post.body}</Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={headerContentStyle}>
            <Text style={headerTitle}>Post By</Text>
            <Text style={subHeaderTitle}>{user.name}</Text>
            <View style={iconContainer}>
              <Image source={assets.mail} style={iconStyle} />
              <Text style={subHeaderTitle}>{user.email}</Text>
            </View>
            <View style={iconContainer}>
              <Image source={assets.call} style={iconStyle} />
              <Text style={subHeaderTitle}>{user.phone}</Text>
            </View>
            <TouchableOpacity onPress={this.linkingUrl}>
              <Text style={subHeaderTitle}>{user.website}</Text>
            </TouchableOpacity>
            <Text style={headerTitle}>Address</Text>
            <Text style={subHeaderTitle}>{user.address.suite + ","}</Text>
            <Text style={subHeaderTitle}>{user.address.street + ","}</Text>
            <Text style={subHeaderTitle}>{user.address.city + "."}</Text>
            <Text style={subHeaderTitle}>
              {"Zip Code: " + user.address.zipcode}
            </Text>
            <Text style={subHeaderTitle}>
              {"Latitude: " + user.address.geo.lat}
            </Text>
            <Text style={subHeaderTitle}>
              {"Longitude: " + user.address.geo.lng}
            </Text>
            <Text style={headerTitle}>Company Details</Text>
            <Text style={subHeaderTitle}>{user.company.name}</Text>
            <Text
              style={subHeaderTitle}
            >{`"${user.company.catchPhrase}"`}</Text>
            <Text style={subHeaderTitle}>
              {"Business studies on: " + user.company.bs}
            </Text>
          </View>
        </CardSection>
      </>
    )
  }

  renderItem = ({ item }) => (
    <GridImage
      key={item.id}
      originalImage={item.url}
      thumbnailImage={item.thumbnailUrl}
      column={3}
      onSelected={this.selectItem}
    />
  );

  render() {
    const { user, isImagePreview, selectedImageUrl } = this.state;
    const { isErrorFetchingPhotos, photos } = this.props.photoData;
    const { containerStyle, subContainerStyle, textStyle, imagesContainer } = styles;

    return (
      <SafeAreaView style={containerStyle}>
        {user.company && !isImagePreview && (
          <Card>
            <CardSection>
              <View style={imagesContainer}>
                {photos.length > 0 ? (
                  <FlatList
                    renderItem={this.renderItem}
                    data={photos}
                    numColumns={3}
                    keyExtractor={(item) => String(item.id)}
                    ListHeaderComponent={this.renderHeader}
                  />
                ) : isErrorFetchingPhotos ? (
                  <View style={subContainerStyle}>
                    <Text style={textStyle}>Error while loading... 😢</Text>
                  </View>
                ) : (
                  <View style={subContainerStyle}>
                    <Text style={textStyle}>Loading... Please wait 😃</Text>
                    <Spinner size={ScreenWidth / 4} />
                  </View>
                )}
              </View>
            </CardSection>
          </Card>
        )}
        <ImagePreviewer
          isVisible={isImagePreview}
          onCancel={this.onCancelPreviwer}
          currentImage={selectedImageUrl}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "column",
    marginTop: StatusBar.currentHeight || 0,
  },
  headerContentStyle: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
  },
  title: {
    fontSize: 15,
    color: "#2A2E43",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 5,
  },
  headerTitle: {
    fontSize: 15,
    color: "#78849E",
    paddingTop: 5,
  },
  subHeaderTitle: {
    fontSize: 14,
    color: "#2A2E43",
    paddingLeft: 10,
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10,
  },
  subContainerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    padding: 20,
    fontSize: 18,
  },
  imagesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    width: 14,
    height: 14
  }
});

const mapStateToProps = (state) => ({
  userData: state.UserReducer,
  photoData: state.PhotoReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPhotos: () => {
      dispatch(fetchPhotos());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
