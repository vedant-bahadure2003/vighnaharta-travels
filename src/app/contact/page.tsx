'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Button,
  Chip,
  Snackbar,
  Alert,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SendIcon from '@mui/icons-material/Send';
import SectionHeader from '@/components/common/SectionHeader';
import { siteConfig } from '@/data/site-config';

const quickTopics = [
  { label: '🏔️ Kedarnath Pilgrimage', text: 'Hi! I would like to inquire about the Kedarnath Spiritual Journey package.' },
  { label: '❄️ Manali Snow Adventure', text: 'Hi! I am interested in booking the Manali Snow Adventure tour.' },
  { label: '🌴 Kerala Backwaters', text: 'Hi! I would like details about the Kerala Backwaters & Hill Station tour.' },
  { label: '🌊 Rishikesh Rafting & Camping', text: 'Hi! Please share details and pricing for the Rishikesh Adventure tour.' },
  { label: '✨ Custom Family / Private Tour', text: 'Hi Vighnaharta Tours! I would like to plan a customized private trip for my family/group.' },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const cleanWhatsAppNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '');
  const cleanPhoneNumber = siteConfig.contact.phone.replace(/\s+/g, '');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
  };

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <Box sx={{ pt: { xs: 5, md: 7 }, pb: { xs: 8, md: 12 }, backgroundColor: '#FAFBFD' }}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Direct Host Connection"
          title="Get in Touch With Us"
          subtitle="No complicated forms or waiting queues. Connect directly with our expedition host via WhatsApp, phone, or email to plan your dream trip."
        />

        {/* ── 3 Main Contact Cards ── */}
        <Grid container spacing={3.5} sx={{ mb: 6 }}>
          {/* Card 1: WhatsApp (Highlighted) */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                backgroundColor: '#FFFFFF',
                border: '2px solid #25D366',
                boxShadow: '0 12px 32px rgba(37, 211, 102, 0.12)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 18px 40px rgba(37, 211, 102, 0.2)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  py: 0.6,
                  px: 2,
                  borderBottomLeftRadius: 12,
                }}
              >
                Fastest Response
              </Box>

              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 3,
                  backgroundColor: '#DCFCE7',
                  color: '#16A34A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2.5,
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 32, color: '#25D366' }} />
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                WhatsApp Chat
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Chat directly with our trip host. Get instant package details, available dates, and customized itineraries.
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: '#15803D',
                  mb: 3,
                  fontSize: '1.25rem',
                  letterSpacing: '0.01em',
                }}
              >
                {siteConfig.contact.whatsapp}
              </Typography>

              <Button
                component="a"
                href={getWhatsAppLink('Hi Vighnaharta Tours! I would like to plan a trip with you. Could you please share more details?')}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                size="large"
                fullWidth
                startIcon={<WhatsAppIcon />}
                sx={{
                  mt: 'auto',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  py: 1.5,
                  borderRadius: 2.5,
                  boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)',
                  '&:hover': {
                    backgroundColor: '#1EBE5D',
                    boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
                  },
                }}
              >
                Chat on WhatsApp
              </Button>
            </Paper>
          </Grid>

          {/* Card 2: Phone Call */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 24px rgba(18, 59, 93, 0.06)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 36px rgba(18, 59, 93, 0.12)',
                  borderColor: 'primary.main',
                },
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 3,
                  backgroundColor: 'rgba(18, 59, 93, 0.08)',
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2.5,
                }}
              >
                <PhoneIcon sx={{ fontSize: 28 }} />
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                Direct Phone Call
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Speak directly with the host to discuss your group size, budget, dates, and special requirements.
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: 'primary.main',
                  mb: 3,
                  fontSize: '1.25rem',
                  letterSpacing: '0.01em',
                }}
              >
                {siteConfig.contact.phone}
              </Typography>

              <Button
                component="a"
                href={`tel:${cleanPhoneNumber}`}
                variant="contained"
                size="large"
                fullWidth
                startIcon={<PhoneIcon />}
                sx={{
                  mt: 'auto',
                  backgroundColor: 'primary.main',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  py: 1.5,
                  borderRadius: 2.5,
                  boxShadow: '0 6px 20px rgba(18, 59, 93, 0.25)',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                Call Host Now
              </Button>
            </Paper>
          </Grid>

          {/* Card 3: Email */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 24px rgba(244, 162, 97, 0.08)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 36px rgba(244, 162, 97, 0.16)',
                  borderColor: '#F4A261',
                },
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 3,
                  backgroundColor: 'rgba(244, 162, 97, 0.15)',
                  color: '#D97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2.5,
                }}
              >
                <EmailIcon sx={{ fontSize: 28 }} />
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 0.5 }}>
                Email Inquiries
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                Ideal for detailed requests, corporate group retreats, and custom tour proposals.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  wordBreak: 'break-all',
                  mb: 3,
                  fontSize: '0.95rem',
                }}
              >
                {siteConfig.contact.email}
              </Typography>

              <Stack direction="row" spacing={1.5} sx={{ mt: 'auto' }}>
                <Button
                  component="a"
                  href={`mailto:${siteConfig.contact.email}?subject=Travel%20Inquiry%20-%20Vighnaharta%20Tours`}
                  variant="contained"
                  color="warning"
                  fullWidth
                  startIcon={<SendIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    fontWeight: 700,
                    py: 1.5,
                    borderRadius: 2.5,
                  }}
                >
                  Send Email
                </Button>
                <Button
                  onClick={handleCopyEmail}
                  variant="outlined"
                  aria-label="Copy email address"
                  sx={{
                    minWidth: 50,
                    px: 1.5,
                    borderRadius: 2.5,
                    borderColor: '#CBD5E1',
                    color: 'text.secondary',
                    '&:hover': {
                      borderColor: 'primary.main',
                      color: 'primary.main',
                    },
                  }}
                >
                  <ContentCopyIcon sx={{ fontSize: 18 }} />
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        {/* ── Quick WhatsApp Starter Prompts ── */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            mb: 6,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <WhatsAppIcon sx={{ color: '#25D366', fontSize: 24 }} />
            <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary' }}>
              One-Click WhatsApp Starters
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
            Click any topic below to open WhatsApp with a pre-written message. We will respond right away:
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {quickTopics.map((topic) => (
              <Chip
                key={topic.label}
                component="a"
                href={getWhatsAppLink(topic.text)}
                target="_blank"
                rel="noopener noreferrer"
                clickable
                label={topic.label}
                sx={{
                  py: 2.5,
                  px: 1.5,
                  borderRadius: 3,
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    backgroundColor: '#DCFCE7',
                    borderColor: '#25D366',
                    color: '#15803D',
                    transform: 'translateY(-2px)',
                  },
                }}
              />
            ))}
          </Box>
        </Paper>

        {/* ── Additional Info & Operating Hours ── */}
        <Grid container spacing={3.5}>
          {/* Operating Hours */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 3.5 },
                borderRadius: 4,
                backgroundColor: '#EFF6FF',
                border: '1px solid #DBEAFE',
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <AccessTimeIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
                  Availability & Support Hours
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#334155', lineHeight: 1.7, mb: 2 }}>
                <strong>Inquiry & Consultation Hours:</strong><br />
                Monday to Sunday: 9:00 AM – 9:00 PM IST
              </Typography>
              <Typography variant="body2" sx={{ color: '#1E40AF', lineHeight: 1.6, fontStyle: 'italic' }}>
                🌟 Active Travelers Note: While on an active tour, our expedition host is reachable 24/7 on WhatsApp & phone for on-ground emergencies and support.
              </Typography>
            </Paper>
          </Grid>

          {/* Location & Service Area */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 3.5 },
                borderRadius: 4,
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <LocationOnIcon sx={{ color: '#0F766E', fontSize: 24 }} />
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary' }}>
                  Operations & Destinations
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}>
                <strong>Headquarters:</strong> {siteConfig.contact.address}<br />
                <strong>Specializations:</strong> Himalayan Treks & Pilgrimages, Himachal & Uttarakhand Expeditions, Kerala Retreats, Spiritual Yatras, and Tailored Group Tours.
              </Typography>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <CheckCircleIcon sx={{ fontSize: 18, color: '#16A34A' }} />
                <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary' }}>
                  Personalized Attention • Transparent Pricing • Direct Host Coordination
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Copy notification */}
      <Snackbar
        open={copied}
        autoHideDuration={3000}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setCopied(false)}
          severity="success"
          sx={{ width: '100%', borderRadius: 2 }}
        >
          Email copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
}
