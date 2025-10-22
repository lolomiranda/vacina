"use client";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VaccinesIcon from '@mui/icons-material/Vaccines';

export default function Topbar() {
  return (
    <AppBar position="fixed" color="default" elevation={1} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography
          variant="h4"
          color="primary"
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontWeight: 800,
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
          }}
        >
          VaciNexo
          <VaccinesIcon sx={{ fontSize: { xs: 20, sm: 28, md: 34 }, ml: 1 }} />
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
          <InfoOutlinedIcon fontSize="small" />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}