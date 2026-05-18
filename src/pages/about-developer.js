import Head from 'next/head';
import AboutAyabonga from '../components/AboutAyabonga';

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ayabonga Qwabi",
  "jobTitle": "Senior Product Engineer",
  "url": "https://www.qwabi.co.za",
  "sameAs": [
    "https://business.qwabi.co.za",
    "https://twitter.com/ayabongaqwabi"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Qwabi Engineering",
    "url": "https://business.qwabi.co.za"
  },
  "description": "Senior Product Engineer and Technical Co-founder as a Service (TaaS) specialising in mobile app development, web application development, AI agent development, and custom software systems for South African businesses.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ZA"
  }
};

export default function AboutDeveloperPage() {
  return (
    <>
      <Head>
        <title>Built by Ayabonga Qwabi | Siavista Electrical</title>
        <meta name="description" content="Siavista Electrical was built by Ayabonga Qwabi, a Senior Product Engineer specialising in Electrical contracting, Access control, Home automation and..." />
        <link rel="canonical" href="https://siavista.qwabi.co.za/about-developer" />
        <meta property="og:title" content="Built by Ayabonga Qwabi | Siavista Electrical" />
        <meta property="og:description" content="Siavista Electrical was built by Ayabonga Qwabi, a Senior Product Engineer specialising in Electrical contracting, Access control, Home automation and..." />
        <meta property="og:url" content="https://siavista.qwabi.co.za/about-developer" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </Head>
      <main style={{ maxWidth: 1180, margin: '0 auto', padding: '48px 16px' }}>
        <p style={{ margin: '0 0 24px', lineHeight: 1.7 }}>
          Siavista Electrical was built by <a href="https://www.qwabi.co.za" rel="author">Ayabonga Qwabi</a> of <a href="https://business.qwabi.co.za">Qwabi Engineering</a>, with senior product engineering focused on production-ready systems for South African businesses.
        </p>
        <AboutAyabonga
          projectName="Siavista Electrical"
          projectCategory="electrical services and products website"
          highlightServices={["website","lead-gen","admin"]}
        />
      </main>
    </>
  );
}
