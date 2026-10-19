'use client';

import React from 'react';
import Link from 'next/link';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Button,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExploreIcon from '@mui/icons-material/Explore';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { navigationLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
  currentPath: string;
}

export default function MobileNavigation({
  open,
  onClose,
  currentPath,
}: MobileNavigationProps) {
  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: '85%',
            maxWidth: 360,
            boxSizing: 'border-box',
            backgroundColor: '#FFFFFF',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        },
      }}
    >
      <Box>
        {/* Top Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Box
            component={Link}
            href="/"
            onClick={onClose}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
            }}
          >
            <ExploreIcon sx={{ fontSize: 28, color: 'primary.main' }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: '1.1rem',
                color: 'primary.main',
                letterSpacing: '-0.02em',
              }}
            >
              {siteConfig.name}
            </Typography>
          </Box>
          <IconButton
            onClick={onClose}
            aria-label="Close menu"
            sx={{
              color: 'text.secondary',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Links */}
        <List disablePadding>
          {navigationLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <ListItem key={item.href} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={onClose}
                  sx={{
                    borderRadius: 2,
                    py: 1.25,
                    px: 2,
                    backgroundColor: active ? 'rgba(18, 59, 93, 0.08)' : 'transparent',
                    color: active ? 'primary.main' : 'text.primary',
                    fontWeight: active ? 700 : 500,
                    '&:hover': {
                      backgroundColor: 'rgba(18, 59, 93, 0.05)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: active ? 700 : 500,
                      color: active ? 'primary.main' : 'text.primary',
                    }}
                  >
                    {item.label}
                  </Typography>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Bottom Section */}
      <Box sx={{ pt: 3 }}>
        <Divider sx={{ mb: 3 }} />
        <Button
          component={Link}
          href="/contact"
          variant="contained"
          color="warning"
          fullWidth
          size="large"
          onClick={onClose}
          sx={{
            py: 1.5,
            fontWeight: 700,
            mb: 2,
            boxShadow: '0 4px 14px rgba(244, 162, 97, 0.35)',
          }}
        >
          Plan Your Trip
        </Button>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
          <Box
            component="a"
            href={`tel:${siteConfig.contact.phone}`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              color: 'text.secondary',
              fontSize: '0.875rem',
              '&:hover': { color: 'primary.main' },
            }}
          >
            <PhoneIcon sx={{ fontSize: 18, color: 'primary.main' }} />
            <span>{siteConfig.contact.phone}</span>
          </Box>
          <Box
            component="a"
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              color: 'text.secondary',
              fontSize: '0.875rem',
              '&:hover': { color: '#25D366' },
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 18, color: '#25D366' }} />
            <span>WhatsApp Enquiry</span>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
