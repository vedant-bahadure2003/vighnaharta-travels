'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Stack,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { navigationLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';
import MobileNavigation from './MobileNavigation';

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={scrollTrigger ? 2 : 0}
        sx={{
          backgroundColor: '#FFFFFF !important',
          color: '#1D2939 !important',
          borderBottom: '1px solid',
          borderColor: 'divider',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, md: scrollTrigger ? 64 : 74 },
              transition: 'min-height 0.3s ease',
            }}
          >
            {/* Logo */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                mr: { xs: 'auto', md: 4 },
                py: 0.5,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 44, md: 50 },
                  height: { xs: 44, md: 50 },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                  boxShadow: '0 2px 10px rgba(18, 59, 93, 0.18)',
                  border: '2px solid #E2E8F0',
                }}
              >
                <Image
                  src={siteConfig.logoPath}
                  alt={siteConfig.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  sizes="50px"
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
                    color: '#123B5D',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {siteConfig.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: '#D97706',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    display: { xs: 'none', sm: 'block' },
                  }}
                >
                  {siteConfig.tagline}
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            <Box
              component="nav"
              aria-label="Main navigation"
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 0.5,
                flex: 1,
              }}
            >
              {navigationLinks.map((link) => (
                <Button
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: isActive(link.href) ? '#123B5D !important' : '#334155 !important',
                    fontWeight: isActive(link.href) ? 800 : 600,
                    fontSize: '0.92rem',
                    textTransform: 'none',
                    px: 1.75,
                    py: 0.75,
                    borderRadius: 2,
                    position: 'relative',
                    '&::after': isActive(link.href)
                      ? {
                          content: '""',
                          position: 'absolute',
                          bottom: 4,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 22,
                          height: 3,
                          borderRadius: 2,
                          backgroundColor: '#123B5D',
                        }
                      : {},
                    '&:hover': {
                      color: '#123B5D !important',
                      backgroundColor: 'rgba(18, 59, 93, 0.08) !important',
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* CTA Buttons - Desktop */}
            <Stack direction="row" spacing={1.5} sx={{ display: { xs: 'none', md: 'flex' }, ml: 2, alignItems: 'center' }}>
              <Button
                component="a"
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="small"
                startIcon={<WhatsAppIcon sx={{ '&&': { color: '#25D366' } }} />}
                sx={{
                  borderColor: 'rgba(37, 211, 102, 0.4)',
                  backgroundColor: 'rgba(37, 211, 102, 0.05)',
                  color: '#15803D',
                  fontWeight: 700,
                  textTransform: 'none',
                  borderRadius: 2.5,
                  py: 0.8,
                  px: 1.75,
                  '&:hover': {
                    backgroundColor: '#DCFCE7',
                    borderColor: '#25D366',
                  },
                }}
              >
                WhatsApp
              </Button>

              <Button
                component={Link}
                href="/contact"
                variant="contained"
                color="warning"
                sx={{
                  whiteSpace: 'nowrap',
                  fontWeight: 700,
                  px: 2.75,
                  py: 0.8,
                  borderRadius: 2.5,
                  boxShadow: '0 4px 14px rgba(244, 162, 97, 0.35)',
                }}
              >
                Plan Your Trip
              </Button>
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { md: 'none' },
                color: 'primary.main',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <MobileNavigation
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        currentPath={pathname}
      />
    </>
  );
}
