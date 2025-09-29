import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box component="footer" sx={{ width: '100%', bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider', mt: 4, py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Typography variant="h6" color="primary">VaciNexo</Typography>
            <Typography variant="body2" color="text.secondary">Informação é a melhor prevenção.</Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)', gap: 2 }}>
            <Box>
              <Typography variant="overline">Sobre</Typography>
              <Box>
                <Link href="/o-que-sao-vacinas">Conceito</Link>
              </Box>
              <Box>
                <Link href="/vacinas-sao-seguras">Segurança</Link>
              </Box>
            </Box>
            <Box>
              <Typography variant="overline">Recursos</Typography>
              <Box>
                <Link href="/vacinas">Todas as Vacinas</Link>
              </Box>
              <Box>
                <Link href="/campanhas">Campanhas Atuais</Link>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 3, pt: 2, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="caption" color="text.secondary">© {new Date().getFullYear()} VaciNexo. Desenvolvido com 💖 em Next.js e MUI.</Typography>
        </Box>
      </Container>
    </Box>
  );
}