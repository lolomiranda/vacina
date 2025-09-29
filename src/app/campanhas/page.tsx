"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CampaignIcon from '@mui/icons-material/Campaign';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function CampanhasPage() {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" color="primary" gutterBottom>Campanhas de Vacinação Atuais</Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>Fique atento às campanhas de vacinação em andamento para garantir a proteção da sua família e da sua comunidade.</Typography>

      <Box sx={{ bgcolor: 'purple.50', p: 3, borderRadius: 2, boxShadow: 3, borderTop: 4, borderColor: 'primary.main', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <CampaignIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6" color="primary">Campanha Nacional Contra a Gripe (Influenza)</Typography>
        </Box>

        <Typography variant="body1" sx={{ mb: 2 }}><strong>Período:</strong> 15 de Abril a 30 de Junho (Datas podem variar por região).</Typography>

        <Box sx={{ display: 'flex', gap: 4, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccessTimeIcon sx={{ color: 'primary.main' }} />
            <Typography variant="body2"><strong>Público-Alvo:</strong> Idosos, gestantes, crianças de 6 meses a 5 anos e profissionais de saúde.</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PlaceIcon sx={{ color: 'primary.main' }} />
            <Typography variant="body2"><strong>Onde:</strong> Postos de saúde e Unidades Básicas de Saúde (UBS).</Typography>
          </Box>
        </Box>

        <Button variant="contained" color="primary">Encontre o Posto Mais Próximo</Button>
      </Box>

      <Typography variant="h5" sx={{ mb: 2 }}>Próximas ou de Rotina</Typography>
      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gap: 1 }}>
        <Box component="li" sx={{ p: 2, bgcolor: 'background.paper', borderLeft: 4, borderColor: 'divider' }}>
          <strong>Vacinação de Rotina (Todas as idades):</strong> Manter a caderneta atualizada em qualquer época do ano.
        </Box>
        <Box component="li" sx={{ p: 2, bgcolor: 'background.paper', borderLeft: 4, borderColor: 'divider' }}>
          <strong>Reforço Bivalente COVID-19:</strong> Fique atento à convocação de novos grupos pelo seu município.
        </Box>
      </Box>
    </Box>
  );
}