'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#123B5D',
      light: '#1E5A8A',
      dark: '#0B2740',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0F766E',
      light: '#14B8A6',
      dark: '#0D5D57',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#F4A261',
      light: '#F7C08A',
      dark: '#E08C3B',
      contrastText: '#1D2939',
    },
    error: {
      main: '#DC2626',
      light: '#EF4444',
      dark: '#B91C1C',
    },
    success: {
      main: '#16A34A',
      light: '#22C55E',
      dark: '#15803D',
    },
    background: {
      default: '#FAF9F6',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1D2939',
      secondary: '#667085',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: 'var(--font-inter), "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.15,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
      lineHeight: 1.25,
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.95rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#344054',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#667085',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(16, 24, 40, 0.05)',
    '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
    '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
    '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
    '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
    '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
    '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
    ...Array(18).fill('0px 32px 64px -12px rgba(16, 24, 40, 0.14)'),
  ] as unknown as typeof createTheme.prototype.shadows,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 24px',
          fontSize: '0.95rem',
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
          '&:hover': {
            boxShadow: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderWidth: 1.5,
          '&:hover': {
            borderWidth: 1.5,
          },
        },
        sizeLarge: {
          padding: '14px 32px',
          fontSize: '1.05rem',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'warning' },
          style: {
            color: '#FFFFFF',
            backgroundColor: '#F4A261',
            '&:hover': {
              backgroundColor: '#E08C3B',
              transform: 'translateY(-1px)',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#123B5D',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '12px !important',
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: '8px 0',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          minHeight: 56,
          '&.Mui-expanded': {
            minHeight: 56,
          },
        },
        content: {
          '&.Mui-expanded': {
            margin: '12px 0',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: 1240,
          },
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
