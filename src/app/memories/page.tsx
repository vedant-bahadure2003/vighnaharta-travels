'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Dialog,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SectionHeader from '@/components/common/SectionHeader';
import CTASection from '@/components/common/CTASection';
import { galleryImages, GalleryImage } from '@/data/gallery';

export default function MemoriesPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const activeImage: GalleryImage | null =
    activeImageIndex !== null ? galleryImages[activeImageIndex] : null;

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === 0 ? galleryImages.length - 1 : activeImageIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === galleryImages.length - 1 ? 0 : activeImageIndex + 1
      );
    }
  };

  return (
    <Box sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Travel Memories"
          title="Captured Moments From Our Expeditions"
          subtitle="Real smiles, unscripted camaraderie, and breathtaking landscapes from journeys led by Vighnaharta Tours and Adventures."
        />

        <Grid container spacing={3.5} sx={{ mb: 8 }}>
          {galleryImages.map((img, idx) => (
            <Grid key={img.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                onClick={() => setActiveImageIndex(idx)}
                sx={{
                  borderRadius: 3.5,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 16px rgba(18, 59, 93, 0.06)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 32px rgba(18, 59, 93, 0.12)',
                    '& .gallery-img': {
                      transform: 'scale(1.06)',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 280,
                    overflow: 'hidden',
                    backgroundColor: '#E2E8F0',
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="gallery-img"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                  />

                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.65) 100%)',
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
                        gap: 0.75,
                      }}
                    >
                      <PhotoCameraIcon sx={{ fontSize: 16, color: '#F4A261' }} />
                      <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: '0.02em' }}>
                        {img.location}
                      </Typography>
                    </Box>
                  )}
                </Box>

                <CardContent sx={{ p: 2.5 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', lineHeight: 1.5 }}>
                    {img.caption}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Interactive Modal / Lightbox */}
      <Dialog
        open={activeImageIndex !== null}
        onClose={() => setActiveImageIndex(null)}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              backgroundColor: '#071827',
              borderRadius: 3,
              overflow: 'hidden',
              position: 'relative',
              m: 2,
            },
          },
        }}
      >
        {activeImage && (
          <Box sx={{ position: 'relative', color: '#FFFFFF' }}>
            {/* Close Button */}
            <IconButton
              onClick={() => setActiveImageIndex(null)}
              aria-label="Close photo preview"
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                color: '#FFFFFF',
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 10,
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Prev / Next Buttons */}
            <IconButton
              onClick={handlePrev}
              aria-label="Previous photo"
              sx={{
                position: 'absolute',
                top: '50%',
                left: 12,
                transform: 'translateY(-50%)',
                color: '#FFFFFF',
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 10,
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={handleNext}
              aria-label="Next photo"
              sx={{
                position: 'absolute',
                top: '50%',
                right: 12,
                transform: 'translateY(-50%)',
                color: '#FFFFFF',
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: 10,
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>

            {/* Photo */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 360, sm: 500, md: 560 },
              }}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 960px) 100vw, 800px"
              />
            </Box>

            {/* Caption bar */}
            <Box sx={{ p: 3, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#FFFFFF' }}>
                  {activeImage.caption}
                </Typography>
                {activeImage.location && (
                  <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                    Location: {activeImage.location}
                  </Typography>
                )}
              </Box>
              <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                {activeImageIndex! + 1} of {galleryImages.length}
              </Typography>
            </Box>
          </Box>
        )}
      </Dialog>

      <CTASection
        title="Be Part of Our Next Travel Chapter"
        subtitle="Reserve your spot in our upcoming group expeditions or let us plan a personalized holiday for you."
      />
    </Box>
  );
}
