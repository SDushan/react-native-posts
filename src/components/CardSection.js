import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const CardSection = React.memo(({ children }) => (
  <View style={styles.containerStyle}>{children}</View>
));

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative",
  },
});

CardSection.prototype = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default CardSection;
