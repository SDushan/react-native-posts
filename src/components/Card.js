import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Card = React.memo(({ children }) => (
  <View style={styles.containerStyle}>{children}</View>
));

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
});

Card.prototype = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Card;
