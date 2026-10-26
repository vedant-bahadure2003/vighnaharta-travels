'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Grid,
  Button,
  Typography,
  Paper,
  Stack,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HeroSection from '@/components/home/HeroSection';
import TrustBadges from '@/components/home/TrustBadges';
import SectionHeader from '@/components/common/SectionHeader';
import DestinationCard from '@/components/destinations/DestinationCard';
import PackageCard from '@/components/packages/PackageCard';
import OwnerStoryPreview from '@/components/home/OwnerStoryPreview';
import FeaturedMemories from '@/components/home/FeaturedMemories';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/common/CTASection';
import { siteConfig } from '@/data/site-config';
import { destinations } from '@/data/destinations';
import { packages } from '@/data/packages';

export default function HomePage() {
  const featuredDestinations = destinations.slice(0, 4);
  const featuredPackages = packages.slice(0, 4);

  return (
    <Box component="div">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Pillars */}
      <TrustBadges />

      {/* 3. Featured Destinations */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <SectionHeader
            eyebrow="Curated Locations"
            title="Popular Destinations Across India"
            subtitle="From snow-capped peaks in the north to tranquil backwaters in the south, explore places handpicked for unmatched experiences."
          />

          <Grid container spacing={3.5} sx={{ mb: 6 }}>
            {featuredDestinations.map((dest) => (
              <Grid key={dest.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <DestinationCard destination={dest} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={Link}
              href="/destinations"
              variant="outlined"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ fontWeight: 700, px: 4, py: 1.5, borderRadius: 2.5 }}
            >
              Explore All Destinations
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 4. Featured Tour Packages */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#F8FAFC' }}>
        <Container maxWidth="lg">
          <SectionHeader
            eyebrow="Ready-to-Travel"
            title="Handcrafted Tour Packages"
            subtitle="Carefully scheduled itineraries combining scenic travel, quality stays, guided treks, and memorable activities."
          />

          <Grid container spacing={3.5} sx={{ mb: 6 }}>
            {featuredPackages.map((pkg) => (
              <Grid key={pkg.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <PackageCard pkg={pkg} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={Link}
              href="/packages"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ fontWeight: 700, px: 4, py: 1.5, borderRadius: 2.5 }}
            >
              View All Tour Packages
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 5. Owner Story & Personal Hosting */}
      <OwnerStoryPreview />

      {/* 6. Travel Memories / Real Past Trips */}
      <FeaturedMemories />

      {/* 7. Direct Enquiry Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center' }}>
            {/* Left explanation */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="overline"
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  letterSpacing: '0.08em',
                  fontSize: '0.8rem',
                }}
              >
                Tailored Itineraries
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: 'text.primary',
                  fontSize: { xs: '1.85rem', sm: '2.4rem' },
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  mb: 2.5,
                  mt: 1,
                }}
              >
                Want a Trip Built Around Your Schedule?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 4 }}
              >
                Whether you are planning a solo spiritual retreat, a memorable honeymoon, or a 30-person family get-together, we take care of the details so you can simply enjoy the journey.
              </Typography>

              <Stack spacing={2} sx={{ mb: 4 }}>
                {[
                  'Custom dates & flexible pacing',
                  'Accommodation tailored to your budget & style',
                  'Direct communication with your trip coordinator',
                  'Assistance with permits, vehicle booking & local guides',
                ].map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: '#0F766E', fontSize: 22 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
                  Fast Turnaround
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  We review custom requests daily and reply with personalized itinerary options via WhatsApp or phone.
                </Typography>
              </Paper>
            </Grid>

            {/* Right: Direct Contact & WhatsApp Action Hub */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                {/* Featured WhatsApp Action Card */}
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, sm: 4 },
                    borderRadius: 4,
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #25D366',
                    boxShadow: '0 12px 30px rgba(37, 211, 102, 0.12)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      py: 0.6,
                      px: 2,
                      borderBottomLeftRadius: 12,
                    }}
                  >
                    Direct Host Access
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 3,
                        backgroundColor: '#DCFCE7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <WhatsAppIcon sx={{ fontSize: 30, color: '#25D366' }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#166534', fontWeight: 700, textTransform: 'uppercase' }}>
                        Fastest Response
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                        Chat on WhatsApp
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.6 }}>
                    No forms or waiting. Message our expedition host directly on WhatsApp. We share custom itineraries, route recommendations, and group dates within minutes.
                  </Typography>

                  <Button
                    component="a"
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi Vighnaharta Tours! I would like to plan a custom trip. Please share details and itinerary options.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="large"
                    fullWidth
                    startIcon={<WhatsAppIcon />}
                    sx={{
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      py: 1.5,
                      borderRadius: 2.5,
                      fontSize: '1rem',
                      boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)',
                      '&:hover': {
                        backgroundColor: '#1EBE5D',
                      },
                    }}
                  >
                    Chat on WhatsApp ({siteConfig.contact.whatsapp})
                  </Button>
                </Paper>

                {/* Secondary Call & Email Grid */}
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2.5,
                        borderRadius: 3,
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                        <PhoneIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                          Direct Call
                        </Typography>
                      </Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1.5 }}>
                        Talk directly with trip host (9 AM - 9 PM)
                      </Typography>
                      <Button
                        component="a"
                        href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                        variant="outlined"
                        size="small"
                        fullWidth
                        sx={{
                          mt: 'auto',
                          fontWeight: 700,
                          borderRadius: 2,
                        }}
                      >
                        Call {siteConfig.contact.phone}
                      </Button>
                    </Paper>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2.5,
                        borderRadius: 3,
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                        <EmailIcon sx={{ color: '#F4A261', fontSize: 20 }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary' }}>
                          Email Us
                        </Typography>
                      </Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1.5 }}>
                        Send custom RFPs or detailed queries
                      </Typography>
                      <Button
                        component="a"
                        href={`mailto:${siteConfig.contact.email}?subject=Custom%20Trip%20Inquiry%20-%20Vighnaharta%20Tours`}
                        variant="outlined"
                        color="warning"
                        size="small"
                        fullWidth
                        sx={{
                          mt: 'auto',
                          fontWeight: 700,
                          borderRadius: 2,
                        }}
                      >
                        Send Email
                      </Button>
                    </Paper>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 8. FAQs */}
      <FAQSection />

      {/* 9. Final CTA */}
      <CTASection />
    </Box>
  );
}
