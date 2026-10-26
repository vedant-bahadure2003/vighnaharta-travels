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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { TourPackage } from '@/types/package';
import { siteConfig } from '@/data/site-config';

interface PackageCardProps {
  pkg: TourPackage;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const getTravelTypeLabel = (type: string) => {
    switch (type) {
      case 'group':
        return 'Group Tour';
      case 'couple':
        return 'Couple / Honeymoon';
      case 'family':
        return 'Family Tour';
      case 'solo':
        return 'Solo Explorer';
      default:
        return 'Custom Tour';
    }
  };

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
          boxShadow: '0 16px 36px rgba(18, 59, 93, 0.12)',
          borderColor: 'rgba(18, 59, 93, 0.2)',
          '& .pkg-card-img': {
            transform: 'scale(1.06)',
          },
        },
      }}
    >
      {/* Image Banner */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 230,
          overflow: 'hidden',
          backgroundColor: '#E2E8F0',
        }}
      >
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="pkg-card-img"
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
              'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)',
          }}
        />

        {/* Travel Type Badge */}
        <Chip
          icon={<GroupsIcon sx={{ '&&': { color: '#0F766E', fontSize: 16 } }} />}
          label={getTravelTypeLabel(pkg.travelType)}
          size="small"
          sx={{
            position: 'absolute',
            top: 14,
            left: 14,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(4px)',
            color: '#0F766E',
            fontWeight: 700,
            fontSize: '0.75rem',
          }}
        />

        {/* Duration Badge */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 14,
            left: 14,
            backgroundColor: 'rgba(18, 59, 93, 0.85)',
            backdropFilter: 'blur(6px)',
            color: '#FFFFFF',
            borderRadius: 2,
            px: 1.5,
            py: 0.6,
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
            fontSize: '0.8rem',
            fontWeight: 700,
          }}
        >
          <CalendarMonthIcon sx={{ fontSize: 16, color: '#F4A261' }} />
          <span>{pkg.days} Days / {pkg.nights} Nights</span>
        </Box>
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
          <Typography
            variant="overline"
            sx={{
              fontWeight: 700,
              color: 'secondary.main',
              letterSpacing: '0.06em',
            }}
          >
            {pkg.destination}
          </Typography>

          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 800,
              fontSize: '1.25rem',
              color: 'text.primary',
              lineHeight: 1.3,
              mb: 1.5,
            }}
          >
            {pkg.title}
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
            {pkg.description}
          </Typography>

          {/* Highlights checklist */}
          {pkg.highlights && (
            <Stack spacing={0.75} sx={{ mb: 3 }}>
              {pkg.highlights.slice(0, 3).map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: '0.825rem',
                    color: 'text.primary',
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 16, color: 'secondary.main', flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ fontSize: '0.825rem', color: '#334155' }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>
          )}
        </Box>

        {/* Card Actions */}
        <Box sx={{ pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
          <Stack direction="row" spacing={1.5}>
            <Button
              component={Link}
              href={`/packages/${pkg.slug}`}
              variant="outlined"
              color="primary"
              fullWidth
              size="small"
              sx={{ fontWeight: 600, borderRadius: 2 }}
            >
              View Tour
            </Button>
            <Button
              component="a"
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                `Hi Vighnaharta Tours! I would like to book or inquire about the "${pkg.title}" package.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              fullWidth
              size="small"
              startIcon={<WhatsAppIcon sx={{ fontSize: 16 }} />}
              sx={{
                fontWeight: 700,
                borderRadius: 2,
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: '#1EBE5D',
                },
              }}
            >
              WhatsApp
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
