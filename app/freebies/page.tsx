import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import FreebiesHero from '../components/FreebiesHero';
import FreebiesGrid from '../components/FreebiesGrid';
import FreebiesNewsletter from '../components/FreebiesNewsletter';

export const metadata: Metadata = {
  title: 'Free Resources - DentalKart | Free Guides, Samples & Templates',
  description: 'Download free dental guides, get product samples, access templates and promotional offers. Exclusive freebies for dental professionals.',
};

export default function FreebiesPage() {
  return (
    <>
      <Navigation />
      <FreebiesHero />
      <FreebiesGrid />
      <FreebiesNewsletter />
    </>
  );
}