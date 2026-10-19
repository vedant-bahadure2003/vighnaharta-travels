'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Button,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SectionHeader from '@/components/common/SectionHeader';
import EnquiryForm from '@/components/enquiry/EnquiryForm';
import { siteConfig } from '@/data/site-config';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialDest = searchParams.get('destination') || '';
  const initialType = searchParams.get('travelType') || 'Group Trip';

  return (
    <EnquiryForm
      initialDestination={initialDest}
      initialTravelType={initialType}
      title="Send a Travel Enquiry"
      subtitle="Tell us where you'd like to travel, your preferred month, and approximate budget. We will send you tailored options."
    />
  );
}

export default function ContactPage() {
  return (
    <Box sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Contact & Enquiries"
          title="Let’s Plan Your Next Journey"
          subtitle="Whether you have questions about an upcoming tour or want a custom private itinerary, we’re here to help you every step of the way."
        />

        <Grid container spacing={{ xs: 6, md: 8 }}>
          {/* Left Column: Direct Contact Info & Host Availability */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 3 }}>
              Reach Us Directly
            </Typography>

            <Stack spacing={2.5} sx={{ mb: 4 }}>
              {/* Phone */}
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: 'rgba(18, 59, 93, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.main',
                  }}
                >
                  <PhoneIcon />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    Direct Call / Support
                  </Typography>
                  <Typography
                    component="a"
                    href={`tel:${siteConfig.contact.phone}`}
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      textDecoration: 'none',
                      display: 'block',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    {siteConfig.contact.phone}
                  </Typography>
                </Box>
              </Paper>

              {/* WhatsApp */}
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  backgroundColor: '#F0FDF4',
                  border: '1px solid #BBF7D0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: '#DCFCE7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#16A34A',
                  }}
                >
                  <WhatsAppIcon />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="caption" sx={{ color: '#166534', fontWeight: 600 }}>
                    Instant WhatsApp Chat
                  </Typography>
                  <Typography
                    component="a"
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: '#15803D',
                      textDecoration: 'none',
                      display: 'block',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    {siteConfig.contact.whatsapp}
                  </Typography>
                </Box>
                <Button
                  component="a"
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: '#25D366',
                    '&:hover': { backgroundColor: '#1EBE5D' },
                    color: '#FFFFFF',
                    fontWeight: 700,
                    textTransform: 'none',
                  }}
                >
                  Chat Now
                </Button>
              </Paper>

              {/* Email */}
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: 'rgba(244, 162, 97, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E08C3B',
                  }}
                >
                  <EmailIcon />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    Email Inquiries
                  </Typography>
                  <Typography
                    component="a"
                    href={`mailto:${siteConfig.contact.email}`}
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      textDecoration: 'none',
                      display: 'block',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {siteConfig.contact.email}
                  </Typography>
                </Box>
              </Paper>

              {/* Address */}
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: 'rgba(15, 118, 110, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0F766E',
                  }}
                >
                  <LocationOnIcon />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    Office Location
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {siteConfig.contact.address}
                  </Typography>
                </Box>
              </Paper>
            </Stack>

            {/* Operating Hours Box */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: '#EFF6FF',
                border: '1px solid #DBEAFE',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                <AccessTimeIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'primary.main' }}>
                  Availability Hours
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#334155', lineHeight: 1.6 }}>
                Monday to Sunday: 9:00 AM – 9:00 PM IST<br />
                <em>During on-tour dates, our trip host provides 24/7 on-ground assistance to active travelers.</em>
              </Typography>
            </Paper>
          </Grid>

          {/* Right Column: Interactive Enquiry Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Suspense fallback={<div>Loading form...</div>}>
              <ContactFormContent />
            </Suspense>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
