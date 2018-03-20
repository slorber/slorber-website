import "typeface-roboto";
import React from "react";
import { StyleSheet, Text as RNText } from 'react-native';

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: "roboto",
  },
  xl: {
    fontSize: 32,
  },
  l: {
    fontSize: 26,
  },
  m: {
    fontSize: 22,
  },
  s: {
    fontSize: 16,
  },
});


const getFontSizeStyle = (props) => {
  if ( props.fontSize ) {
    return {fontSize: props.fontSize};
  }
  else if ( props.xl ) {
    return styles.xl;
  }
  else if ( props.l ) {
    return styles.l;
  }
  else if ( props.m ) {
    return styles.m;
  }
  else if ( props.s ) {
    return styles.s;
  }
  else {
    return styles.m;
  }
};

const AppText = props => (
  <RNText
    {...props}
    style={[
      styles.defaultText,
      getFontSizeStyle(props),
      props.style,
    ]}
  />
);
export default AppText;