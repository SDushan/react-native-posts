import React from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Grid from "react-native-grid-component";
import Spinner from "./common/Spinner";
import Card from "./common/Card";
import CardSection from "./common/CardSection";
import GridImage from "./common/GridImage";
import ImagePreviewer from "./common/ImagePreviewer";
import { fetchPhotos } from "../actions";

const ScreenWidth = Dimensions.get("window").width;

class PostDetail extends React.Component {
  state = {
    user: [],
    isImagePreview: false,
    selectedImageUrl: ""
  };

  static navigationOptions = {
    title: "Post Details"
  };

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

  selectItem = originalImage => {
    this.setState({
      isImagePreview: true,
      selectedImageUrl: originalImage
    });
  };

  onCancelPreviwer = () => {
    this.setState({
      isImagePreview: false
    });
  };

  linkingUrl = () => {
    Linking.openURL(`https://${this.state.user.website}`);
  };

  renderItem = data => (
    <GridImage
      key={data.id}
      originalImage={data.url}
      thumbnailImage={data.thumbnailUrl}
      column={3}
      onSelected={this.selectItem}
    />
  );

  render() {
    const {
      containerStyle,
      headerContentStyle,
      title,
      headerTitle,
      subHeaderTitle,
      iconContainer,
      subContainerStyle,
      textStyle,
      imagesContainer
    } = styles;
    return (
      <ScrollView style={containerStyle}>
        {this.state.user.company && !this.state.isImagePreview && (
          <Card>
            <CardSection>
              <View style={headerContentStyle}>
                <Text style={title}>{this.state.post.title}</Text>
                <Text style={subHeaderTitle}>{this.state.post.body}</Text>
              </View>
            </CardSection>
            <CardSection>
              <View style={headerContentStyle}>
                <Text style={headerTitle}>Post By</Text>
                <Text style={subHeaderTitle}>{this.state.user.name}</Text>
                <View style={iconContainer}>
                  <Ionicons name="md-mail" size={14} />
                  <Text style={subHeaderTitle}>{this.state.user.email}</Text>
                </View>
                <View style={iconContainer}>
                  <Ionicons name="ios-call" size={14} />
                  <Text style={subHeaderTitle}>{this.state.user.phone}</Text>
                </View>
                <TouchableOpacity onPress={this.linkingUrl}>
                  <Text style={subHeaderTitle}>{this.state.user.website}</Text>
                </TouchableOpacity>

                <Text style={headerTitle}>Address</Text>
                <Text style={subHeaderTitle}>
                  {this.state.user.address.suite + ","}
                </Text>
                <Text style={subHeaderTitle}>
                  {this.state.user.address.street + ","}
                </Text>
                <Text style={subHeaderTitle}>
                  {this.state.user.address.city + "."}
                </Text>
                <Text style={subHeaderTitle}>
                  {"Zip Code: " + this.state.user.address.zipcode}
                </Text>
                <Text style={subHeaderTitle}>
                  {"Latitude: " + this.state.user.address.geo.lat}
                </Text>
                <Text style={subHeaderTitle}>
                  {"Longitude: " + this.state.user.address.geo.lng}
                </Text>

                <Text style={headerTitle}>Company Details</Text>
                <Text style={subHeaderTitle}>
                  {this.state.user.company.name}
                </Text>
                <Text style={subHeaderTitle}>{`"${
                  this.state.user.company.catchPhrase
                }"`}</Text>
                <Text style={subHeaderTitle}>
                  {"Business studies on: " + this.state.user.company.bs}
                </Text>
              </View>
            </CardSection>

            <CardSection>
              <View style={imagesContainer}>
                {this.props.photoData.photos.length > 0 ? (
                  <Grid
                    style={{ flex: 1 }}
                    renderItem={this.renderItem}
                    data={this.props.photoData.photos}
                    numColumns={3}
                    keyExtractor={item => String(item.id)}
                  />
                ) : this.props.photoData.isErrorFetchingPhotos ? (
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
          isVisible={this.state.isImagePreview}
          onCancel={this.onCancelPreviwer}
          currentImage={this.state.selectedImageUrl}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "column"
  },
  headerContentStyle: {
    flex: 1,
    flexDirection: "column",
    padding: 5
  },
  title: {
    fontSize: 15,
    color: "#2A2E43",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 5
  },
  headerTitle: {
    fontSize: 15,
    color: "#78849E",
    paddingTop: 5
  },
  subHeaderTitle: {
    fontSize: 14,
    color: "#2A2E43",
    paddingLeft: 10
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10
  },
  subContainerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    padding: 20,
    fontSize: 18
  },
  imagesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return {
    userData: state.UserReducer,
    photoData: state.PhotoReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPhotos: () => {
      dispatch(fetchPhotos());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
