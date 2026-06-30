type FaqItem = {
  question: string
  answer: string
}

type FaqPageJsonLdProps = {
  faqs: FaqItem[]
  pageTitle: string
  pageDescription: string
  pageUrl: string
}

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Oasis Studio',
    url: 'https://oasisstudio.org',
    logo: 'https://oasisstudio.org/OasisLogoTransparent.png',
    email: 'admin@oasisstudio.org',
    foundingDate: '2020',
    description:
      'Oasis Studio is a premier software and interactive media agency based in Islamabad, Pakistan. We specialize in game development, app development, web development, AI development, cloud engineering, UI/UX design, graphic designing, 2D art, 3D modeling, video editing, and testing and QA.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office 14, 2nd Floor, Evacuee Trust Complex, Blue Area, F-7 Markaz',
      addressLocality: 'Islamabad',
      postalCode: '44000',
      addressCountry: 'PK',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 12,
    },
    knowsAbout: [
      // Game Development
      'Game Development', 'Unity', 'Unreal Engine', 'C#', 'Multiplayer Games', 'Mobile Games', 'WebGL',
      // App Development
      'App Development', 'React Native', 'Flutter', 'iOS Development', 'Android Development', 'App Store Optimization',
      // Web Development
      'Web Development', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'SaaS Platforms', 'Full-Stack Development',
      // AI Development
      'AI Development', 'OpenAI', 'Anthropic Claude', 'AWS Bedrock', 'RAG', 'LLM Integration', 'Agentic AI', 'GenAI', 'MLOps',
      // Cloud Engineering
      'Cloud Engineering', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'DevOps', 'Infrastructure as Code',
      // Video Editing
      'Video Editing', 'Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grading', 'Game Trailers',
      // UI/UX Design
      'UI/UX Design', 'Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'Game UI',
      // Graphic Designing
      'Graphic Designing', 'Brand Identity', 'Logo Design', 'Adobe Illustrator', 'Photoshop',
      // 2D Art
      '2D Art', 'Concept Art', 'Sprite Atlases', 'Spine Animation', 'Procreate',
      // 3D Modeling
      '3D Modeling', 'Blender', 'Maya', 'ZBrush', 'Substance 3D', 'PBR Textures', '3D Animation',
      // Testing and QA
      'Testing and QA', 'Playwright', 'Jest', 'GitHub Actions', 'Performance Testing', 'Manual QA',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Oasis Studio Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Game Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'App Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Engineering' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Editing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Graphic Designing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '2D Art' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3D Modeling' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Testing and QA' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

type ArticleJsonLdProps = {
  headline: string
  description: string
  url: string
  datePublished: string
  imageUrl?: string
}

export function ArticleJsonLd({ headline, description, url, datePublished, imageUrl }: ArticleJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    url,
    datePublished,
    image: imageUrl,
    author: {
      '@type': 'Organization',
      name: 'Oasis Studio',
      url: 'https://oasisstudio.org',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Oasis Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://oasisstudio.org/OasisLogoTransparent.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FaqPageJsonLd({ faqs, pageTitle, pageDescription, pageUrl }: FaqPageJsonLdProps) {
  if (faqs.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
