import { createTheme } from '@mui/material';

export const Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#000000',
      //   paper: 'rgb(12, 12, 12)',
      gradientBackground:
        ' linear-gradient(180deg, rgb(32, 32, 32), rgb(12, 12, 12)',
    },
    text: {
      primary: ' #9758a6',
      secondary: 'rgba(63,31,146,0.7)',
    },
    centered: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});
