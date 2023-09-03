import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#26ee9e',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#e41e24',
    },
    common: {
      silver: '#C0C0C0',
      green: '#26ee9e',
      purple: '#652943',
      darkSelver: '#33333399',
      blue: '#2F80ED',
      darkGreen: '#219653;',
      lightSilver: '#FAFAFA',
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
