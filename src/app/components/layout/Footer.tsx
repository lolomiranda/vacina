import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import NextLink from 'next/link';

export default function Footer() {
  return (
    <Box component="footer" sx={{ width: '100%', bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider', mt: 3, py: 2 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
          <Box>
            <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700 }}>VaciNexo</Typography>
            <Typography variant="caption" color="text.secondary">Informação é a melhor prevenção.</Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)', gap: 1 }}>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700 }}>Sobre</Typography>
              <Box>
                <MuiLink component={NextLink} href="/o que são vacinas" underline="hover" aria-label="conhecimento-sobre-vacinas">Conceito</MuiLink>
              </Box>
              <Box>
                <MuiLink component={NextLink} href="/vacinas sao seguras" underline="hover" aria-label="seguranca-das-vacinas">Segurança</MuiLink>
              </Box>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 700 }}>Recursos</Typography>
              <Box>
                <MuiLink component={NextLink} href="/vacinas" underline="hover" aria-label="todas-as-vacinas">Todas as Vacinas</MuiLink>
              </Box>
              <Box>
                <MuiLink component={NextLink} href="/campanhas" underline="hover" aria-label="campanhas-atuais">Campanhas Atuais</MuiLink>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 2, pt: 1, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="caption" color="text.secondary">© {new Date().getFullYear()} VaciNexo. Desenvolvido com 💖 em Next.js e MUI.</Typography>
        </Box>
      </Container>
    </Box>
  );
}