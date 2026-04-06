import { useEffect } from 'react'

const SITE_URL = 'https://www.uniwiseglobal.com'
const SITE_NAME = 'Uniwise Global Solutions Sdn. Bhd.'
const DEFAULT_IMAGE = `${SITE_URL}/assets/images/og-image.png`

export default function SEO({
  title,
  description,
  keywords,
  path = '/',
  type = 'website',
  image = DEFAULT_IMAGE,
  schema,
}) {
  const fullTitle = title.includes('Uniwise') ? title : `${title} | ${SITE_NAME}`
  const canonicalUrl = `${SITE_URL}${path}`

  useEffect(() => {
    document.title = fullTitle

    const metaTags = {
      description,
      keywords,
      author: SITE_NAME,
      robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',

      // Open Graph
      'og:title': fullTitle,
      'og:description': description,
      'og:type': type,
      'og:url': canonicalUrl,
      'og:image': image,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:alt': `${SITE_NAME} - Customer Service Center & Business Support Malaysia`,
      'og:site_name': SITE_NAME,
      'og:locale': 'en_MY',

      // Twitter Card
      'twitter:card': 'summary_large_image',
      'twitter:title': fullTitle,
      'twitter:description': description,
      'twitter:image': image,
      'twitter:image:alt': `${SITE_NAME} - Customer Service Center & Business Support Malaysia`,
    }

    // Set or update meta tags
    Object.entries(metaTags).forEach(([key, value]) => {
      if (!value) return
      const isOg = key.startsWith('og:')
      const isTwitter = key.startsWith('twitter:')
      const attr = isOg || isTwitter ? 'property' : 'name'

      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', value)
    })

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    // JSON-LD Structured Data
    const existingLd = document.querySelector('script[data-seo-schema]')
    if (existingLd) existingLd.remove()

    if (schema) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo-schema', 'true')
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    }

    return () => {
      const ldScript = document.querySelector('script[data-seo-schema]')
      if (ldScript) ldScript.remove()
    }
  }, [fullTitle, description, keywords, canonicalUrl, type, image, schema])

  return null
}

// Pre-built schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Uniwise Global Solutions Sdn. Bhd.',
  alternateName: 'Uniwise Global Solutions',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/logo-light.png`,
  description: 'Business support company in Malaysia specializing in customer service center operations, office administrative support, and IT service management.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kuala Lumpur',
    addressCountry: 'MY',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'info@uniwiseglobal.com',
    availableLanguage: ['English', 'Malay'],
  },
  sameAs: [],
  serviceArea: {
    '@type': 'Country',
    name: 'Malaysia',
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Uniwise Global Solutions Sdn. Bhd.',
  image: `${SITE_URL}/assets/images/logo-light.png`,
  url: SITE_URL,
  telephone: '+60-00-000-0000',
  email: 'info@uniwiseglobal.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kuala Lumpur',
    addressRegion: 'Kuala Lumpur',
    addressCountry: 'MY',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  priceRange: '$$',
}

export function serviceSchema(name, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    provider: {
      '@type': 'Organization',
      name: 'Uniwise Global Solutions Sdn. Bhd.',
      url: SITE_URL,
    },
    description,
    areaServed: {
      '@type': 'Country',
      name: 'Malaysia',
    },
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  }
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
