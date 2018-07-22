import React from "react";

const SvgBackground = ({
                               className,
                               svgComponent,
                               color,
                               colorDark,
                               colorLight,
                               children
                             }) => {
  const SvgComponent = svgComponent;
  return (
    <div
      css={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center"
      }}
      className={className}
    >
      <div
        css={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          backgroundColor: color
        }}
      >
        <SvgComponent color={colorDark}/>
      </div>
      <div
        css={{
          position: "relative",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default SvgBackground;


