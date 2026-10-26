'use client';

import React, { useState, useEffect, useCallback } from 'react';
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
  IconButton,
} from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const heroSlides = [
  {
    image: '/images/hero/kedarnath.jpg',
    location: 'Kedarnath, Uttarakhand',
    headline: 'Sacred Valleys & Spiritual Heights',
    subHeadline: 'Walk the ancient pilgrimage trail to the divine Kedarnath Temple, nestled at 3,583m amidst the majestic Garhwal Himalayas.',
    accent: '#F4A261',
  },
  {
    image: '/images/hero/manali.jpg',
    location: 'Manali, Himachal Pradesh',
    headline: 'Snow-Capped Peaks & Thrilling Adventures',
    subHeadline: 'Conquer the Rohtang Pass, ski through pristine snow fields, and experience the magic of Himalayan winters in Manali.',
    accent: '#7DD3FC',
  },
  {
    image: '/images/hero/kerala.jpg',
    location: 'Backwaters, Kerala',
    headline: 'Emerald Waters & Serene Sunsets',
    subHeadline: 'Drift through palm-fringed canals on a traditional houseboat and discover the tranquil beauty of God\'s Own Country.',
    accent: '#86EFAC',
  },
  {
    image: '/images/hero/rishikesh.jpg',
    location: 'Rishikesh, Uttarakhand',
    headline: 'Wild Rapids & Sacred Temples',
    subHeadline: 'Raft the mighty Ganges, feel the rush of whitewater rapids, and witness the spiritual energy of India\'s adventure & yoga capital.',
    accent: '#FCA5A5',
  },
];

