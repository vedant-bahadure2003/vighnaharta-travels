'use client';

import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Stack,
  Chip,
  Paper,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RefreshIcon from '@mui/icons-material/Refresh';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { siteConfig } from '@/data/site-config';
import { destinations } from '@/data/destinations';

interface EnquiryFormProps {
  initialDestination?: string;
  initialTravelType?: string;
  title?: string;
  subtitle?: string;
}

export default function EnquiryForm({
  initialDestination = '',
  initialTravelType = 'Group Trip',
  title = 'Plan Your Custom Experience',
  subtitle = 'Fill out your travel preferences and our travel host will get back to you with a curated itinerary within 24 hours.',
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    destination: initialDestination,
    travelType: initialTravelType,
    travelDate: '',
    duration: '4–5 Days',
    travellers: 2,
    budget: '₹25,000 – ₹50,000',
    preferredContactMethod: 'WhatsApp',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enquiryRefId, setEnquiryRefId] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.destination) {
      errs.destination = 'Please choose a destination or "Other"';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generatedId = 'VT-' + Math.floor(100000 + Math.random() * 900000);
      setEnquiryRefId(generatedId);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      destination: '',
      travelType: 'Group Trip',
      travelDate: '',
      duration: '4–5 Days',
      travellers: 2,
      budget: '₹25,000 – ₹50,000',
      preferredContactMethod: 'WhatsApp',
      notes: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const getWhatsAppMessage = () => {
    const text = `Hi ${siteConfig.name}, I submitted an enquiry (Ref: ${enquiryRefId})!\nName: ${formData.fullName}\nDestination: ${formData.destination}\nTravel Type: ${formData.travelType}\nTravellers: ${formData.travellers}\nDates: ${formData.travelDate || 'Flexible'}\nBudget: ${formData.budget}`;
    return encodeURIComponent(text);
  };

  if (isSubmitted) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'success.light',
          backgroundColor: '#F0FDF4',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: 68,
            height: 68,
            borderRadius: '50%',
            backgroundColor: 'success.main',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 2.5,
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 40 }} />
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 800, color: '#065F46', mb: 1 }}>
          Enquiry Received Successfully!
        </Typography>

        <Typography variant="body1" sx={{ color: '#047857', mb: 3, maxWidth: 500, mx: 'auto' }}>
          Thank you, <strong>{formData.fullName}</strong>. We have saved your enquiry details for{' '}
          <strong>{formData.destination}</strong>.
        </Typography>

        <Chip
          label={`Reference Code: ${enquiryRefId}`}
          color="success"
          variant="filled"
          sx={{ fontWeight: 700, fontSize: '0.9rem', py: 2, px: 1, mb: 4 }}
        />

        <Box sx={{ maxWidth: 440, mx: 'auto', mb: 3 }}>
          <Button
            component="a"
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${getWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            fullWidth
            size="large"
            startIcon={<WhatsAppIcon />}
            sx={{
              backgroundColor: '#25D366',
              '&:hover': { backgroundColor: '#1EBE5D' },
              color: '#FFFFFF',
              fontWeight: 700,
              py: 1.5,
              mb: 1.5,
            }}
          >
            Chat With Us On WhatsApp
          </Button>

          <Button
            variant="outlined"
            onClick={handleReset}
            startIcon={<RefreshIcon />}
            fullWidth
            sx={{ color: 'text.secondary', borderColor: '#CBD5E1' }}
          >
            Submit Another Enquiry
          </Button>
        </Box>

        <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
          Our team usually responds within a few business hours on {formData.preferredContactMethod}.
        </Typography>
      </Paper>
    );
  }

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 10px 30px rgba(18, 59, 93, 0.05)',
      }}
    >
      <CardContent sx={{ p: { xs: 3, md: 5 } }}>
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
            <FlightTakeoffIcon sx={{ color: 'primary.main', fontSize: 24 }} />
            <Typography variant="overline" sx={{ fontWeight: 700, color: 'primary.main', letterSpacing: '0.08em' }}>
              Quick Travel Planning
            </Typography>
          </Stack>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', mb: 1, fontSize: { xs: '1.5rem', md: '1.875rem' } }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
            {subtitle}
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2.5}>
            {/* Full Name */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                fullWidth
                label="Full Name"
                placeholder="e.g. Rahul Sharma"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                error={!!errors.fullName}
                helperText={errors.fullName}
              />
            </Grid>

            {/* Phone Number */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                fullWidth
                label="Phone / Mobile Number"
                placeholder="e.g. +91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>

            {/* Email Address */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Email Address (Optional)"
                placeholder="e.g. rahul@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            {/* Destination Selection */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                select
                fullWidth
                label="Destination of Interest"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                error={!!errors.destination}
                helperText={errors.destination || 'Select from our popular destinations or custom'}
              >
                {destinations.map((dest) => (
                  <MenuItem key={dest.id} value={dest.name}>
                    {dest.name} ({dest.suggestedDuration || 'Flexible'})
                  </MenuItem>
                ))}
                <MenuItem value="Other / Customized Itinerary">
                  Other / Customized Itinerary
                </MenuItem>
              </TextField>
            </Grid>

            {/* Travel Type */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                select
                fullWidth
                label="Travel Style"
                value={formData.travelType}
                onChange={(e) => setFormData({ ...formData, travelType: e.target.value })}
              >
                {siteConfig.enquiry.travelTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Travellers Count */}
            <Grid size={{ xs: 6, sm: 3 }}>
              <TextField
                type="number"
                fullWidth
                label="Total Travellers"
                slotProps={{ htmlInput: { min: 1, max: 60 } }}
                value={formData.travellers}
                onChange={(e) =>
                  setFormData({ ...formData, travellers: Math.max(1, parseInt(e.target.value) || 1) })
                }
              />
            </Grid>

            {/* Duration */}
            <Grid size={{ xs: 6, sm: 3 }}>
              <TextField
                select
                fullWidth
                label="Trip Duration"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              >
                {siteConfig.enquiry.durationOptions.map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Estimated Travel Date / Month */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Tentative Travel Month / Date"
                placeholder="e.g. Mid November, Diwali weekend, etc."
                value={formData.travelDate}
                onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
              />
            </Grid>

            {/* Budget Range */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                select
                fullWidth
                label="Expected Budget (Per Person)"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              >
                {siteConfig.enquiry.budgetRanges.map((budget) => (
                  <MenuItem key={budget} value={budget}>
                    {budget}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Preferred Contact Method */}
            <Grid size={{ xs: 12 }}>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ fontSize: '0.875rem', fontWeight: 600, color: 'text.secondary', mb: 0.5 }}>
                  Preferred way to contact you:
                </FormLabel>
                <RadioGroup
                  row
                  value={formData.preferredContactMethod}
                  onChange={(e) => setFormData({ ...formData, preferredContactMethod: e.target.value })}
                >
                  {siteConfig.enquiry.contactMethods.map((method) => (
                    <FormControlLabel
                      key={method}
                      value={method}
                      control={<Radio size="small" />}
                      label={method}
                      sx={{ mr: 3 }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Special Requests */}
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Special Requests / Trip Expectations (Optional)"
                placeholder="Tell us about special food preferences, accommodation style, places you definitely want to visit..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </Grid>

            {/* Submit Button */}
            <Grid size={{ xs: 12 }}>
              <Button
                type="submit"
                variant="contained"
                color="warning"
                size="large"
                fullWidth
                endIcon={<SendIcon />}
                sx={{
                  py: 1.75,
                  fontSize: '1rem',
                  fontWeight: 700,
                  boxShadow: '0 6px 20px rgba(244, 162, 97, 0.4)',
                }}
              >
                Send Travel Enquiry
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
