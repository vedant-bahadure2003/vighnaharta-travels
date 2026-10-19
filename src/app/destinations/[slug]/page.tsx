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
  Divider,
  Breadcrumbs,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SectionHeader from '@/components/common/SectionHeader';
import PackageCard from '@/components/packages/PackageCard';
import EnquiryForm from '@/components/enquiry/EnquiryForm';
import { destinations, getDestinationBySlug } from '@/data/destinations';
import { getPackagesByDestination } from '@/data/packages';
import { siteConfig } from '@/data/site-config';

interface DestinationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return destinations.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);

  if (!dest) {
    return {
      title: 'Destination Not Found',
    };
  }

  return {
    title: `${dest.name} Tour & Travel Guide`,
    description: dest.description,
  };
}

export default async function DestinationDetailPage({
  params,
}: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const relatedPackages = getPackagesByDestination(slug);

  return (
    <Box sx={{ pb: { xs: 8, md: 12 } }}>
      {/* Hero Visual Banner */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 340, sm: 420, md: 480 },
          backgroundColor: '#071827',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'flex-end',
          pb: 6,
          overflow: 'hidden',
        }}
      >
        <Image
          src={destination.image}
          alt={destination.name}
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
              'linear-gradient(180deg, rgba(7, 24, 39, 0.4) 0%, rgba(7, 24, 39, 0.85) 100%)',
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
              href="/destinations"
              style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '0.85rem' }}
            >
              Destinations
            </Link>
            <Typography sx={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 600 }}>
              {destination.name}
            </Typography>
          </Breadcrumbs>

          <Stack direction="row" spacing={1.5} sx={{ mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
            <Chip
              label={destination.category.replace('-', ' ')}
              sx={{
                backgroundColor: '#F4A261',
                color: '#1D2939',
                fontWeight: 700,
                textTransform: 'capitalize',
              }}
            />
            {destination.suggestedDuration && (
              <Chip
                icon={<AccessTimeIcon sx={{ '&&': { color: '#FFFFFF', fontSize: 16 } }} />}
                label={destination.suggestedDuration}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(6px)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                }}
              />
            )}
          </Stack>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
              lineHeight: 1.15,
              mb: 1,
            }}
          >
            {destination.name}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: '#CBD5E1',
              fontWeight: 400,
              maxWidth: 680,
              fontSize: { xs: '1rem', md: '1.15rem' },
            }}
          >
            {destination.tagline}
          </Typography>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Grid container spacing={{ xs: 6, md: 8 }}>
          {/* Left Column: Details, Highlights, Activities, Available Packages */}
          <Grid size={{ xs: 12, md: 7 }}>
            {/* Quick Specs Bar */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 5,
                borderRadius: 3.5,
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 4,
                alignItems: 'center',
              }}
            >
              {destination.bestTimeToVisit && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <CalendarMonthIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontWeight: 600 }}>
                      Best Season
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      {destination.bestTimeToVisit}
                    </Typography>
                  </Box>
                </Box>
              )}

              {destination.suggestedDuration && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <AccessTimeIcon sx={{ color: 'secondary.main', fontSize: 24 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontWeight: 600 }}>
                      Suggested Stay
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      {destination.suggestedDuration}
                    </Typography>
                  </Box>
                </Box>
              )}
            </Paper>

            {/* Overview */}
            <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', mb: 2 }}>
              About {destination.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                fontSize: '1.05rem',
                mb: 4,
              }}
            >
              {destination.longDescription || destination.description}
            </Typography>

            {/* Key Highlights */}
            {destination.highlights && (
              <Box sx={{ mb: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 2.5 }}>
                  Trip Highlights
                </Typography>
                <Grid container spacing={2}>
                  {destination.highlights.map((hl, idx) => (
                    <Grid key={idx} size={{ xs: 12, sm: 6 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          p: 1.75,
                          borderRadius: 2.5,
                          backgroundColor: '#F1F5F9',
                        }}
                      >
                        <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B' }}>
                          {hl}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* Suggested Activities */}
            {destination.suggestedActivities && (
              <Box sx={{ mb: 6 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 2.5 }}>
                  Must-Do Activities
                </Typography>
                <Stack spacing={1.5}>
                  {destination.suggestedActivities.map((act, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        py: 1,
                        borderBottom: '1px dashed #E2E8F0',
                      }}
                    >
                      <ExploreIcon sx={{ color: 'secondary.main', fontSize: 18 }} />
                      <Typography variant="body2" sx={{ color: '#334155', fontWeight: 500 }}>
                        {act}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}

            {/* Related Packages */}
            {relatedPackages.length > 0 && (
              <Box sx={{ mb: 6 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'text.primary', mb: 3 }}>
                  Available Tour Packages for {destination.name}
                </Typography>
                <Grid container spacing={3}>
                  {relatedPackages.map((pkg) => (
                    <Grid key={pkg.id} size={{ xs: 12, sm: 6 }}>
                      <PackageCard pkg={pkg} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            <Box sx={{ pt: 2 }}>
              <Link href="/destinations" style={{ textDecoration: 'none' }}>
                <Button
                  startIcon={<ArrowBackIcon />}
                  sx={{ color: 'text.secondary', fontWeight: 600 }}
                >
                  Back to All Destinations
                </Button>
              </Link>
            </Box>
          </Grid>

          {/* Right Column: Sticky Enquiry Form & WhatsApp Help */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: { md: 'sticky' }, top: 90 }}>
              <EnquiryForm
                initialDestination={destination.name}
                title={`Enquire About ${destination.name}`}
                subtitle={`Let us know your preferred dates and group size. We'll craft a customized ${destination.name} itinerary for you.`}
              />

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mt: 3,
                  borderRadius: 3.5,
                  backgroundColor: '#F0FDF4',
                  border: '1px solid #BBF7D0',
                  textAlign: 'center',
                }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#166534', mb: 1 }}>
                  Need quick advice on visiting {destination.name}?
                </Typography>
                <Typography variant="body2" sx={{ color: '#15803D', mb: 2, fontSize: '0.85rem' }}>
                  Speak directly with our travel host who has personally traveled to {destination.name}.
                </Typography>
                <Button
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi, I'm interested in visiting ${destination.name} and have a few questions!`)}`}
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
                  Ask Host on WhatsApp
                </Button>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
