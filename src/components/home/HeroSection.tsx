'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Chip,
  Paper,
} from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarRateIcon from '@mui/icons-material/StarRate';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '88vh' },
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, md: 10 },
        pb: { xs: 10, md: 12 },
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #071929 0%, #123B5D 55%, #0F5868 100%)',
        color: '#FFFFFF',
      }}
    >
      {/* Background Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -120,
          right: -120,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 162, 97, 0.15) 0%, rgba(244, 162, 97, 0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 550,
          height: 550,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15, 118, 110, 0.25) 0%, rgba(15, 118, 110, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
          {/* Left Column: Headlines & Call to Actions */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ mb: 2 }}>
              <Chip
                icon={<VerifiedIcon sx={{ '&&': { color: '#F4A261', fontSize: 18 } }} />}
                label="Trusted Travel Host & Experience Curator"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(10px)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.825rem',
                  letterSpacing: '0.02em',
                  px: 1,
                  py: 2,
                  borderRadius: 3,
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  mb: 3,
                }}
              />
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2.5rem', sm: '3.25rem', md: '3.75rem' },
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                mb: 2.5,
                color: '#FFFFFF',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              Explore Sacred Valleys, Snowy Peaks &{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #F4A261 0%, #FFD166 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Timeless Adventures
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.05rem', md: '1.2rem' },
                lineHeight: 1.65,
                color: '#CBD5E1',
                mb: 4,
                maxWidth: 580,
              }}
            >
              From the spiritual heights of Kedarnath to snow adventures in Manali and peaceful Kerala backwaters. Travel in small, curated groups with personal guidance every step of the way.
            </Typography>

            {/* Action Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: 5 }}
            >
              <Button
                component={Link}
                href="/packages"
                variant="contained"
                color="warning"
                size="large"
                startIcon={<ExploreIcon />}
                sx={{
                  fontWeight: 700,
                  fontSize: '1rem',
                  py: 1.75,
                  px: 3.5,
                  borderRadius: 2.5,
                  boxShadow: '0 8px 24px rgba(244, 162, 97, 0.4)',
                }}
              >
                Browse Tour Packages
              </Button>

              <Button
                component={Link}
                href="/contact"
                variant="outlined"
                size="large"
                startIcon={<FlightTakeoffIcon />}
                sx={{
                  fontWeight: 700,
                  fontSize: '1rem',
                  py: 1.75,
                  px: 3.5,
                  borderRadius: 2.5,
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.35)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  },
                }}
              >
                Plan Custom Trip
              </Button>
            </Stack>

            {/* Quick Proof Stats */}
            <Grid container spacing={3} sx={{ pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#F4A261' }}>
                  100%
                </Typography>
                <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 500 }}>
                  Personalized Care
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#F4A261' }}>
                  500+
                </Typography>
                <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 500 }}>
                  Happy Travellers
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#F4A261' }}>
                  4.9★
                </Typography>
                <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 500 }}>
                  Trip Satisfaction
                </Typography>
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#F4A261' }}>
                  24/7
                </Typography>
                <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 500 }}>
                  Host Assistance
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column: Hero Visual Collage */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: 'relative',
                mx: 'auto',
                maxWidth: { xs: 380, sm: 440, md: '100%' },
              }}
            >
              {/* Main Photo Card */}
              <Paper
                elevation={6}
                sx={{
                  position: 'relative',
                  height: { xs: 380, sm: 460 },
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '3px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 24px 48px rgba(0, 0, 0, 0.45)',
                }}
              >
                <Image
                  src="/images/owner/owner-kedarnath-portrait.png"
                  alt="Kedarnath Mountain Experience"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 960px) 100vw, 450px"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(7, 24, 39, 0.85) 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#F4A261',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      display: 'block',
                    }}
                  >
                    Host Led Expedition
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF' }}>
                    Kedarnath Himalayas
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#CBD5E1' }}>
                    Spiritual grandeur & unforgettable group moments
                  </Typography>
                </Box>
              </Paper>

              {/* Floating Floating Pill: Real Group Experience */}
              <Paper
                elevation={4}
                sx={{
                  position: 'absolute',
                  top: { xs: 16, sm: 24 },
                  left: { xs: -16, sm: -28 },
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 3,
                  p: 1.75,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25)',
                  maxWidth: 240,
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    backgroundColor: '#CCFBF1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0F766E',
                    flexShrink: 0,
                  }}
                >
                  <PeopleAltIcon />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
                    Real Group Trips
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B' }}>
                    Make lifelong travel friends
                  </Typography>
                </Box>
              </Paper>

              {/* Floating Bottom Pill: Handpicked Stays */}
              <Paper
                elevation={4}
                sx={{
                  position: 'absolute',
                  bottom: { xs: -20, sm: -24 },
                  right: { xs: -12, sm: -20 },
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 3,
                  p: 1.75,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25)',
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    backgroundColor: '#FEF3C7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D97706',
                    flexShrink: 0,
                  }}
                >
                  <StarRateIcon />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
                    Verified Stays
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B' }}>
                    Comfort & safety guaranteed
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
