'use client';

import React, { useState } from 'react';
import { Box, Tooltip, Typography, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { siteConfig } from '@/data/site-config';

export default function FloatingWhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const cleanWhatsAppNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
  const cleanPhoneNumber = siteConfig.contact.phone.replace(/\s+/g, '');
  const defaultMessage = encodeURIComponent(
    'Hi Vighnaharta Tours! I am interested in planning a trip with you. Could you please share more details?'
  );

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 20, sm: 28 },
        right: { xs: 16, sm: 28 },
        zIndex: 1200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 1.5,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Secondary quick call pill (visible on hover) */}
      <Zoom in={isHovered} unmountOnExit>
        <Box
          component="a"
          href={`tel:${cleanPhoneNumber}`}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            backgroundColor: '#1E293B',
            color: '#FFFFFF',
            px: 2,
            py: 1,
            borderRadius: 5,
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 700,
            border: '1px solid rgba(255,255,255,0.15)',
            transition: 'all 0.25s ease',
            '&:hover': {
              backgroundColor: '#0F172A',
              transform: 'translateX(-4px)',
            },
          }}
        >
          <PhoneIcon sx={{ fontSize: 18, color: '#38BDF8' }} />
          <span>Call: {siteConfig.contact.phone}</span>
        </Box>
      </Zoom>

      {/* Main WhatsApp Floating Action Button */}
      <Tooltip
        title="Chat instantly on WhatsApp"
        placement="left"
        arrow
        disableHoverListener={isHovered}
      >
        <Box
          component="a"
          href={`https://wa.me/${cleanWhatsAppNumber}?text=${defaultMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.25,
            backgroundColor: '#25D366',
            color: '#FFFFFF',
            px: { xs: 2, sm: 2.25 },
            py: { xs: 1.2, sm: 1.4 },
            borderRadius: 50,
            boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)',
            textDecoration: 'none',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            cursor: 'pointer',
            animation: 'waPulse 3s infinite',
            '@keyframes waPulse': {
              '0%, 100%': {
                boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
              },
              '50%': {
                boxShadow: '0 8px 35px rgba(37, 211, 102, 0.75)',
                transform: 'scale(1.03)',
              },
            },
            '&:hover': {
              backgroundColor: '#20BA56',
              transform: 'scale(1.06) translateY(-2px)',
              boxShadow: '0 12px 35px rgba(37, 211, 102, 0.65)',
            },
          }}
        >
          {/* Online green indicator dot */}
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <WhatsAppIcon sx={{ fontSize: { xs: 26, sm: 28 }, color: '#FFFFFF' }} />
            <Box
              sx={{
                position: 'absolute',
                top: -2,
                right: -2,
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '2px solid #25D366',
              }}
            />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'left' }}>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                fontSize: '0.68rem',
                lineHeight: 1,
                opacity: 0.9,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Instant Replies
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: '0.9rem',
                fontWeight: 800,
                lineHeight: 1.2,
                color: '#FFFFFF',
              }}
            >
              Chat on WhatsApp
            </Typography>
          </Box>
        </Box>
      </Tooltip>
    </Box>
  );
}
