'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Stack,
  Chip,
  Card,
} from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SectionHeader from '@/components/common/SectionHeader';
import CTASection from '@/components/common/CTASection';
import { siteConfig } from '@/data/site-config';

const values = [
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    title: 'Hands-on Host Guidance',
    desc: 'We are active travel hosts who accompany, coordinate, and experience the journeys right beside our travelers.',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 32, color: '#E11D48' }} />,
    title: 'Respect for Sacred Places',
    desc: 'From ancient Himalayan shrines to tranquil temples, we honor local customs, traditions, and quiet spiritual reflection.',
  },
  {
    icon: <NaturePeopleIcon sx={{ fontSize: 32, color: '#0F766E' }} />,
    title: 'Balanced Pacing',
    desc: 'We reject rushed checklists. We give you time to breathe fresh mountain air, watch the sunset, and savor local dishes.',
  },
  {
    icon: <Diversity3Icon sx={{ fontSize: 32, color: '#F4A261' }} />,
    title: 'Lifelong Friendships',
    desc: 'Our group tours bring like-minded travelers together. Many of our travelers stay connected for years after the journey ends.',
  },
];

export default function AboutPage() {
  return (
    <Box sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <SectionHeader
          eyebrow="Our Story & Vision"
          title="Traveling With Heart, Purpose, and Personal Care"
          subtitle="At Vighnaharta Tours and Adventures, we believe travel isn't just about moving across coordinates — it's about the connections we forge and the peace we discover."
        />

        {/* Founder Story Feature */}
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: 'center', mb: { xs: 8, md: 12 } }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative' }}>
              <Paper
                elevation={4}
                sx={{
                  position: 'relative',
                  height: { xs: 380, sm: 460 },
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.08)',
                }}
              >
                <Image
                  src={siteConfig.owner.images.portrait}
                  alt="Founder and Travel Host at Kedarnath"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 960px) 100vw, 550px"
                  priority
                />
              </Paper>

              <Box
                sx={{
                  position: 'absolute',
                  bottom: -24,
                  left: 24,
                  right: 24,
                  p: 2.5,
                  borderRadius: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 12px 30px rgba(18, 59, 93, 0.15)',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'primary.main' }}>
                  {siteConfig.owner.name}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  {siteConfig.owner.role} &mdash; Leading every trip with passion
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ pt: { xs: 4, md: 0 } }}>
              <Chip
                label="Why We Started"
                size="small"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontSize: '0.75rem',
                  backgroundColor: 'rgba(15, 118, 110, 0.1)',
                  color: '#0F766E',
                }}
              />

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: 'text.primary',
                  fontSize: { xs: '1.75rem', sm: '2.25rem' },
                  lineHeight: 1.25,
                  mb: 2.5,
                }}
              >
                From Personal Passion to Meaningful Journeys
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2.5, fontSize: '1rem' }}
              >
                Vighnaharta Tours and Adventures was born from a simple belief: the most profound travel experiences happen when you travel with trusted hosts who genuinely care about your comfort and happiness.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3, fontSize: '1rem' }}
              >
                Named after <em>Vighnaharta</em> — the remover of obstacles — our mission is to eliminate all travel friction, confusion, and stress. From temple permits and high-altitude transport to cozy rooms and authentic meals, we manage every detail so you can be fully present in the moment.
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: '#F8FAFC',
                  borderLeft: '4px solid',
                  borderColor: 'primary.main',
                  mb: 4,
                }}
              >
                <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#334155', lineHeight: 1.7 }}>
                  &ldquo;{siteConfig.owner.philosophy}&rdquo;
                </Typography>
              </Paper>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  color="warning"
                  sx={{ fontWeight: 700, px: 3, py: 1.25 }}
                >
                  Plan A Trip With Us
                </Button>
                <Button
                  component="a"
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<WhatsAppIcon />}
                  sx={{ fontWeight: 600, px: 3, py: 1.25 }}
                >
                  Chat with the Host
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Photo Gallery Grid of Travel Host in Action */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <SectionHeader
            eyebrow="On The Road"
            title="Moments From Across India"
            subtitle="From the Himalayan peaks of Uttarakhand to the calm lagoons of the south."
          />

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ borderRadius: 3.5, overflow: 'hidden', height: 300, position: 'relative' }}>
                <Image
                  src={siteConfig.owner.images.backwaters}
                  alt="Kerala Backwaters journey"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 100vw, 33vw"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    p: 2.5,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                    Tranquil Kerala Houseboat Retreats
                  </Typography>
                </Box>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ borderRadius: 3.5, overflow: 'hidden', height: 300, position: 'relative' }}>
                <Image
                  src={siteConfig.owner.images.couple}
                  alt="Temple pilgrimage moment"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 100vw, 33vw"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    p: 2.5,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                    Sacred Pilgrimages & Peaceful Temple Visits
                  </Typography>
                </Box>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ borderRadius: 3.5, overflow: 'hidden', height: 300, position: 'relative' }}>
                <Image
                  src={siteConfig.owner.images.waterfall}
                  alt="Nature and waterfall exploration"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 100vw, 33vw"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    p: 2.5,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                    Wild Waterfalls & Pristine Nature Trails
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Our Pillars / Values */}
        <Box sx={{ mb: 8 }}>
          <SectionHeader
            eyebrow="Our Principles"
            title="The Values That Guide Every Expedition"
            subtitle="How we maintain safety, warmth, and quality on every journey."
          />

          <Grid container spacing={3.5}>
            {values.map((v, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3.5,
                    height: '100%',
                    borderRadius: 3.5,
                    border: '1px solid #E2E8F0',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 4px 12px rgba(18, 59, 93, 0.04)',
                  }}
                >
                  <Box sx={{ mb: 2 }}>{v.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, fontSize: '1.1rem' }}>
                    {v.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {v.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <CTASection />
    </Box>
  );
}
