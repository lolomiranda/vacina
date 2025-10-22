"use client";

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import themeOptions from '../theme';

export default function Providers({ children }: { children: React.ReactNode }) {
  const theme = React.useMemo(() => createTheme(themeOptions), []);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
