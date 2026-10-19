'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Tabs,
  Tab,
  Typography,
  Chip,
  Paper,
  Stack,
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SectionHeader from '@/components/common/SectionHeader';
import PackageCard from '@/components/packages/PackageCard';
import CTASection from '@/components/common/CTASection';
import { packages } from '@/data/packages';

const travelTypes = [
  { label: 'All Packages', value: 'all' },
  { label: 'Group Trips', value: 'group' },
  { label: 'Couples & Honeymoon', value: 'couple' },
  { label: 'Pilgrimage & Spiritual', value: 'pilgrimage' },
  { label: 'Adventure & Treks', value: 'adventure' },
];

export default function PackagesPage() {
  const [selectedType, setSelectedType] = useState('all');

  const filteredPackages =
    selectedType === 'all'
      ? packages
      : packages.filter(
          (p) => p.travelType === selectedType || p.category === selectedType
        );

  return (
    <Box sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Curated Itineraries"
          title="Handcrafted Tour Packages"
          subtitle="Explore our most popular travel itineraries — combining verified accommodation, scenic road journeys, local food, and personal host support."
        />

        {/* Filter Tabs */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: 4, md: 6 },
            overflowX: 'auto',
          }}
        >
          <Tabs
            value={selectedType}
            onChange={(e, val) => setSelectedType(val)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              backgroundColor: '#F1F5F9',
              p: 0.75,
              borderRadius: 3,
              '& .MuiTabs-indicator': { display: 'none' },
              '& .MuiTab-root': {
                borderRadius: 2.5,
                fontWeight: 600,
                fontSize: '0.875rem',
                textTransform: 'none',
                minHeight: 40,
                px: 2.5,
                color: 'text.secondary',
                transition: 'all 0.2s ease',
                '&.Mui-selected': {
                  backgroundColor: '#FFFFFF',
                  color: 'primary.main',
                  boxShadow: '0 2px 8px rgba(18, 59, 93, 0.1)',
                  fontWeight: 700,
                },
              },
            }}
          >
            {travelTypes.map((type) => (
              <Tab key={type.value} label={type.label} value={type.value} />
            ))}
          </Tabs>
        </Box>

        {/* Counter */}
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Showing <strong>{filteredPackages.length}</strong> tour packages
          </Typography>
          {selectedType !== 'all' && (
            <Chip
              label={`Filter: ${travelTypes.find((t) => t.value === selectedType)?.label}`}
              onDelete={() => setSelectedType('all')}
              size="small"
              color="primary"
              variant="outlined"
            />
          )}
        </Box>

        {/* Grid of Packages */}
        <Grid container spacing={3.5} sx={{ mb: 8 }}>
          {filteredPackages.map((pkg) => (
            <Grid key={pkg.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <PackageCard pkg={pkg} />
            </Grid>
          ))}
        </Grid>

        {/* Inclusions Standard Banner */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 4,
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            mb: 8,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 1, textAlign: 'center' }}>
            What Sets Our Tour Packages Apart
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', textAlign: 'center', mb: 4, maxWidth: 600, mx: 'auto' }}
          >
            Every package is tested and led by our travel hosts. We don&apos;t just sell tickets — we ensure you have an incredible trip.
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                <HotelIcon sx={{ color: 'primary.main', fontSize: 24, mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Inspected Stays
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                    Clean, comfortable, and well-rated hotels and scenic camps.
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                <DirectionsCarIcon sx={{ color: 'secondary.main', fontSize: 24, mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Reliable Transport
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                    Experienced mountain drivers and well-maintained private vehicles.
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                <VerifiedIcon sx={{ color: '#F4A261', fontSize: 24, mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Certified Local Guides
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                    Local knowledge, safe routes, and assistance during temple darshans.
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
                <SupportAgentIcon sx={{ color: '#0F766E', fontSize: 24, mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Personal Host Support
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                    Direct WhatsApp and phone assistance throughout your travel duration.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <CTASection
        title="Need a Customized Package or Corporate Group Tour?"
        subtitle="We customize itineraries for family unions, college groups, corporate retreats, and couples. Get in touch with our trip planner."
      />
    </Box>
  );
}
