'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Destination } from '@/types/destination';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'pilgrimage':
        return { bg: '#FEF3C7', text: '#92400E' };
      case 'adventure':
        return { bg: '#CCFBF1', text: '#0F766E' };
      case 'hill-station':
        return { bg: '#E0E7FF', text: '#3730A3' };
      case 'honeymoon':
        return { bg: '#FCE7F3', text: '#9D174D' };
      case 'beach':
        return { bg: '#E0F2FE', text: '#0369A1' };
      default:
        return { bg: '#F1F5F9', text: '#334155' };
    }
  };

  const catStyle = getCategoryColor(destination.category);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3.5,
        border: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.08)',
        boxShadow: '0 4px 16px rgba(18, 59, 93, 0.06)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 16px 32px rgba(18, 59, 93, 0.12)',
          borderColor: 'rgba(18, 59, 93, 0.2)',
          '& .dest-card-image': {
            transform: 'scale(1.06)',
          },
        },
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 220,
          overflow: 'hidden',
          backgroundColor: '#E2E8F0',
        }}
      >
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="dest-card-image"
          style={{
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
        />

        {/* Gradient Overlay for legibility */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />

        {/* Category Chip */}
        <Chip
          label={destination.category.replace('-', ' ')}
          size="small"
          sx={{
            position: 'absolute',
            top: 14,
            left: 14,
            backgroundColor: catStyle.bg,
            color: catStyle.text,
            fontWeight: 700,
            fontSize: '0.75rem',
            textTransform: 'capitalize',
            backdropFilter: 'blur(4px)',
          }}
        />

        {/* Suggested Duration Badge */}
        {destination.suggestedDuration && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 12,
              right: 12,
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(6px)',
              color: '#FFFFFF',
              borderRadius: 2,
              px: 1.25,
              py: 0.5,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          >
            <AccessTimeIcon sx={{ fontSize: 14, color: '#F4A261' }} />
            <span>{destination.suggestedDuration}</span>
          </Box>
        )}
      </Box>

      {/* Content */}
      <CardContent
        sx={{
          p: 3,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.75 }}>
            <LocationOnIcon sx={{ fontSize: 18, color: 'primary.main' }} />
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 800,
                fontSize: '1.25rem',
                color: 'text.primary',
              }}
            >
              {destination.name}
            </Typography>
          </Box>

          <Typography
            variant="caption"
            sx={{
              display: 'block',
              color: 'secondary.main',
              fontWeight: 600,
              mb: 1.5,
              fontSize: '0.8rem',
            }}
          >
            {destination.tagline}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.6,
              mb: 2.5,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {destination.description}
          </Typography>

          {/* Highlights */}
          {destination.highlights && destination.highlights.length > 0 && (
            <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
              {destination.highlights.slice(0, 3).map((hl, idx) => (
                <Chip
                  key={idx}
                  label={hl}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: '0.72rem',
                    height: 24,
                    borderColor: 'rgba(0,0,0,0.12)',
                    backgroundColor: '#F8FAFC',
                  }}
                />
              ))}
            </Stack>
          )}
        </Box>

        {/* Footer Action */}
        <Box sx={{ pt: 1, borderTop: '1px solid', borderColor: 'divider' }}>
          <Button
            component={Link}
            href={`/destinations/${destination.slug}`}
            fullWidth
            variant="text"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{
              justifyContent: 'space-between',
              fontWeight: 700,
              fontSize: '0.9rem',
              px: 1,
              '&:hover': {
                backgroundColor: 'rgba(18, 59, 93, 0.04)',
                '& .MuiSvgIcon-root': {
                  transform: 'translateX(4px)',
                },
              },
            }}
          >
            Explore Itineraries
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
