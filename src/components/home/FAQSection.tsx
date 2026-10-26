'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpIcon from '@mui/icons-material/Help';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SectionHeader from '@/components/common/SectionHeader';
import { faqs } from '@/data/faqs';
import { siteConfig } from '@/data/site-config';

export default function FAQSection() {
  const [expanded, setExpanded] = useState<string | false>('faq-1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="md">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Everything You Need to Know Before You Travel"
          subtitle="Clear, honest answers about our booking process, group sizes, safety standards, and customized itineraries."
        />

        <Stack spacing={2} sx={{ mb: 6 }}>
          {faqs.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              elevation={0}
              sx={{
                borderRadius: '16px !important',
                border: '1px solid',
                borderColor: expanded === faq.id ? 'primary.light' : 'rgba(0, 0, 0, 0.08)',
                backgroundColor: expanded === faq.id ? '#F8FAFC' : '#FFFFFF',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                '&::before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: expanded === faq.id ? 'primary.main' : 'text.secondary',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                }
                sx={{
                  py: 1,
                  px: 3,
                  '& .MuiAccordionSummary-content': { my: 1.5 },
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: expanded === faq.id ? 'primary.main' : 'text.primary',
                    fontSize: '1.05rem',
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                    fontSize: '0.95rem',
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>

        {/* Still have questions banner */}
        <Box
          sx={{
            p: 4,
            borderRadius: 3.5,
            backgroundColor: '#EFF6FF',
            border: '1px solid #DBEAFE',
            textAlign: 'center',
          }}
        >
          <HelpIcon sx={{ fontSize: 36, color: 'primary.main', mb: 1.5 }} />
          <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}>
            Have a different question or special travel requirement?
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, maxWidth: 500, mx: 'auto' }}>
            We are always happy to help. Send us a message on WhatsApp or call our trip host directly.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
            <Button
              component="a"
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="warning"
              startIcon={<WhatsAppIcon />}
              sx={{ fontWeight: 700, px: 3 }}
            >
              Ask on WhatsApp
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              color="primary"
              sx={{ fontWeight: 600, px: 3 }}
            >
              Contact Options
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
