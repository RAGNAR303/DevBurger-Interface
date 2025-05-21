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
      paper: 'rgb(12, 12, 12)',
    },
    divider: '#19fd05',
    text: {
      primary: ' #9758a6',
      secondary: 'rgba(63,31,146,0.7)',
    },
  },
});
