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
} from '@mui/material';
import SectionHeader from '@/components/common/SectionHeader';
import DestinationCard from '@/components/destinations/DestinationCard';
import CTASection from '@/components/common/CTASection';
import { destinations } from '@/data/destinations';

const categories = [
  { label: 'All Destinations', value: 'all' },
  { label: 'Pilgrimage', value: 'pilgrimage' },
  { label: 'Adventure', value: 'adventure' },
  { label: 'Hill Station', value: 'hill-station' },
  { label: 'Honeymoon & Retreat', value: 'honeymoon' },
  { label: 'Beach', value: 'beach' },
  { label: 'Heritage', value: 'heritage' },
];

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDestinations =
    selectedCategory === 'all'
      ? destinations
      : destinations.filter((d) => d.category === selectedCategory);

  return (
    <Box sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Page Banner / Header */}
        <SectionHeader
          eyebrow="Explore India"
          title="Handpicked Travel Destinations"
          subtitle="From sacred Himalayan sanctuaries to sun-drenched coastal havens, explore our curated selection of verified destinations."
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
            value={selectedCategory}
            onChange={(e, val) => setSelectedCategory(val)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              backgroundColor: '#F1F5F9',
              p: 0.75,
              borderRadius: 3,
              '& .MuiTabs-indicator': {
                display: 'none',
              },
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
            {categories.map((cat) => (
              <Tab key={cat.value} label={cat.label} value={cat.value} />
            ))}
          </Tabs>
        </Box>

        {/* Results Counter */}
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Showing <strong>{filteredDestinations.length}</strong> destinations
          </Typography>
          {selectedCategory !== 'all' && (
            <Chip
              label={`Filter: ${categories.find((c) => c.value === selectedCategory)?.label}`}
              onDelete={() => setSelectedCategory('all')}
              size="small"
              color="primary"
              variant="outlined"
            />
          )}
        </Box>

        {/* Grid of Destinations */}
        <Grid container spacing={3.5} sx={{ mb: 8 }}>
          {filteredDestinations.map((dest) => (
            <Grid key={dest.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <DestinationCard destination={dest} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Conversion Banner */}
      <CTASection
        title="Looking for a Destination Not Listed Here?"
        subtitle="We organize custom expeditions across Ladakh, Spiti, Northeast, Kashmir, and South India. Tell us where you want to go!"
      />
    </Box>
  );
}
