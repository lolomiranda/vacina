import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Topbar from './components/layout/Topbar';
import Footer from './components/layout/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        <CssBaseline />
        <Box component="main" sx={{ mt: 8, mb: 4 }}>
          <Container maxWidth="lg">{children}</Container>
        </Box>
        <Footer />
      </body>
    </html>
  );
}