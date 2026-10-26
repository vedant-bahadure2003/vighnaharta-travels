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
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlaceIcon from '@mui/icons-material/Place';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import SectionHeader from '@/components/common/SectionHeader';
import { pastJourneys } from '@/data/past-journeys';

export default function FeaturedMemories() {
  // Showcase the top 6 distinct real expeditions
  const featuredJourneys = pastJourneys.slice(0, 6);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#F8FAFC' }}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Real Travel Chronicles"
          title="Past Journeys & Authentic Expeditions"
          subtitle="Real smiles, unscripted camaraderie, and breathtaking terrain across India. Explore recent adventures personally led by our founder Aditya Khursade."
        />

        {/* Journey Album Cards */}
        <Grid container spacing={3.5} sx={{ mb: 6 }}>
          {featuredJourneys.map((journey) => (
            <Grid key={journey.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                component={Link}
                href="/memories"
                sx={{
                  textDecoration: 'none',
                  borderRadius: 3.5,
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 16px rgba(18, 59, 93, 0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 32px rgba(18, 59, 93, 0.12)',
                    '& .memory-img': {
                      transform: 'scale(1.08)',
                    },
                  },
                }}
              >
                {/* Photo & Overlays */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 250,
                    overflow: 'hidden',
                    backgroundColor: '#E2E8F0',
                  }}
                >
                  <Image
                    src={journey.coverImage}
                    alt={journey.title}
                    fill
                    className="memory-img"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                  />

                  {/* Gradient */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.75) 100%)',
                    }}
                  />

                  {/* Top Category Badge */}
                  <Box sx={{ position: 'absolute', top: 12, left: 12 }}>
                    <Chip
                      label={journey.categoryLabel}
                      size="small"
                      sx={{
                        backgroundColor: '#123B5D',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '0.72rem',
                      }}
                    />
                  </Box>

                  {/* Photo Count */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      backgroundColor: 'rgba(0,0,0,0.65)',
                      backdropFilter: 'blur(4px)',
                      color: '#FFFFFF',
                      px: 1.25,
                      py: 0.4,
                      borderRadius: 1.5,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    <CollectionsBookmarkIcon sx={{ fontSize: 14, color: '#F4A261' }} />
                    {journey.images.length} Photos
                  </Box>

                  {/* Location Bar */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 12,
                      left: 14,
                      right: 14,
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    <PlaceIcon sx={{ fontSize: 16, color: '#F4A261', flexShrink: 0 }} />
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        letterSpacing: '0.02em',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {journey.location}
                    </Typography>
                  </Box>
                </Box>

                {/* Card Content */}
                <CardContent sx={{ p: 2.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#F4A261',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      mb: 0.5,
                    }}
                  >
                    {journey.yearOrSeason} • {journey.duration}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 800,
                      color: 'text.primary',
                      lineHeight: 1.3,
                      mb: 1,
                    }}
                  >
                    {journey.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.84rem',
                      lineHeight: 1.55,
                      mb: 2,
                      flex: 1,
                    }}
                  >
                    {journey.story.slice(0, 120)}...
                  </Typography>

                  <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      View Album & Stories
                      <ArrowForwardIcon sx={{ fontSize: 14 }} />
                    </Typography>

                    {journey.priceSnippet && (
                      <Chip
                        label={journey.priceSnippet}
                        size="small"
                        sx={{
                          backgroundColor: '#F1F5F9',
                          color: '#334155',
                          fontWeight: 700,
                          fontSize: '0.7rem',
                        }}
                      />
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Action Button */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            component={Link}
            href="/memories"
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ fontWeight: 700, px: 4, py: 1.5, borderRadius: 2.5 }}
          >
            Explore All 7 Expeditions & 60+ Photos
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
