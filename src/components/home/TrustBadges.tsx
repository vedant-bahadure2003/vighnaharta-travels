'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
} from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MapIcon from '@mui/icons-material/Map';
import HotelIcon from '@mui/icons-material/Hotel';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import SectionHeader from '@/components/common/SectionHeader';

const trustFeatures = [
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 32, color: '#123B5D' }} />,
    bg: '#EBF4F9',
    title: 'Experienced Travel Hosts',
    description:
      'We personally host and coordinate each journey. You get genuine local insight, on-ground support, and warm hospitality from start to finish.',
  },
  {
    icon: <MapIcon sx={{ fontSize: 32, color: '#0F766E' }} />,
    bg: '#E6F7F5',
    title: 'Thoughtfully Crafted Routes',
    description:
      'No hurried checklists. Our itineraries are balanced for rest, authentic local immersion, scenic photography, and unforgettable memories.',
  },
  {
    icon: <HotelIcon sx={{ fontSize: 32, color: '#F4A261' }} />,
    bg: '#FEF6EE',
    title: 'Comfortable, Handpicked Stays',
    description:
      'From cozy mountain resorts and traditional Kerala houseboats to clean heritage stays, we inspect accommodations for quality and comfort.',
  },
  {
    icon: <PriceCheckIcon sx={{ fontSize: 32, color: '#1E5A8A' }} />,
    bg: '#EFF6FF',
    title: 'Transparent Pricing & No Surprises',
    description:
      'Everything is clear upfront — stays, meals, transport, and guide charges. We believe in fair pricing with zero hidden surcharges.',
  },
];

export default function TrustBadges() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#F8FAFC' }}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Why Travel With Us"
          title="Designed for Travelers Who Value Authentic Care"
          subtitle="We focus on meaningful journeys, genuine group bonding, and stress-free planning so you can immerse yourself in the experience."
        />

        <Grid container spacing={3.5}>
          {trustFeatures.map((item, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  height: '100%',
                  borderRadius: 3.5,
                  border: '1px solid',
                  borderColor: 'rgba(0, 0, 0, 0.06)',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 4px 12px rgba(18, 59, 93, 0.04)',
                  transition: 'all 0.25s ease-in-out',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(18, 59, 93, 0.08)',
                    borderColor: 'rgba(18, 59, 93, 0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 58,
                    height: 58,
                    borderRadius: 2.5,
                    backgroundColor: item.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'text.primary',
                    mb: 1.25,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
