import React from 'react';

export const fontSizes = {
  s: 10,
  m: 16,
  l: 24,
  xl: 28,
};

const extractTextStyle = props => {
  const {
    display,
    fontSize = 'inherit',
    inline = false,
    bold = false,
    noWrap = false,
    ...rest
  } = props;
  return {
    rest,
    textStyle: {
      display: display ? display : inline ? 'inline-block' : 'block',
      fontSize: fontSizes[fontSize] ? fontSizes[fontSize] : fontSize,
      fontWeight: bold ? 'bold' : undefined,
      justifyContent: 'center',
      whiteSpace: noWrap ? true : 'inherit',
    },
  };
};

const Text = ({ className, ...props }) => {
  const { textStyle, rest } = extractTextStyle(props);
  return <span css={textStyle} {...rest} className={className} />;
};
export default Text;

export const Bold = props => <Text bold inline {...props} />;

export const Texts = ({ spacing = 10, ...props }) => {
  const { textStyle, rest } = extractTextStyle(props);
  return (
    <div
      css={{
        ...textStyle,
        '> * + *': {
          display: 'block',
          marginTop: spacing,
        },
      }}
      {...rest}
    />
  );
};

const Title = ({ marginBottom = 10, ...props }) => (
  <Text {...props} bold css={{ display: 'block', marginBottom: 10 }} />
);
export const H1 = props => <Title fontSize="xl" {...props} />;
export const H2 = props => <Title fontSize="l" {...props} />;
export const H3 = props => <Title fontSize="m" {...props} />;
