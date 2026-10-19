'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Paper,
} from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { siteConfig } from '@/data/site-config';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = 'Ready to Embark on Your Next Great Journey?',
  subtitle = 'Whether you want to join an upcoming group expedition to the Himalayas or design a private getaway with loved ones, we are here to craft your perfect experience.',
}: CTASectionProps) {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#F8FAFC' }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            position: 'relative',
            borderRadius: 4,
            overflow: 'hidden',
            p: { xs: 5, sm: 6, md: 8 },
            background: 'linear-gradient(135deg, #071929 0%, #123B5D 60%, #0F766E 100%)',
            color: '#FFFFFF',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(18, 59, 93, 0.25)',
          }}
        >
          {/* Subtle background glow */}
          <Box
            sx={{
              position: 'absolute',
              top: -80,
              right: -80,
              width: 320,
              height: 320,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(244, 162, 97, 0.2) 0%, rgba(244, 162, 97, 0) 70%)',
              pointerEvents: 'none',
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 700, mx: 'auto' }}>
            <Typography
              variant="overline"
              sx={{
                fontWeight: 700,
                color: '#F4A261',
                letterSpacing: '0.1em',
                fontSize: '0.85rem',
                display: 'block',
                mb: 1.5,
              }}
            >
              Start Your Adventure
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '1.85rem', sm: '2.4rem', md: '2.85rem' },
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                mb: 2.5,
                color: '#FFFFFF',
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.65,
                color: '#CBD5E1',
                mb: 4.5,
              }}
            >
              {subtitle}
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                color="warning"
                size="large"
                startIcon={<FlightTakeoffIcon />}
                sx={{
                  fontWeight: 700,
                  fontSize: '1rem',
                  py: 1.75,
                  px: 4,
                  borderRadius: 2.5,
                  boxShadow: '0 8px 24px rgba(244, 162, 97, 0.4)',
                }}
              >
                Plan Your Trip
              </Button>

              <Button
                component="a"
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="large"
                startIcon={<WhatsAppIcon sx={{ '&&': { color: '#25D366' } }} />}
                sx={{
                  fontWeight: 700,
                  fontSize: '1rem',
                  py: 1.75,
                  px: 3.5,
                  borderRadius: 2.5,
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.35)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    borderColor: '#25D366',
                    backgroundColor: 'rgba(37, 211, 102, 0.1)',
                  },
                }}
              >
                Chat on WhatsApp
              </Button>

              <Button
                component={Link}
                href="/packages"
                variant="text"
                size="large"
                startIcon={<ExploreIcon />}
                sx={{
                  fontWeight: 600,
                  color: '#CBD5E1',
                  '&:hover': { color: '#FFFFFF' },
                }}
              >
                View Packages
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
