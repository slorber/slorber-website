

export const WidthBreakpoint = 1000;
export const HeightBreakpoint = 700;

export const IsSmall = `@media (max-width: ${WidthBreakpoint - 1}px)`;
export const IsLarge = `@media (min-width: ${WidthBreakpoint}px)`;

export const IsSmallHeight = `@media (max-height: ${HeightBreakpoint - 1}px)`;
export const IsLargeHeight = `@media (min-height: ${HeightBreakpoint}px)`;

export const responsiveHeightStyle = (small, large) => ({
  [IsSmallHeight]: small,
  [IsLargeHeight]: large
});

export const responsiveHeightSpacing = (attribute, small = 15, large = 40) => responsiveHeightStyle({ [attribute]: small }, { [attribute]: large });

