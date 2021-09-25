import React from "react";
import { View, StatusBar, Image, Dimensions } from "react-native";
import Modal from "react-native-modal";
import ImageViewer from "react-native-image-zoom-viewer";
import PropTypes from "prop-types";

import Spinner from "../components/Spinner";

const ScreenWidth = Dimensions.get("window").width;

const ImagePreviewer = ({ currentImage, isVisible, onCancel }) => {
  renderFunctions = {
    emptyView: () => <View />,
    loadingIndicator: () => <Spinner />,
    renderImage: (props) => <Image {...props} />,
  };

  const images = [
    {
      url: currentImage,
    },
  ];

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onCancel}
      backdropOpacity={1}
      animationOut="zoomOut"
      deviceWidth={ScreenWidth}
    >
      <StatusBar
        translucent={false}
        backgroundColor="rgba(0,0,0,1)"
        barStyle={"light-content"}
      />
      <ImageViewer
        imageUrls={images}
        onCancel={onCancel}
        renderIndicator={this.renderFunctions.emptyView}
        saveToLocalByLongPress={false}
        loadingRender={this.renderFunctions.loadingIndicator}
        renderImage={this.renderFunctions.renderImage}
      />
    </Modal>
  );
};

ImagePreviewer.prototype = {
  currentImage: PropTypes.any.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ImagePreviewer;
