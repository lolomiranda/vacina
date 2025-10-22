// Export theme options only — do not call createTheme on the server
// Palette inspired by healthcare: calming greens/teals and soft blues
import type { ThemeOptions } from '@mui/material/styles';

// Export theme options only — do not call createTheme on the server
// Palette inspired by healthcare: calming greens/teals and soft blues
const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light' as const,
    // More colorful, health-friendly palette
    primary: {
      main: '#009688', // teal
      light: '#33ab9f',
      dark: '#005b4f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff7043', // coral
      light: '#ff8a65',
      dark: '#c63f17',
      contrastText: '#ffffff',
    },
    success: {
      main: '#43a047', // vivid green
    },
    info: {
      main: '#29b6f6', // bright blue
    },
    warning: {
      main: '#ffb300',
    },
    error: {
      main: '#e53935',
    },
    background: {
      default: '#f8fffc',
      paper: '#ffffff',
    },
    text: {
      primary: '#073b36',
      secondary: '#40514b',
    },
    divider: '#e0f7f4',
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: false,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          paddingLeft: 14,
          paddingRight: 14,
        },
        containedPrimary: {
          background: 'linear-gradient(90deg, #00bfa5 0%, #009688 100%)',
          boxShadow: '0 4px 12px rgba(0,120,85,0.12)',
          '&:hover': {
            background: 'linear-gradient(90deg, #00a58a 0%, #00796b 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(90deg, #ff8a65 0%, #ff7043 100%)',
          boxShadow: '0 4px 12px rgba(255,112,67,0.12)',
          '&:hover': {
            background: 'linear-gradient(90deg, #ff7b4d 0%, #e64a19 100%)',
          },
        },
      },
    },
  },
};

export default themeOptions;
