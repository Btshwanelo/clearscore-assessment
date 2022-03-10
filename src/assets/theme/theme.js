import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const Customtheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
      grey: "#f5f5f5",
    },
    primary: {
      main: "#ffffff",
      secondary: "#E6E6E6",
    },
    secondary: {
      main: "#ffc000",
    },
    custom: {
      midnight: "#253648",
      gallery: "#F7F7F8",
      cta: "#0F81A3",
      cta_hover: "#66AEC5",
      green_pill_text: "#15693B",
      green_pill_background: "#DDF9EA",
      orange_pill_text: "#764C25",
      orange_pill_background: "#FDEFE2",
      gray_pill_background: "#EEEFF1",
    },
  },
  shadows: [
    {
      1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
    {
      2: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    },
    {
      3: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    },
    {
      4: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    },
    {
      5: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    },
    {
      6: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    },
    {
      7: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    },
    { 8: "0 0.5rem 0.75rem rgba(0,0,0,0.16)" },
  ],
  typography: {
    spacing: {
      large: "24px",
      medium: "16px",
      small: "10px",
      tiny: "8px",
      micro: "4px",
    },
    font: {
      font_size_medium: "20px",
      font_size_mediumsmall: "16px",
      font_size_mediummini: "14px",
      font_size_mediumtiny: "12px",
    },
    fontWeight: {
      bold: 700,
      regular: 400,
    },
    borderRadius: {
      border_radius_small: "8px",
      border_radius_medium: "4px",
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  components: {},
});

export default Customtheme;
