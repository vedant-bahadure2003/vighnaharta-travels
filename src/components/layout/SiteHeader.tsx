'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExploreIcon from '@mui/icons-material/Explore';
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
              minHeight: { xs: 64, md: scrollTrigger ? 64 : 72 },
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
                gap: 1,
                textDecoration: 'none',
                mr: { xs: 'auto', md: 4 },
              }}
            >
              <ExploreIcon
                sx={{
                  fontSize: 32,
                  color: '#123B5D',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  color: '#123B5D',
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                {siteConfig.name}
              </Typography>
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

            {/* CTA Button - Desktop */}
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              color="warning"
              sx={{
                display: { xs: 'none', md: 'flex' },
                ml: 2,
                whiteSpace: 'nowrap',
                fontWeight: 700,
                px: 3,
              }}
            >
              Plan Your Trip
            </Button>

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
