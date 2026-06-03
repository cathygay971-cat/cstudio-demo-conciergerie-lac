import type { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'
import { getCities } from '@/lib/content'
import { buildServicesJsonLd } from '@/lib/jsonld'
import JsonLd from '@/components/ui/JsonLd'
import Hero from '@/components/sections/Hero'
import StatsBand from '@/components/sections/StatsBand'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import TeamSection from '@/components/sections/TeamSection'
import CtaBand from '@/components/sections/CtaBand'
import EstimBand from '@/components/sections/EstimBand'
import WhyCity from '@/components/sections/WhyCity'
import Gallery from '@/components/sections/Gallery'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import ContactBlock from '@/components/sections/ContactBlock'
import SeoBlock from '@/components/sections/SeoBlock'

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  alternates: { canonical: siteConfig.seo.siteUrl },
}

export default function HomePage() {
  const { company, stats, trustBadges, steps, whyMainCity, faq, seo, services } = siteConfig

  const servicesJsonLd = buildServicesJsonLd(services, {
    companyName: company.name,
    siteUrl: seo.siteUrl,
    areaServed: getCities().map(c => c.name),
  })

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    description: seo.defaultDescription,
    url: seo.siteUrl,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address,
      postalCode: company.zipCode,
      addressLocality: company.city,
      addressCountry: 'FR',
    },
    openingHours: 'Mo-Sa 09:00-19:00',
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
    ].filter(Boolean),
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.identity.name,
    url: seo.siteUrl,
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: seo.siteUrl,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address,
      postalCode: company.zipCode,
      addressLocality: company.city,
      addressCountry: 'FR',
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
    ].filter(Boolean),
    ...(siteConfig.team.enabled && {
      employee: siteConfig.team.members.map(m => ({
        '@type': 'Person',
        name: m.name,
        jobTitle: m.role,
        image: `${seo.siteUrl}${m.image}`,
      })),
    }),
  }

  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={servicesJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Hero />
      <StatsBand stats={stats} trustBadges={trustBadges} />
      <Services />
      <HowItWorks steps={steps} />
      <TeamSection />
      <CtaBand />
      <Testimonials />
      <WhyCity data={whyMainCity} />
      <Gallery />
      <EstimBand />
      <ContactBlock />
      <FAQ items={faq} />
      <SeoBlock data={siteConfig.seoBlock} />
    </>
  )
}
