'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
  Button,
  Chip,
  Stack,
  Tab,
  Tabs,
  Paper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import TerrainIcon from '@mui/icons-material/Terrain';
import SectionHeader from '@/components/common/SectionHeader';
import CTASection from '@/components/common/CTASection';
import { pastJourneys } from '@/data/past-journeys';
import { JourneyImage, PastJourney } from '@/types/journey';
import { siteConfig } from '@/data/site-config';

type ViewMode = 'journeys' | 'gallery';
type CategoryFilter = 'all' | 'pilgrimage' | 'himalayas' | 'sahyadri' | 'monsoon' | 'leisure';

export default function MemoriesPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('journeys');
  const [selectedJourneyId, setSelectedJourneyId] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Flattened image pool according to filters
  const filteredImages: JourneyImage[] = useMemo(() => {
    let images = pastJourneys.flatMap((j) => j.images);

    if (selectedJourneyId !== 'all') {
      images = images.filter((img) => img.journeyId === selectedJourneyId);
    } else if (categoryFilter !== 'all') {
      const matchingJourneyIds = pastJourneys
        .filter((j) => j.category === categoryFilter)
        .map((j) => j.id);
      images = images.filter((img) => matchingJourneyIds.includes(img.journeyId));
    }

    return images;
  }, [selectedJourneyId, categoryFilter]);

  const activeImage: JourneyImage | null =
    activeImageIndex !== null && activeImageIndex >= 0 && activeImageIndex < filteredImages.length
      ? filteredImages[activeImageIndex]
      : null;

  const activeJourney: PastJourney | undefined = useMemo(() => {
    if (!activeImage) return undefined;
    return pastJourneys.find((j) => j.id === activeImage.journeyId);
  }, [activeImage]);

  const handlePrev = useCallback(() => {
    if (activeImageIndex !== null && filteredImages.length > 0) {
      setActiveImageIndex((prev) =>
        prev === 0 ? filteredImages.length - 1 : (prev ?? 0) - 1
      );
    }
  }, [activeImageIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (activeImageIndex !== null && filteredImages.length > 0) {
      setActiveImageIndex((prev) =>
        prev === filteredImages.length - 1 ? 0 : (prev ?? 0) + 1
      );
    }
  }, [activeImageIndex, filteredImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setActiveImageIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, handlePrev, handleNext]);

  // Total metrics
  const totalMoments = pastJourneys.reduce((acc, curr) => acc + curr.images.length, 0);

  const handleOpenJourneyAlbum = (journeyId: string) => {
    setSelectedJourneyId(journeyId);
    setViewMode('gallery');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <Box sx={{ pt: { xs: 5, md: 8 }, pb: { xs: 8, md: 10 }, backgroundColor: '#FAF9F6' }}>
      <Container maxWidth="lg">
        {/* Page Hero Header */}
        <SectionHeader
          eyebrow="Unscripted • Authentic • Host-Led"
          title="Past Journeys & Expedition Archives"
          subtitle="Real smiles, raw mountain trails, sacred temple bells, and lifelong friendships. Every single photo represents an authentic group journey led by Vighnaharta Tours and Adventures."
        />

        {/* Highlight Stats Ribbon */}
        <Grid container spacing={2} sx={{ mb: 6 }}>
          {[
            { label: 'Completed Expeditions', value: `${pastJourneys.length} Handcrafted Tours`, icon: <TerrainIcon sx={{ color: 'primary.main' }} /> },
            { label: 'Moments Captured', value: `${totalMoments} Real Photographs`, icon: <CollectionsBookmarkIcon sx={{ color: '#0F766E' }} /> },
            { label: 'Happy Travelers', value: '450+ Satisfied Guests', icon: <GroupsIcon sx={{ color: '#F4A261' }} /> },
            { label: 'Trip Guidance', value: '100% Host-Accompanied', icon: <VerifiedIcon sx={{ color: '#16A34A' }} /> },
          ].map((stat, idx) => (
            <Grid key={idx} size={{ xs: 6, sm: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 12px rgba(18, 59, 93, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2.5,
                    backgroundColor: 'rgba(18, 59, 93, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {stat.icon}
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: 'block' }}>
                    {stat.label}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', lineHeight: 1.2 }}>
                    {stat.value}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* View Switcher & Filter Controls */}
        <Box
          sx={{
            mb: 4,
            p: 1.5,
            backgroundColor: '#FFFFFF',
            borderRadius: 3,
            border: '1px solid rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'stretch', md: 'center' },
            gap: 2,
          }}
        >
          {/* View Mode Toggle */}
          <Tabs
            value={viewMode}
            onChange={(_, val) => setViewMode(val)}
            sx={{
              '& .MuiTabs-indicator': { backgroundColor: 'primary.main', height: 3, borderRadius: 1.5 },
              minHeight: 44,
            }}
          >
            <Tab
              value="journeys"
              icon={<CollectionsBookmarkIcon fontSize="small" />}
              iconPosition="start"
              label={`Expedition Albums (${pastJourneys.length})`}
              sx={{ fontWeight: 700, textTransform: 'none', minHeight: 44 }}
            />
            <Tab
              value="gallery"
              icon={<GridViewIcon fontSize="small" />}
              iconPosition="start"
              label={`All Photos Stream (${totalMoments})`}
              sx={{ fontWeight: 700, textTransform: 'none', minHeight: 44 }}
            />
          </Tabs>

          {/* WhatsApp Direct Query Prompt */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 1 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: { xs: 'none', sm: 'block' } }}>
              Want to join our next expedition?
            </Typography>
            <Button
              component="a"
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hi Aditya! I was browsing your Past Journeys gallery on the website and would love to know about upcoming group trip dates.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
              startIcon={<WhatsAppIcon sx={{ color: '#25D366' }} />}
              sx={{
                fontWeight: 700,
                borderColor: '#25D366',
                color: '#166534',
                borderRadius: 2,
                '&:hover': {
                  borderColor: '#1EBE5D',
                  backgroundColor: '#DCFCE7',
                },
              }}
            >
              Ask Host on WhatsApp
            </Button>
          </Box>
        </Box>

        {/* Sub-Filters for Gallery View */}
        {viewMode === 'gallery' && (
          <Box sx={{ mb: 4 }}>
            {/* Journey Pill Selector */}
            <Typography variant="overline" sx={{ fontWeight: 800, color: 'text.secondary', letterSpacing: '0.06em', mb: 1, display: 'block' }}>
              Filter By Expedition:
            </Typography>
            <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', pb: 1, flexWrap: { xs: 'nowrap', sm: 'wrap' } }}>
              <Chip
                label={`All Expeditions (${totalMoments})`}
                onClick={() => {
                  setSelectedJourneyId('all');
                  setCategoryFilter('all');
                }}
                color={selectedJourneyId === 'all' && categoryFilter === 'all' ? 'primary' : 'default'}
                variant={selectedJourneyId === 'all' && categoryFilter === 'all' ? 'filled' : 'outlined'}
                sx={{ fontWeight: 700, cursor: 'pointer', flexShrink: 0 }}
              />
              {pastJourneys.map((j) => (
                <Chip
                  key={j.id}
                  label={`${j.title.split(' ')[0]} ${j.title.split(' ')[1] || ''} (${j.images.length})`}
                  onClick={() => {
                    setSelectedJourneyId(j.id);
                    setCategoryFilter('all');
                  }}
                  color={selectedJourneyId === j.id ? 'primary' : 'default'}
                  variant={selectedJourneyId === j.id ? 'filled' : 'outlined'}
                  sx={{ fontWeight: 700, cursor: 'pointer', flexShrink: 0 }}
                />
              ))}
            </Stack>

            {/* Category Filter Pills (when viewing all journeys) */}
            {selectedJourneyId === 'all' && (
              <Stack direction="row" spacing={1} sx={{ mt: 1.5, overflowX: 'auto', pb: 0.5 }}>
                {[
                  { key: 'all', label: 'All Themes' },
                  { key: 'pilgrimage', label: '🛕 Sacred Pilgrimages (21)' },
                  { key: 'himalayas', label: '❄️ Himalayan Snow & Adventure (14)' },
                  { key: 'sahyadri', label: '🧗 Sahyadri Mountain Treks (10)' },
                  { key: 'monsoon', label: '🌊 Monsoon Trails & Waterfalls (9)' },
                  { key: 'leisure', label: '🌴 South India & Culture (7)' },
                ].map((cat) => (
                  <Chip
                    key={cat.key}
                    label={cat.label}
                    size="small"
                    onClick={() => setCategoryFilter(cat.key as CategoryFilter)}
                    color={categoryFilter === cat.key ? 'secondary' : 'default'}
                    variant={categoryFilter === cat.key ? 'filled' : 'outlined'}
                    sx={{ fontWeight: 600, cursor: 'pointer', flexShrink: 0 }}
                  />
                ))}
              </Stack>
            )}
          </Box>
        )}

        {/* --------------------------------------------- */}
        {/* VIEW 1: EXPEDITION ALBUMS (Journey Card View) */}
        {/* --------------------------------------------- */}
        {viewMode === 'journeys' && (
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {pastJourneys.map((journey) => (
              <Grid key={journey.id} size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 8px 24px rgba(18, 59, 93, 0.06)',
                    transition: 'all 0.35s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 20px 40px rgba(18, 59, 93, 0.14)',
                      '& .cover-image': {
                        transform: 'scale(1.06)',
                      },
                    },
                  }}
                >
                  {/* Journey Cover Photo */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: 290,
                      overflow: 'hidden',
                      backgroundColor: '#E2E8F0',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleOpenJourneyAlbum(journey.id)}
                  >
                    <Image
                      src={journey.coverImage}
                      alt={journey.title}
                      fill
                      className="cover-image"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease',
                      }}
                      sizes="(max-width: 960px) 100vw, 50vw"
                    />

                    {/* Gradient Overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%)',
                      }}
                    />

                    {/* Top Badges */}
                    <Box sx={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Chip
                        label={journey.categoryLabel}
                        size="small"
                        sx={{
                          backgroundColor: '#123B5D',
                          color: '#FFFFFF',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        }}
                      />
                      {journey.flyerImage && (
                        <Chip
                          label="Official Flyer Available"
                          size="small"
                          sx={{
                            backgroundColor: '#F4A261',
                            color: '#1D2939',
                            fontWeight: 700,
                            fontSize: '0.72rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                          }}
                        />
                      )}
                    </Box>

                    {/* Photo Count Tag */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        backgroundColor: 'rgba(0,0,0,0.65)',
                        backdropFilter: 'blur(6px)',
                        color: '#FFFFFF',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.75,
                      }}
                    >
                      <CollectionsBookmarkIcon sx={{ fontSize: 16, color: '#F4A261' }} />
                      {journey.images.length} Photos
                    </Box>

                    {/* Bottom Metadata */}
                    <Box sx={{ position: 'absolute', bottom: 14, left: 16, right: 16, color: '#FFFFFF' }}>
                      <Typography variant="caption" sx={{ color: '#F4A261', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        {journey.yearOrSeason} • {journey.duration}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25, mb: 0.5 }}>
                        {journey.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <PlaceIcon sx={{ fontSize: 16, color: '#F4A261' }} />
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
                          {journey.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Journey Content */}
                  <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
                      {journey.subtitle}
                    </Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 2.5 }}>
                      {journey.story}
                    </Typography>

                    {/* Quick Stats Pill Grid */}
                    <Grid container spacing={1.5} sx={{ mb: 2.5 }}>
                      <Grid size={{ xs: 6 }}>
                        <Box sx={{ p: 1.25, backgroundColor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
                          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <AccessTimeIcon sx={{ fontSize: 14, color: 'primary.main' }} /> Duration
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                            {journey.duration}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid size={{ xs: 6 }}>
                        <Box sx={{ p: 1.25, backgroundColor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
                          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <GroupsIcon sx={{ fontSize: 14, color: '#0F766E' }} /> Group Size
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                            {journey.groupSize}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    {/* Highlights Tags */}
                    <Box sx={{ mb: 2.5 }}>
                      <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase', display: 'block', mb: 1 }}>
                        Expedition Highlights:
                      </Typography>
                      <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', gap: 0.75 }}>
                        {journey.highlights.slice(0, 4).map((h, i) => (
                          <Chip
                            key={i}
                            label={h}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(18, 59, 93, 0.05)',
                              color: 'primary.main',
                              fontWeight: 600,
                              fontSize: '0.72rem',
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>

                    {/* Creative Host Note */}
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: '#FFFBEB',
                        borderRadius: 2.5,
                        border: '1px solid #FDE68A',
                        display: 'flex',
                        gap: 1.25,
                        mb: 3,
                      }}
                    >
                      <FormatQuoteIcon sx={{ color: '#D97706', fontSize: 24, transform: 'rotate(180deg)', flexShrink: 0 }} />
                      <Typography variant="caption" sx={{ color: '#92400E', fontStyle: 'italic', lineHeight: 1.5, fontWeight: 500 }}>
                        {journey.hostTip}
                      </Typography>
                    </Box>

                    {/* Actions */}
                    <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => handleOpenJourneyAlbum(journey.id)}
                        sx={{ fontWeight: 700, borderRadius: 2.5, py: 1.2 }}
                      >
                        Explore All {journey.images.length} Photos
                      </Button>
                      <Button
                        component="a"
                        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                          `Hi Aditya, I was looking at your ${journey.title} album on the website. I would like details on upcoming departures or custom booking!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        color="success"
                        sx={{
                          borderRadius: 2.5,
                          px: 2,
                          minWidth: 48,
                          borderColor: '#25D366',
                          color: '#166534',
                          '&:hover': {
                            backgroundColor: '#DCFCE7',
                            borderColor: '#1EBE5D',
                          },
                        }}
                      >
                        <WhatsAppIcon />
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* -------------------------------------------- */}
        {/* VIEW 2: ALL PHOTOS STREAM (Gallery Grid View) */}
        {/* -------------------------------------------- */}
        {viewMode === 'gallery' && (
          <Box sx={{ mb: 8 }}>
            {/* Header info if a specific journey is isolated */}
            {selectedJourneyId !== 'all' && (
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mb: 4,
                  borderRadius: 3.5,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(18, 59, 93, 0.12)',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  gap: 2,
                }}
              >
                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: 'secondary.main', textTransform: 'uppercase' }}>
                    Currently Viewing Album
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>
                    {pastJourneys.find((j) => j.id === selectedJourneyId)?.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {pastJourneys.find((j) => j.id === selectedJourneyId)?.subtitle}
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => setSelectedJourneyId('all')}
                  sx={{ fontWeight: 700, borderRadius: 2 }}
                >
                  Show All Expeditions
                </Button>
              </Paper>
            )}

            {/* Photos Grid */}
            <Grid container spacing={3}>
              {filteredImages.map((img, idx) => (
                <Grid key={img.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card
                    onClick={() => setActiveImageIndex(idx)}
                    sx={{
                      borderRadius: 3.5,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: '1px solid rgba(0,0,0,0.06)',
                      boxShadow: '0 4px 16px rgba(18, 59, 93, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      backgroundColor: '#FFFFFF',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: '0 16px 32px rgba(18, 59, 93, 0.14)',
                        '& .gallery-img': {
                          transform: 'scale(1.08)',
                        },
                      },
                    }}
                  >
                    {/* Image Area */}
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
                        alt={img.title}
                        fill
                        className="gallery-img"
                        style={{
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease',
                        }}
                        sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                      />

                      {/* Gradient overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.75) 100%)',
                        }}
                      />

                      {/* Top Vibe Badge */}
                      <Box sx={{ position: 'absolute', top: 12, left: 12 }}>
                        <Chip
                          label={img.vibeTag}
                          size="small"
                          sx={{
                            backgroundColor: img.isFlyer ? '#F4A261' : 'rgba(0,0,0,0.65)',
                            color: img.isFlyer ? '#1D2939' : '#FFFFFF',
                            backdropFilter: 'blur(4px)',
                            fontWeight: 700,
                            fontSize: '0.72rem',
                          }}
                        />
                      </Box>

                      {/* Location Badge */}
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
                          {img.location}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Card Content */}
                    <CardContent sx={{ p: 2.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 800,
                          color: 'text.primary',
                          lineHeight: 1.3,
                          mb: 1,
                        }}
                      >
                        {img.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.82rem',
                          lineHeight: 1.55,
                          mb: 2,
                          flex: 1,
                        }}
                      >
                        {img.caption}
                      </Typography>

                      {/* Creative Host Note */}
                      {img.hostNote && (
                        <Box
                          sx={{
                            p: 1.5,
                            backgroundColor: '#F8FAFC',
                            borderRadius: 2,
                            borderLeft: '3px solid #F4A261',
                            display: 'flex',
                            gap: 1,
                          }}
                        >
                          <FormatQuoteIcon sx={{ color: '#F4A261', fontSize: 18, transform: 'rotate(180deg)', flexShrink: 0 }} />
                          <Typography variant="caption" sx={{ color: '#475569', fontStyle: 'italic', lineHeight: 1.45 }}>
                            {img.hostNote}
                          </Typography>
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>

      {/* --------------------------------------------- */}
      {/* FULLSCREEN INTERACTIVE LIGHTBOX MODAL */}
      {/* --------------------------------------------- */}
      <Dialog
        open={activeImageIndex !== null}
        onClose={() => setActiveImageIndex(null)}
        maxWidth="lg"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              backgroundColor: '#071827',
              borderRadius: 3.5,
              overflow: 'hidden',
              position: 'relative',
              m: { xs: 1, sm: 2 },
              maxHeight: '92vh',
            },
          },
        }}
      >
        {activeImage && (
          <Box sx={{ position: 'relative', color: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
            {/* Top Toolbar */}
            <Box
              sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.6)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                zIndex: 10,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Chip
                  label={activeJourney?.title || 'Expedition'}
                  size="small"
                  sx={{ backgroundColor: '#123B5D', color: '#FFFFFF', fontWeight: 700 }}
                />
                <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                  Photo {activeImageIndex! + 1} of {filteredImages.length}
                </Typography>
              </Box>

              <IconButton
                onClick={() => setActiveImageIndex(null)}
                aria-label="Close photo preview"
                sx={{
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.25)' },
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Central Photo Viewport with Navigation Buttons */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 340, sm: 500, md: 580 },
                backgroundColor: '#020C15',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Prev Button */}
              <IconButton
                onClick={handlePrev}
                aria-label="Previous photo"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: 16,
                  transform: 'translateY(-50%)',
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(4px)',
                  zIndex: 10,
                  p: 1.5,
                  '&:hover': { backgroundColor: 'rgba(0,0,0,0.9)' },
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>

              {/* Next Button */}
              <IconButton
                onClick={handleNext}
                aria-label="Next photo"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: 16,
                  transform: 'translateY(-50%)',
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(4px)',
                  zIndex: 10,
                  p: 1.5,
                  '&:hover': { backgroundColor: 'rgba(0,0,0,0.9)' },
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>

              {/* Photo */}
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 1200px) 100vw, 1100px"
                  priority
                />
              </Box>
            </Box>

            {/* Bottom Caption & Host Story Bar */}
            <Box
              sx={{
                p: { xs: 2.5, sm: 3.5 },
                backgroundColor: 'rgba(7, 24, 39, 0.98)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'stretch', md: 'center' },
                gap: 2.5,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25 }}>
                    {activeImage.title}
                  </Typography>
                  <Chip
                    label={activeImage.vibeTag}
                    size="small"
                    sx={{ backgroundColor: '#F4A261', color: '#1D2939', fontWeight: 800, fontSize: '0.72rem' }}
                  />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#94A3B8', mb: 1.5 }}>
                  <PlaceIcon sx={{ fontSize: 16, color: '#F4A261' }} />
                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                    {activeImage.location}
                  </Typography>
                </Box>

                <Typography variant="body2" sx={{ color: '#CBD5E1', lineHeight: 1.6, mb: 1.5 }}>
                  {activeImage.caption}
                </Typography>

                {activeImage.hostNote && (
                  <Box
                    sx={{
                      p: 1.5,
                      backgroundColor: 'rgba(244, 162, 97, 0.1)',
                      borderRadius: 2,
                      borderLeft: '3px solid #F4A261',
                      display: 'flex',
                      gap: 1,
                    }}
                  >
                    <FormatQuoteIcon sx={{ color: '#F4A261', fontSize: 18, transform: 'rotate(180deg)', flexShrink: 0 }} />
                    <Typography variant="caption" sx={{ color: '#FCD34D', fontStyle: 'italic', lineHeight: 1.5 }}>
                      {activeImage.hostNote}
                    </Typography>
                  </Box>
                )}
              </Box>

              {/* Direct WhatsApp Call to Action for this Specific Journey */}
              <Box sx={{ flexShrink: 0, textAlign: { xs: 'center', md: 'right' } }}>
                <Button
                  component="a"
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Hi Aditya! I am looking at photo "${activeImage.title}" (${activeJourney?.title || 'Trip'}) on your website. I want to plan or join a similar trip. Please share upcoming dates and details!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    backgroundColor: '#25D366',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    px: 3,
                    py: 1.3,
                    borderRadius: 2.5,
                    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
                    '&:hover': {
                      backgroundColor: '#1EBE5D',
                    },
                  }}
                >
                  Plan This Journey
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Dialog>

      {/* Final Call to Action */}
      <CTASection
        title="Be Part of Our Next Travel Chapter"
        subtitle="Join our upcoming group departures to the Himalayas, Sahyadri mountain treks, and sacred pilgrimage circuits led with personal warmth and expert care."
      />
    </Box>
  );
}
