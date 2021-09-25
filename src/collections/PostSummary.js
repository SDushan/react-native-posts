import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import Card from "../components/Card";
import { assets } from '../../assets/config';

const PostSummary = ({ onSelected, post, userName }) => {
  onHandleSelected = () => {
    onSelected(post);
  };

  const {
    containerStyle,
    textContainer,
    headerTextStyle,
    bodyTextStyle,
    iconContainer,
    iconStyle
  } = styles;

  return (
    <Card>
      <TouchableOpacity style={containerStyle} onPress={this.onHandleSelected}>
        <View style={textContainer}>
          <Text style={headerTextStyle}>{post.title}</Text>
          <Text style={bodyTextStyle}>{userName}</Text>
        </View>
        <View style={iconContainer}>
          <Image source={assets.arrowRight} style={iconStyle} />
        </View>
      </TouchableOpacity>
    </Card>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: "row",
  },
  textContainer: {
    backgroundColor: "#F7F7FA",
    width: "90%",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    minHeight: 60,
  },
  headerTextStyle: {
    color: "#2A2E43",
    fontSize: 17,
  },
  bodyTextStyle: {
    color: "#78849E",
    fontSize: 15,
  },
  iconContainer: {
    backgroundColor: "#F7F7FA",
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyle: {
    width: 18,
    height: 18
  }
};

PostSummary.prototype = {
  onSelected: PropTypes.func.isRequired,
  post: PropTypes.any.isRequired,
  userName: PropTypes.string.isRequired,
};

export default PostSummary;
