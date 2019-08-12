import React from "react";
import { View, StatusBar, Image, Dimensions } from "react-native";
import Modal from "react-native-modal";
import ImageViewer from "react-native-image-zoom-viewer";
import Spinner from "./Spinner";

const ScreenWidth = Dimensions.get("window").width;

export default class ImagePreviewer extends React.PureComponent {
  renderFunctions = {
    emptyView: () => <View />,
    loadingIndicator: () => <Spinner />,
    renderImage: props => <Image {...props} />
  };

  render() {
    const images = [
      {
        url: this.props.currentImage
      }
    ];

    return (
      <Modal
        isVisible={this.props.isVisible}
        onBackButtonPress={this.props.onCancel}
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
          onCancel={this.onCancel}
          renderIndicator={this.renderFunctions.emptyView}
          saveToLocalByLongPress={false}
          loadingRender={this.renderFunctions.loadingIndicator}
          renderImage={this.renderFunctions.renderImage}
        />
      </Modal>
    );
  }
}
