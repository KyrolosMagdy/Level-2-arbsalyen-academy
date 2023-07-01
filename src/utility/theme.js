import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#DA5323',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#333333',
    },
    common: {
      silver: '#C0C0C0',
      green: '#2F8E89',
      secondary: "#FAFAFA",
      purple: '#652943',
      darkSelver: '#33333399',
      blue: '#2F80ED',
      darkGreen: '#219653;',
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontSize: '1rem ',
    },
    button: {
      textDecoration: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});
