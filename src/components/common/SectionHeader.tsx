'use client';

import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  maxWidth?: number | string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  maxWidth = 720,
}: SectionHeaderProps) {
  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth,
        mx: align === 'center' ? 'auto' : undefined,
        mb: { xs: 4, md: 6 },
      }}
    >
      {eyebrow && (
        <Chip
          label={eyebrow}
          size="small"
          sx={{
            mb: 1.5,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.75rem',
            backgroundColor: 'rgba(18, 59, 93, 0.08)',
            color: 'primary.main',
            borderRadius: 1.5,
          }}
        />
      )}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          color: 'text.primary',
          fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
          mb: subtitle ? 1.5 : 0,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.95rem', md: '1.05rem' },
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
