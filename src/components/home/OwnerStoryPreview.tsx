'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Stack,
  Chip,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { siteConfig } from '@/data/site-config';

export default function OwnerStoryPreview() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#FFFFFF', position: 'relative' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
          {/* Left: Collage of real photos */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'relative', maxWidth: 440, mx: 'auto' }}>
              {/* Main Photo: Owner at Kedarnath / Himalayan backdrop */}
              <Paper
                elevation={4}
                sx={{
                  position: 'relative',
                  height: 380,
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 20px 40px rgba(18, 59, 93, 0.1)',
                }}
              >
                <Image
                  src={siteConfig.owner.images.portrait}
                  alt="Founder and Travel Host"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 960px) 100vw, 440px"
                />
              </Paper>

              {/* Overlapping Secondary Photo: Backwaters / Waterfall */}
              <Paper
                elevation={6}
                sx={{
                  position: 'absolute',
                  bottom: -28,
                  right: -24,
                  width: 190,
                  height: 220,
                  borderRadius: 3.5,
                  overflow: 'hidden',
                  border: '4px solid #FFFFFF',
                  boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                <Image
                  src={siteConfig.owner.images.backwaters}
                  alt="Owner travel moment in Kerala"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="190px"
                />
              </Paper>

              {/* Experience badge */}
              <Paper
                elevation={3}
                sx={{
                  position: 'absolute',
                  top: 20,
                  left: -18,
                  backgroundColor: '#0F766E',
                  color: '#FFFFFF',
                  borderRadius: 3,
                  py: 1.25,
                  px: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  boxShadow: '0 8px 20px rgba(15, 118, 110, 0.3)',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 800 }}>
                  Host-Led Tours
                </Typography>
              </Paper>
            </Box>
          </Grid>

          {/* Right: Personal Message & Philosophy */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ pl: { md: 2 } }}>
              <Chip
                label="Meet Your Host"
                size="small"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontSize: '0.75rem',
                  backgroundColor: 'rgba(244, 162, 97, 0.15)',
                  color: '#C26D28',
                }}
              />

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: 'text.primary',
                  fontSize: { xs: '1.85rem', sm: '2.25rem', md: '2.6rem' },
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  mb: 2,
                }}
              >
                Travel is About People, Stories, and Real Connections
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                {siteConfig.owner.introduction}
              </Typography>

              {/* Quote box */}
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: '#F8FAFC',
                  borderLeft: '4px solid',
                  borderColor: 'primary.main',
                  mb: 4,
                  position: 'relative',
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 14,
                    fontSize: 40,
                    color: 'rgba(18, 59, 93, 0.1)',
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: 'italic',
                    color: '#334155',
                    lineHeight: 1.6,
                    fontWeight: 500,
                    mb: 1.5,
                  }}
                >
                  &ldquo;{siteConfig.owner.personalMessage}&rdquo;
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'primary.main' }}>
                  {siteConfig.owner.name}
                  <Typography
                    component="span"
                    variant="caption"
                    sx={{ color: 'text.secondary', ml: 1, fontWeight: 500 }}
                  >
                    — {siteConfig.owner.role}
                  </Typography>
                </Typography>
              </Box>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  component={Link}
                  href="/about"
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ fontWeight: 700, px: 3, py: 1.25 }}
                >
                  Read Our Journey
                </Button>

                <Button
                  component="a"
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  color="secondary"
                  startIcon={<WhatsAppIcon />}
                  sx={{ fontWeight: 600, px: 3, py: 1.25 }}
                >
                  Direct Message Host
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
