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
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SectionHeader from '@/components/common/SectionHeader';
import { galleryImages } from '@/data/gallery';

export default function FeaturedMemories() {
  const featured = galleryImages.slice(0, 4);

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#F8FAFC' }}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Real Travel Stories"
          title="Moments From Our Past Group Trips"
          subtitle="Real smiles, real friendships, and unforgettable adventures across India. See the energy and camaraderie that defines our journeys."
        />

        <Grid container spacing={3}>
          {featured.map((img) => (
            <Grid key={img.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  borderRadius: 3.5,
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
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
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 240,
                    overflow: 'hidden',
                    backgroundColor: '#E2E8F0',
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="memory-img"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)',
                    }}
                  />
                  {img.location && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 12,
                        left: 14,
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                      }}
                    >
                      <PhotoCameraIcon sx={{ fontSize: 16, color: '#F4A261' }} />
                      <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.02em' }}>
                        {img.location}
                      </Typography>
                    </Box>
                  )}
                </Box>

                <CardContent sx={{ p: 2.5, flex: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                      lineHeight: 1.5,
                    }}
                  >
                    {img.caption}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            component={Link}
            href="/memories"
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ fontWeight: 700, px: 4, py: 1.5, borderRadius: 2.5 }}
          >
            Explore Full Photo Gallery
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
