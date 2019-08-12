import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "./Card";

export default class PostSummary extends React.PureComponent {
  onSelected = () => {
    this.props.onSelected(this.props.post);
  };

  render() {
    const {
      containerStyle,
      textContainer,
      headerTextStyle,
      bodyTextStyle,
      iconContainer
    } = styles;

    return (
      <Card>
        <TouchableOpacity style={containerStyle} onPress={this.onSelected}>
          <View style={textContainer}>
            <Text style={headerTextStyle}>{this.props.post.title}</Text>
            <Text style={bodyTextStyle}>{this.props.userName}</Text>
          </View>
          <View style={iconContainer}>
            <Ionicons name="md-arrow-dropright" size={25} />
          </View>
        </TouchableOpacity>
      </Card>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: "row"
  },
  textContainer: {
    backgroundColor: "#F7F7FA",
    width: "90%",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    minHeight: 60
  },
  headerTextStyle: {
    color: "#2A2E43",
    fontSize: 17
  },
  bodyTextStyle: {
    color: "#78849E",
    fontSize: 15
  },
  iconContainer: {
    backgroundColor: "#F7F7FA",
    width: "10%",
    alignItems: "center",
    justifyContent: "center"
  }
};
