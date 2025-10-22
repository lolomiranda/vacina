import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Topbar from './components/layout/Topbar';
import Footer from './components/layout/Footer';
import Providers from './Providers';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        <Providers>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Topbar />
            <Box component="main" sx={{ mt: 8, mb: 0, flexGrow: 1 }}>
              <Container maxWidth="lg">{children}</Container>
            </Box>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}