import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import { PaletteOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  export interface PaletteOptions {
    customPurple: string,

    customRed: {
      light: string,
      main: string
    },
    customGray: {
      light: string,
      main: string,
    }
  }
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontWeightThin: number;
    fontWeightExtraBold: number;
    fontWeightBlack: number;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    fontWeightThin?: number;
    fontWeightExtraBold?: number;
    fontWeightBlack?: number;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    fontWeightThin: true;
    fontWeightExtraBold: true;
    fontWeightBlack: true;
  }
}

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 760,
      lg: 1350,
      xl: 1536
    }
  },
  direction: "rtl",
  palette: {

    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    primary: {
      light: '#dbeafe',
      main: "#3c6ef7",
    },

    customPurple: '#733dd8',

    customRed: {
      light: "#fee2e2",
      main: "#ef4444"
    },
    customGray: {
      light: '#ababab',
      main: "#454545",
    }

  },
  typography: {
    fontFamily: "vazir,Roboto",
    fontWeightThin: 100,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
    fontWeightBlack: 900,
  }
});

export default theme;
