import React from "react";
import { TouchableOpacity, Image, Dimensions, StyleSheet } from "react-native";

const ScreenWidth = Dimensions.get("window").width;

export default class GridImage extends React.PureComponent {
  onSelected = () => {
    this.props.onSelected(this.props.originalImage);
  };

  render() {
    const width = (ScreenWidth - 40) / this.props.column - 10;

    return (
      <TouchableOpacity style={styles.containerStyle} onPress={this.onSelected}>
        <Image
          source={{ uri: this.props.thumbnailImage }}
          style={{ width: width, height: width }}
          borderRadius={5}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  }
});
