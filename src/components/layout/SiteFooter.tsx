'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Stack,
  Chip,
} from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ShieldCheckIcon from '@mui/icons-material/VerifiedUser';
import { siteConfig } from '@/data/site-config';
import { navigationLinks } from '@/data/navigation';
import { destinations } from '@/data/destinations';

export default function SiteFooter() {
  const currentYear = 2026;

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#071827',
        color: '#E0E7FF',
        pt: { xs: 8, md: 10 },
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #F4A261 0%, #0F766E 50%, #123B5D 100%)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Column 1: Brand & Bio */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component={Link}
              href="/"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                mb: 2.5,
              }}
            >
              <ExploreIcon sx={{ fontSize: 34, color: '#F4A261' }} />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                }}
              >
                {siteConfig.name}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: '#94A3B8',
                lineHeight: 1.7,
                mb: 3,
                maxWidth: 340,
              }}
            >
              {siteConfig.shortDescription}
            </Typography>

            <Stack direction="row" spacing={1.5} sx={{ mb: 3 }}>
              <Chip
                icon={<ShieldCheckIcon sx={{ '&&': { color: '#0F766E' } }} />}
                label="Verified Travel Host"
                size="small"
                sx={{
                  backgroundColor: 'rgba(15, 118, 110, 0.15)',
                  color: '#5EEAD4',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  border: '1px solid rgba(20, 184, 166, 0.3)',
                }}
              />
            </Stack>

            <Stack direction="row" spacing={1}>
              <IconButton
                component="a"
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                sx={{
                  color: '#94A3B8',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  '&:hover': {
                    color: '#E1306C',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                sx={{
                  color: '#94A3B8',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  '&:hover': {
                    color: '#1877F2',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href={siteConfig.social.youtube}
                aria-label="YouTube"
                sx={{
                  color: '#94A3B8',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  '&:hover': {
                    color: '#FF0000',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                sx={{
                  color: '#94A3B8',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  '&:hover': {
                    color: '#25D366',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <WhatsAppIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          {/* Column 2: Navigation Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                mb: 2.5,
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              {navigationLinks.map((link) => (
                <Box
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: '#94A3B8',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s ease, transform 0.2s ease',
                    display: 'inline-block',
                    '&:hover': {
                      color: '#F4A261',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Popular Destinations */}
          <Grid size={{ xs: 6, sm: 4, md: 2.5 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                mb: 2.5,
              }}
            >
              Destinations
            </Typography>
            <Stack spacing={1.5}>
              {destinations.slice(0, 5).map((dest) => (
                <Box
                  key={dest.id}
                  component={Link}
                  href={`/destinations/${dest.slug}`}
                  sx={{
                    color: '#94A3B8',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s ease, transform 0.2s ease',
                    display: 'inline-block',
                    '&:hover': {
                      color: '#F4A261',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  {dest.name}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Contact & Enquiry */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                mb: 2.5,
              }}
            >
              Get In Touch
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <PhoneIcon sx={{ fontSize: 20, color: '#F4A261', mt: 0.25 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                    Call Us
                  </Typography>
                  <Typography
                    component="a"
                    href={`tel:${siteConfig.contact.phone}`}
                    variant="body2"
                    sx={{ color: '#CBD5E1', textDecoration: 'none', '&:hover': { color: '#FFF' } }}
                  >
                    {siteConfig.contact.phone}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <WhatsAppIcon sx={{ fontSize: 20, color: '#25D366', mt: 0.25 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                    WhatsApp
                  </Typography>
                  <Typography
                    component="a"
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                    sx={{ color: '#CBD5E1', textDecoration: 'none', '&:hover': { color: '#FFF' } }}
                  >
                    {siteConfig.contact.whatsapp}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <EmailIcon sx={{ fontSize: 20, color: '#F4A261', mt: 0.25 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                    Email
                  </Typography>
                  <Typography
                    component="a"
                    href={`mailto:${siteConfig.contact.email}`}
                    variant="body2"
                    sx={{ color: '#CBD5E1', textDecoration: 'none', '&:hover': { color: '#FFF' } }}
                  >
                    {siteConfig.contact.email}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnIcon sx={{ fontSize: 20, color: '#F4A261', mt: 0.25 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                    Office
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#CBD5E1' }}>
                    {siteConfig.contact.address}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(255, 255, 255, 0.08)' }} />

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.85rem' }}>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </Typography>

          <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.85rem' }}>
            Handcrafted travel experiences with care & trust across India.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
