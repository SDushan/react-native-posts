import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Spinner = React.memo(({ size }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size || "large"} />
  </View>
));

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

Spinner.prototype = {
  size: PropTypes.string,
};

export default Spinner;
