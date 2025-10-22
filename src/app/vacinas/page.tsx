import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function VacinasPage() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" sx={{ color: 'primary.main', mb: 2, borderBottom: '4px solid', pb: 1 }}>
        Calendário Nacional de Vacinação 🚑💉
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Mantenha sua caderneta de vacinação em dia! A proteção se estende da infância à terceira idade.
      </Typography>

      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12} md={4}>
          <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                bgcolor: 'info.main',
                color: 'common.white',
                minHeight: { xs: 140, md: 180 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              <Typography variant="h6" align="center">
                Infância (0 a 10 anos) 👶
              </Typography>
            </Box>

            <Box sx={{ p: 2 }}>
              <Typography variant="body2" color="text.secondary">
                A fase mais crucial para a proteção contra doenças graves. Consulte o calendário e mantenha doses em dia.
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                <li>🍼 Ao nascer: BCG e Hepatite B.</li>
                <li>📅 2, 4 e 6 meses: Pentavalente, Rotavírus e Pneumocócica.</li>
                <li>🎯 15 meses: Tríplice Viral e Hepatite A.</li>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                bgcolor: 'secondary.main',
                color: 'common.white',
                minHeight: { xs: 140, md: 180 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              <Typography variant="h6" align="center">
                Adultos e Adolescentes 🧑‍🤝‍🧑
              </Typography>
            </Box>

            <Box sx={{ p: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Reforços são necessários e novas vacinas, como a HPV, são importantes. Verifique recomendações por faixa etária.
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                <li>🛡️ HPV: indicada na adolescência.</li>
                <li>🔁 Dupla Adulto (dT): reforço a cada 10 anos.</li>
                <li>💉 Hepatite B: esquema de 3 doses se necessário.</li>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                bgcolor: 'warning.main',
                color: 'common.white',
                minHeight: { xs: 140, md: 180 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            >
              <Typography variant="h6" align="center">
                Idosos e Grupos de Risco 👵👴
              </Typography>
            </Box>

            <Box sx={{ p: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Foco na proteção contra doenças respiratórias. Vacinações periódicas reduzem riscos significativamente.
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                <li>🩺 Influenza: dose anual.</li>
                <li>🫁 Pneumocócica: Proteção contra pneumonia.</li>
                <li>🦠 COVID-19: reforços conforme diretrizes.</li>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}