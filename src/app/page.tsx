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
import HeroSection from '@/components/home/HeroSection';
import TrustBadges from '@/components/home/TrustBadges';
import SectionHeader from '@/components/common/SectionHeader';
import DestinationCard from '@/components/destinations/DestinationCard';
import PackageCard from '@/components/packages/PackageCard';
import OwnerStoryPreview from '@/components/home/OwnerStoryPreview';
import FeaturedMemories from '@/components/home/FeaturedMemories';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/common/CTASection';
import EnquiryForm from '@/components/enquiry/EnquiryForm';
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

            {/* Right form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <EnquiryForm
                title="Start Planning Your Trip"
                subtitle="Share your preferred destinations and dates. We will design the best route for you."
              />
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
