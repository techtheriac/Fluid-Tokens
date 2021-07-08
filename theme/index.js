/* 
VARIANTS 
- These can be used to group repeatedly used style definitions
- Think of them as SASS mixins
*/

const theme = {
  breakpoints: [],
  borders: {},
  borderStyles: {},
  borderWidths: {},
  colors: {
    text: "#333333",
    background: "#FFFFFF",
    primary: "",
    secondary: "",
    accent: "",
    highlight: "",
    muted: "",

    modes: {},
  },
  fonts: {},
  fontSizes: {
    // min -> max
    x4sm: `var(--step--4)`,
    x3sm: `var(--step--3)`,
    x2sm: `var(--step--2)`,
    xsm: `var(--step--1)`,
    base: `var(--step-0)`,
    xl: `var(--step-1)`,
    x2l: `var(--step-2)`,
    x3l: `var(--step-3)`,
    x4l: `var(--step-4)`,
    x5l: `var(--step-5)`,
  },
  fontWeights: {
    heading: 700,
  },
  letterSpacings: {},
  lineHeights: {},
  opacities: {},
  radii: {
    small: "10px",
  },
  shadows: {},
  sizes: {},
  space: {
    // min -> max
    x4sm: `var(--space-3xs)`,
    x3sm: `var(--space-2xs)`,
    x2sm: `var(--space-xs)`,
    xsm: `var(--space-s)`,
    base: `var(--space-m)`,
    xl: `var(--space-l)`,
    x2l: `var(--space-xl)`,
    x3l: `var(--space-2xl)`,
    x4l: `var(--space-3xl)`,
  },
  transitions: {},
  zIndices: {},

  // Variant definitions
  texts: {
    hero: {
      fontWeight: "heading",
      fontSize: "x5l",
    },
  },

  buttons: {
    small: {
      color: "text",
      borderRadius: "small",
    },
  },
};

export default theme;