const SLIDE_INTERVAL = 6000;

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 900);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: 'calc(100svh - 64px)', md: 'calc(100vh - 74px)' },
        height: { xs: 'auto', md: 'calc(100vh - 74px)' },
        overflow: 'hidden',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* ── Background Image Slides ── */}
      {heroSlides.map((s, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: currentSlide === i ? 1 : 0,
            transform: currentSlide === i ? 'scale(1.0)' : 'scale(1.06)',
            transition: 'opacity 1.2s ease, transform 8s ease',
            willChange: 'opacity, transform',
            zIndex: 0,
          }}
        >
          <Image
            src={s.image}
            alt={s.location}
            fill
            priority={i === 0}
            style={{ objectFit: 'cover' }}
            sizes="100vw"
            quality={90}
          />
        </Box>
      ))}

      {/* ── Dark Overlay with gradient for text readability ── */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: {
            xs: 'linear-gradient(180deg, rgba(7,24,39,0.75) 0%, rgba(7,24,39,0.85) 60%, rgba(7,24,39,0.95) 100%)',
            md: 'linear-gradient(90deg, rgba(7,24,39,0.9) 0%, rgba(7,24,39,0.75) 45%, rgba(7,24,39,0.3) 75%, rgba(7,24,39,0.12) 100%)',
          },
        }}
      />

      {/* ── Slide Location Tag (top-right) ── */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 16, md: 28 },
          right: { xs: 16, md: 40 },
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          backgroundColor: 'rgba(7, 24, 39, 0.55)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 3,
          px: 2,
          py: 0.8,
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: slide.accent,
            boxShadow: `0 0 10px ${slide.accent}`,
          }}
        />
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            fontSize: '0.78rem',
          }}
        >
          {slide.location}
        </Typography>
      </Box>

      {/* ── Main Content Container ── */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          pt: { xs: 5, md: 3 },
          pb: { xs: 11, md: 8 },
        }}
      >
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 8.5, lg: 8 }}>
            {/* Eyebrow Chip */}
            <Box sx={{ mb: 2 }}>
              <Chip
                icon={<VerifiedIcon sx={{ '&&': { color: '#F4A261', fontSize: 18 } }} />}
                label="Trusted Travel Host & Experience Curator"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(10px)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: { xs: '0.75rem', sm: '0.825rem' },
                  letterSpacing: '0.02em',
                  px: 1,
                  py: 1.25,
                  borderRadius: 3,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '& .MuiChip-label': {
                    overflow: 'visible',
                    whiteSpace: 'normal',
                  },
                }}
              />
            </Box>

            {/* Dynamic Headline */}
            <Typography
              variant="h1"
              key={`headline-${currentSlide}`}
              sx={{
                fontWeight: 900,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.1rem', lg: '3.5rem' },
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                mb: 2,
                color: '#FFFFFF',
                textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                animation: 'heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                '@keyframes heroFadeUp': {
                  '0%': { opacity: 0, transform: 'translateY(20px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              {slide.headline}
            </Typography>

            {/* Dynamic Subtitle */}
            <Typography
              variant="body1"
              key={`sub-${currentSlide}`}
              sx={{
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.6,
                color: '#CBD5E1',
                mb: 3.5,
                maxWidth: 620,
                animation: 'heroFadeUp 0.8s 0.12s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                opacity: 0,
              }}
            >
              {slide.subHeadline}
            </Typography>

            {/* Action Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: 4 }}
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
                  fontSize: '0.95rem',
                  py: 1.4,
                  px: 3.5,
                  borderRadius: 2.5,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 8px 24px rgba(244, 162, 97, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 28px rgba(244, 162, 97, 0.5)',
                  },
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
                  fontSize: '0.95rem',
                  py: 1.4,
                  px: 3.5,
                  borderRadius: 2.5,
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap',
                  borderColor: 'rgba(255, 255, 255, 0.35)',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Plan Custom Trip
              </Button>
            </Stack>

            {/* Quick Stats Grid */}
            <Grid
              container
              spacing={{ xs: 2, sm: 3 }}
              sx={{
                pt: 2,
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                maxWidth: 640,
              }}
            >
              {[
                { value: '100%', label: 'Personalized Care' },
                { value: '500+', label: 'Happy Travellers' },
                { value: '4.9★', label: 'Trip Satisfaction' },
                { value: '24/7', label: 'Host Assistance' },
              ].map((stat) => (
                <Grid key={stat.label} size={{ xs: 6, sm: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: '1.15rem', md: '1.35rem' },
                      color: slide.accent,
                      transition: 'color 0.8s ease',
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#94A3B8',
                      fontWeight: 600,
                      fontSize: '0.72rem',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* ── Slide Navigation (bottom-center) ── */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 16, md: 24 },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          backgroundColor: 'rgba(7, 24, 39, 0.45)',
          backdropFilter: 'blur(8px)',
          borderRadius: 4,
          px: 1.5,
          py: 0.75,
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Prev Arrow */}
        <IconButton
          onClick={prevSlide}
          size="small"
          aria-label="Previous slide"
          sx={{
            color: '#FFFFFF',
            backgroundColor: 'rgba(255,255,255,0.08)',
            width: 32,
            height: 32,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.2)',
            },
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
        </IconButton>

        {/* Dot indicators with progress bar */}
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          {heroSlides.map((s, i) => (
            <Box
              key={i}
              onClick={() => goToSlide(i)}
              sx={{
                cursor: 'pointer',
                position: 'relative',
                width: currentSlide === i ? 36 : 10,
                height: 5,
                borderRadius: 3,
                backgroundColor:
                  currentSlide === i
                    ? 'transparent'
                    : 'rgba(255,255,255,0.3)',
                overflow: 'hidden',
                transition: 'width 0.4s ease, background-color 0.3s ease',
                '&:hover': {
                  backgroundColor:
                    currentSlide === i
                      ? 'transparent'
                      : 'rgba(255,255,255,0.6)',
                },
              }}
            >
              {currentSlide === i && (
                <>
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      borderRadius: 3,
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      borderRadius: 3,
                      backgroundColor: s.accent,
                      animation: `progressFill ${SLIDE_INTERVAL}ms linear forwards`,
                      '@keyframes progressFill': {
                        '0%': { width: '0%' },
                        '100%': { width: '100%' },
                      },
                    }}
                  />
                </>
              )}
            </Box>
          ))}
        </Stack>

        {/* Next Arrow */}
        <IconButton
          onClick={nextSlide}
          size="small"
          aria-label="Next slide"
          sx={{
            color: '#FFFFFF',
            backgroundColor: 'rgba(255,255,255,0.08)',
            width: 32,
            height: 32,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.2)',
            },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 13 }} />
        </IconButton>
      </Box>

      {/* ── Scroll-down hint (desktop only) ── */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 16, md: 24 },
          right: { xs: 16, md: 40 },
          zIndex: 5,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
            fontSize: '0.65rem',
          }}
        >
          Scroll
        </Typography>
        <Box
          sx={{
            width: 2,
            height: 28,
            borderRadius: 1,
            backgroundColor: 'rgba(255,255,255,0.2)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '50%',
              backgroundColor: slide.accent,
              borderRadius: 1,
              animation: 'scrollPulse 2s ease-in-out infinite',
              '@keyframes scrollPulse': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(100%)' },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
