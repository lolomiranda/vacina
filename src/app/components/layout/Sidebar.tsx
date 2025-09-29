'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import { navLinks } from './navData';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Box component="aside" sx={{ width: 240, position: 'fixed', left: 0, top: 0, height: '100vh', bgcolor: 'background.paper', borderRight: 1, borderColor: 'divider', display: { xs: 'none', md: 'block' }, pt: 8 }}>
      <Box sx={{ p: 2, pb: 1 }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FavoriteIcon color="primary" />
            <Typography variant="h6" color="primary">VaciNexo</Typography>
          </Box>
        </Link>
        <Typography variant="caption" color="text.secondary">Saúde e Confiança</Typography>
      </Box>

      <Divider sx={{ my: 1 }} />

      <List>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon as any;
          return (
            <ListItemButton key={link.name} component={Link} href={link.href} selected={isActive} sx={{ py: 1.5 }}>
              <ListItemIcon>
                {Icon ? <Icon /> : null}
              </ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItemButton>
          );
        })}
      </List>

      <Box sx={{ position: 'absolute', bottom: 8, width: '100%', px: 2 }}>
        <Typography variant="caption" color="text.secondary">© {new Date().getFullYear()} VaciNexo. Todos os direitos reservados.</Typography>
      </Box>
    </Box>
  );
}