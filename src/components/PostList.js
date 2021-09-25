import React from "react";
import { connect } from "react-redux";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import PostSummary from "./common/PostSummary";
import Spinner from "./common/Spinner";
import { fetchPosts, fetchUsers } from "../actions";

const ScreenWidth = Dimensions.get("window").width;

class PostList extends React.Component {
  static navigationOptions = {
    title: "Post List"
  };

  componentDidMount() {
    this.props.onFetchPosts();
    this.props.onFetchUsers();
  }

  selectItem = post => {
    this.props.navigation.navigate("Details", { postDetails: post });
  };

  renderPosts = () => {
    return this.props.postData.posts.map(post => {
      let selectedUser = this.props.userData.users.find(
        user => user.id == post.userId
      );
      return (
        <PostSummary
          key={post.title}
          post={post}
          userName={selectedUser.name}
          onSelected={this.selectItem}
        />
      );
    });
  };

  handleRefresh = () => {
    this.props.onFetchPosts();
    this.props.onFetchUsers();
  };

  render() {
    const { containerStyle, subContainerStyle, textStyle } = styles;

    return (
      <View style={containerStyle}>
        {this.props.postData.posts.length > 0 &&
        this.props.userData.users.length > 0 ? (
          <FlatList
            data={this.props.postData.posts}
            renderItem={this.renderPosts}
            keyExtractor={item => String(item.id)}
            initialNumToRender={3}
            refreshing={
              this.props.userData.isFetchingUsers ||
              this.props.postData.isFetchingPosts
            }
            onRefresh={this.handleRefresh}
          />
        ) : this.props.postData.isErrorFetchingPosts ||
          this.props.userData.isErrorFetchingUsers ? (
          <View style={subContainerStyle}>
            <Text style={textStyle}>Error while loading... 😢</Text>
          </View>
        ) : (
          <View style={subContainerStyle}>
            <Text style={textStyle}>Loading... Please wait 😃</Text>
            <Spinner size={ScreenWidth / 2} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  },
  subContainerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    padding: 20,
    fontSize: 18
  }
});

const mapStateToProps = state => {
  return {
    postData: state.PostReducer,
    userData: state.UserReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: () => {
      dispatch(fetchPosts());
    },
    onFetchUsers: () => {
      dispatch(fetchUsers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
