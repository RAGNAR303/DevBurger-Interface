import { createTheme } from '@mui/material';

// export const Theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#3f51b5',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//     background: {
//       paper: 'rgb(12, 12, 12)',
//     },
//     divider: '#19fd05',
//     text: {
//       primary: ' #9758a6',
//       secondary: 'rgba(63,31,146,0.7)',
//     },
//   },
// });

// theme.js
// import { createTheme } from '@mui/material/styles';

 export const Theme = createTheme({
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: '0 10px',
          backgroundColor: 'rgb(12, 12, 12)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          padding: '16px',
        },
        head: {
      padding: "20px",
          backgroundColor: '#9758a6',
          color: ' #ff8c05',
          fontWeight: 'bold',
        },
        body: {
          color: ' #9758a6',
          fontWeight: 'bold',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(even)': {
            backgroundColor: 'rgb(12, 12, 12)',
          },
          '&:hover': {
            backgroundColor: 'rgb(24, 24, 24)',
          },
        },
      },
    },
  },
});

export default Theme;
