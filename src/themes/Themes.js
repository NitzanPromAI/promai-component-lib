import { createTheme } from "@mui/material/styles";

// declare module '@mui/material/styles' {
//   interface TypographyOptions {
//     body3: {
//       fontSize: string;
//       fontWeight: string;
//       lineHeight: string;
//       letterSpacing: string;
//       textAlign: string;
//     };
//   }
// }

const theme = createTheme({
  palette: {
    primary: {
      main: "#3949AB", // Customize the primary color
      // contrastText: '#ffffff', // Customize the primary font color
    },
    secondary: {
      main: "#F06292", // Customize the secondary color
    },
    light: {
      main: "#FFFFFF",
    },
    error: {
      main: "#CD3636", // Customize the error color
    },
    warning: {
      main: "#CD3636", // Customize the warning color
    },
    info: {
      main: "#00bcd4", // Customize the info color
    },
    success: {
      main: "#30B42D", // Customize the success color
      contrastText: "white",
    },
    text: {
      primary: "#212121", // Customize the text color
      secondary: "#666666", // Customize the text color
      disabled: "#E8EAF6", // Customize the text color
      "disabled-200": "#B0BEC5",
    },
    background: {
      default: "#ffffff", // Customize the default background color
      secondary: "#ECEFF1",
    },
    action: {
      active: "#2196f3", // Customize the active action color
      hover: "#f50057", // Customize the hover action color
      selected: "#00bcd4", // Customize the selected action color
      disabled: "#9e9e9e", // Customize the disabled action color
    },
    gray: {
      300: "#EEE",
    },
  },
  typography: {
    fontFamily: 'lato, "Helvetica", Arial, sans-serif', // Customize the default font family
    fontSize: 12, // Customize the default font size
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      // styleName: H1 - 25px, med;
      fontSize: "25px",
      fontWeight: 500,
      lineHeight: "30px",
      letterSpacing: "0.4000000059604645px",
      textAlign: "left",
      textTransform: "uppercase",
    },

    h2: {
      //styleName: H2 - page title, 30px, meduim;
      fontSize: "30px",
      fontWeight: 500,
      lineHeight: "36px",
      letterSpacing: "0.4px",
      textAlign: "left",
    },

    h3: {
      //styleName: H3- 20px, bold;
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "24px",
      letterSpacing: "0.4px",
      textAlign: "left",
    },

    h4: {
      //styleName: H4 - 20px,med;
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0.4px",
      textAlign: "left",
      textTransform: "uppercase",
    },

    h5: {
      //styleName: H5 - 20px, regular,
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.4px",
      textAlign: "left",
    },

    paragraph: {
      //styleName: P - pargraph, 20px, regular,
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0.4px",
      textAlign: "left",
    },

    // subtitle1: {
    // },
    // subtitle2: {
    // },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: "0.15px",
      textAlign: "left",
      fontFeatureSettings: "clig off, 'liga' off",
    },
    body2: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
      letterSpacing: "0.4px",
      textAlign: "left",
    },
    // body3: {
    //   fontSize: "12px",
    //   fontWeight: 700,
    //   lineHeight: "14px",
    //   letterSpacing: "0.4px",
    //   textAlign: "left",
    // },
    body4: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "14px",
      letterSpacing: "0.4px",
      textAlign: "left",
    },
    body5: {
      fontSize: "12px",
      fontWeight: 300,
      lineHeight: "14px",
      letterSpacing: "0.4px",
      textAlign: "left",
    },
    body6: {
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "14px",
      letterSpacing: "0.105px",
    },
    body7: {
      fontSize: "10px",
      fontWeight: 300,
      letterSpacing: " 0.4px",
      color: "#666",
    },
    body8: {
      textAlign: "center",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      letterSpacing: "0.4px",
    },
    // button: {
    // },
    // caption: {
    // },
    // overline: {
    // },
  },
  // shape: {
  //   borderRadius: 4, // Customize the default border radius
  // },
  // spacing: 2,
  // spacing: {
  //   unit: 8, // Customize the base unit for spacing
  //   factor: 2, // Customize the factor used to calculate responsive spacing
  // },
  // shadows: Array(25).fill('none'), // Disable all box shadows
  // transitions: {
  //   // easing: 'cubic-bezier(0.4, 0, 0.2, 1)', // Customize the easing function for transitions
  //   // duration: {
  //   //   shortest: 150, // Customize the duration of the shortest transitions
  //   //   shorter: 200, // Customize the duration of shorter transitions
  //   //   short: 250, // Customize the duration of short transitions
  //   //   standard: 300, // Customize the standard duration for transitions
  //   // },
  // },
  // zIndex: {
  //   // mobileStepper: 1000,
  //   // speedDial: 1050,
  //   // appBar: 1100,
  //   // drawer: 1200,
  //   // modal: 1300,
  //   // snackbar: 1400,
  //   // tooltip: 1500,
  // },
  // overrides: {
  //   // You can add custom overrides for specific components here
  // },
  // props: {
  //   // You can set default props for specific components here
  // },
});

theme.typography = {
  ...theme.typography,
  body3: {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "14px",
    letterSpacing: "0.4px",
    textAlign: "left",
  },
};

export default theme;
