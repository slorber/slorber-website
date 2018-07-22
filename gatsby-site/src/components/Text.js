import React from "react";

export const fontSizes = {
  s: 12,
  m: 16,
  l: 22,
};


const Text = ({
                className,
                fontSize = fontSizes.m,
                bold = false,
                ...props,
}) => (
  <span
    css={{
      fontSize: fontSize,
      fontWeight: bold ? 'bold' : undefined,
      justifyContent: 'center',
    }}
    {...props}
    className={className}
  />
);
export default Text;
