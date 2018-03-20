import "typeface-roboto";
import React from "react";
import { StyleSheet, Text as RNText } from 'react-native';

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: "roboto",
  },
});

const AppText = props => (
  <RNText
    {...props}
    style={[
      styles.defaultText,
      props.style,
    ]}
  />
);
export default AppText;