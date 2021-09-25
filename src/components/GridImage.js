import React from "react";
import { TouchableOpacity, Image, Dimensions, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const ScreenWidth = Dimensions.get("window").width;

const GridImage = React.memo(({ column, originalImage, thumbnailImage, onSelected }) => {
  const width = (ScreenWidth - 40) / column - 10;

  onSelected = () => {
    onSelected(originalImage);
  };

  return (
    <TouchableOpacity style={styles.containerStyle} onPress={onSelected}>
      <Image
        source={{ uri: thumbnailImage }}
        style={{ width: width, height: width }}
        borderRadius={5}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});

GridImage.prototype = {
  column: PropTypes.number.isRequired,
  originalImage: PropTypes.any.isRequired,
  thumbnailImage: PropTypes.any.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default GridImage;
