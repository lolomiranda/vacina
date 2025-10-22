import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ArrowRightIcon from '@mui/icons-material/ArrowRightAlt';
import BoltIcon from '@mui/icons-material/Bolt';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CampaignIcon from '@mui/icons-material/Campaign';
import Link from 'next/link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function HomePage() {
  return (
    <Box sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          <Box component="span" sx={{ display: 'block', color: 'primary.main' }}>VaciNexo:</Box> Sua Central de Informação
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Informações <strong>confiáveis, transparentes e atualizadas</strong> sobre vacinas e campanhas de vacinação no Brasil e no mundo.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" component={Link} href="/campanhas" endIcon={<ArrowRightIcon />}>
            Ver Campanhas Atuais
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%', minHeight: { xs: 200, md: 260 } }}>
            <BoltIcon color="primary" sx={{ mb: 1 }} />
            <Typography variant="h6">Ciência Rápida</Typography>
            <Typography variant="body2">Descubra como as vacinas funcionam em uma explicação simples e direta, apoiada por dados científicos.</Typography>
            <Box sx={{ mt: 'auto' }}>
              <Button variant="contained" color="primary" component="a" href="https://butantan.gov.br/butantan-educa" endIcon={<OpenInNewIcon />}>
                Entenda a Ciência
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%', minHeight: { xs: 200, md: 260 } }}>
            <LightbulbIcon color="success" sx={{ mb: 1 }} />
            <Typography variant="h6">Mitos e Fatos</Typography>
            <Typography variant="body2">Combata a desinformação. Encontre respostas claras e baseadas em evidências sobre a segurança vacinal.</Typography>
            <Box sx={{ mt: 'auto' }}>
              <Button variant="contained" color="secondary" component="a" href="https://butantan.gov.br/covid/butantan-tira-duvida/tira-duvida-noticias" endIcon={<OpenInNewIcon />}>
                Tire suas Dúvidas
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
          <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%', minHeight: { xs: 200, md: 260 } }}>
            <CampaignIcon color="info" sx={{ mb: 1 }} />
            <Typography variant="h6">Calendário Atualizado</Typography>
            <Typography variant="body2">Tenha acesso ao calendário de vacinação e veja as próximas campanhas perto de você.</Typography>
            <Box sx={{ mt: 'auto' }}>
              <Button variant="contained" color="primary" component={Link} href="/vacinas" endIcon={<VolunteerActivismIcon />}>
                Ver Calendário
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}