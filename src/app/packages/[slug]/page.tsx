import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Button,
  Stack,
  Paper,
  Breadcrumbs,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import GroupsIcon from '@mui/icons-material/Groups';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EnquiryForm from '@/components/enquiry/EnquiryForm';
import { packages, getPackageBySlug } from '@/data/packages';
import { siteConfig } from '@/data/site-config';

interface PackagePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return packages.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return {
      title: 'Package Not Found',
    };
  }

  return {
    title: `${pkg.title} (${pkg.days}D/${pkg.nights}N)`,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({ params }: PackagePageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

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
    <Box sx={{ pb: { xs: 8, md: 12 } }}>
      {/* Hero Banner */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 340, sm: 420, md: 460 },
          backgroundColor: '#071827',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'flex-end',
          pb: 6,
          overflow: 'hidden',
        }}
      >
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          priority
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(7, 24, 39, 0.4) 0%, rgba(7, 24, 39, 0.88) 100%)',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              mb: 2,
              '& .MuiBreadcrumbs-separator': { color: 'rgba(255, 255, 255, 0.6)' },
            }}
          >
            <Link
              href="/"
              style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.85rem' }}
            >
              Home
            </Link>
            <Link
              href="/packages"
              style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.85rem' }}
            >
              Packages
            </Link>
            <Typography sx={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 600 }}>
              {pkg.title}
            </Typography>
          </Breadcrumbs>

          <Stack direction="row" spacing={1.5} sx={{ mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
            <Chip
              icon={<LocationOnIcon sx={{ '&&': { color: '#1D2939', fontSize: 16 } }} />}
              label={pkg.destination}
              sx={{
                backgroundColor: '#F4A261',
                color: '#1D2939',
                fontWeight: 700,
              }}
            />
            <Chip
              icon={<GroupsIcon sx={{ '&&': { color: '#0F766E', fontSize: 16 } }} />}
              label={getTravelTypeLabel(pkg.travelType)}
              sx={{
                backgroundColor: '#CCFBF1',
                color: '#0F766E',
                fontWeight: 700,
              }}
            />
            <Chip
              icon={<CalendarMonthIcon sx={{ '&&': { color: '#FFFFFF', fontSize: 16 } }} />}
              label={`${pkg.days} Days / ${pkg.nights} Nights`}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(6px)',
                color: '#FFFFFF',
                fontWeight: 600,
              }}
            />
          </Stack>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2.25rem', sm: '2.85rem', md: '3.4rem' },
              lineHeight: 1.15,
              mb: 1,
            }}
          >
            {pkg.title}
          </Typography>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Grid container spacing={{ xs: 6, md: 8 }}>
          {/* Left Column: Itinerary Details, Inclusions, Highlights */}
          <Grid size={{ xs: 12, md: 7 }}>
            {/* Overview */}
            <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', mb: 2 }}>
              Trip Overview
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                fontSize: '1.05rem',
                mb: 5,
              }}
            >
              {pkg.longDescription || pkg.description}
            </Typography>

            {/* Highlights */}
            {pkg.highlights && pkg.highlights.length > 0 && (
              <Box sx={{ mb: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 2.5 }}>
                  Key Experiences & Highlights
                </Typography>
                <Grid container spacing={2}>
                  {pkg.highlights.map((item, idx) => (
                    <Grid key={idx} size={{ xs: 12, sm: 6 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          p: 1.75,
                          borderRadius: 2.5,
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                        }}
                      >
                        <CheckCircleIcon sx={{ color: '#0F766E', fontSize: 20 }} />
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B' }}>
                          {item}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Inclusions & Exclusions */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 3 }}>
                What&apos;s Included & Excluded
              </Typography>
              <Grid container spacing={3}>
                {/* Inclusions */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: '#F0FDF4',
                      border: '1px solid #BBF7D0',
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, color: '#166534', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                      <CheckCircleIcon sx={{ fontSize: 20 }} /> Inclusions
                    </Typography>
                    <Stack spacing={1.5}>
                      {(pkg.inclusions || [
                        'Accommodation as per itinerary',
                        'Daily breakfast and dinner',
                        'Dedicated tour coordinator / host',
                        'Private / Shared sanitized transport',
                        'All inner line permits & toll fees',
                      ]).map((inc, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CheckCircleIcon sx={{ color: '#15803D', fontSize: 16, mt: 0.3 }} />
                          <Typography variant="body2" sx={{ color: '#166534', fontWeight: 500 }}>
                            {inc}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Paper>
                </Grid>

                {/* Exclusions */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: '#FEF2F2',
                      border: '1px solid #FECACA',
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, color: '#991B1B', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}
                    >
                      <CancelIcon sx={{ fontSize: 20 }} /> Exclusions
                    </Typography>
                    <Stack spacing={1.5}>
                      {(pkg.exclusions || [
                        'Personal expenses & shopping',
                        'Travel insurance coverage',
                        'Pony / Helicopter charges if applicable',
                        'Any items not mentioned in inclusions',
                      ]).map((exc, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CancelIcon sx={{ color: '#B91C1C', fontSize: 16, mt: 0.3 }} />
                          <Typography variant="body2" sx={{ color: '#991B1B', fontWeight: 500 }}>
                            {exc}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ pt: 2 }}>
              <Link href="/packages" style={{ textDecoration: 'none' }}>
                <Button
                  startIcon={<ArrowBackIcon />}
                  sx={{ color: 'text.secondary', fontWeight: 600 }}
                >
                  Back to All Packages
                </Button>
              </Link>
            </Box>
          </Grid>

          {/* Right Column: Sticky Booking / Enquiry Form */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: { md: 'sticky' }, top: 90 }}>
              <EnquiryForm
                initialDestination={pkg.destination}
                initialTravelType={getTravelTypeLabel(pkg.travelType)}
                title={`Enquire for ${pkg.title}`}
                subtitle={`Reserve your group slot or request custom dates for ${pkg.title}.`}
              />

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mt: 3,
                  borderRadius: 3.5,
                  backgroundColor: '#EFF6FF',
                  border: '1px solid #DBEAFE',
                  textAlign: 'center',
                }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1E40AF', mb: 1 }}>
                  Have questions about this package?
                </Typography>
                <Typography variant="body2" sx={{ color: '#1E3A8A', mb: 2, fontSize: '0.85rem' }}>
                  Ask about dates, group availability, and customization directly.
                </Typography>
                <Button
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi, I'm enquiring about "${pkg.title}" (${pkg.days}D/${pkg.nights}N)!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  fullWidth
                  startIcon={<WhatsAppIcon />}
                  sx={{
                    backgroundColor: '#25D366',
                    '&:hover': { backgroundColor: '#1EBE5D' },
                    color: '#FFFFFF',
                    fontWeight: 700,
                  }}
                >
                  Quick Inquiry on WhatsApp
                </Button>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
