/**
 * AboutAyabonga.jsx
 * ─────────────────────────────────────────────────────────────────
 * Plug-and-play "About the Developer" section for any React project.
 * Compatible with: Create React App, Vite/React, Next.js (pages + app router)
 *
 * USAGE
 * ─────
 * import AboutAyabonga from './AboutAyabonga';
 * // then anywhere in JSX:
 * <AboutAyabonga />
 *
 * CUSTOMISATION
 * ─────────────
 * Pass props to override defaults:
 *   <AboutAyabonga
 *     projectName="uTap"
 *     projectCategory="campus wallet"
 *     highlightServices={['mobile-app', 'cross-platform', 'saas']}
 *   />
 *
 * SERVICE KEYS (use in highlightServices array):
 *   'website'        'web-app'          'landing-page'   'lead-gen'
 *   'mobile-app'     'cross-platform'   'react-native'   'flutter'
 *   'desktop'        'ai-agent'         'llm'            'chatbot'
 *   'whatsapp-bot'   'facebook-bot'     'rag'            'crm'
 *   'booking'        'marketplace'      'saas'           'api'
 *   'payment'        'admin'            'white-label'    'ecommerce'
 *
 * SELF-CONTAINED STYLES
 * ─────────────────────
 * All styles are scoped via a CSS-in-JS object / inline styles.
 * No Tailwind, no CSS imports needed.
 * Uses only system-neutral colours so it never clashes with the host site.
 * ─────────────────────────────────────────────────────────────────
 */

import React, { useState } from 'react';

/* ─── Data ─────────────────────────────────────────────────────── */

const PROFILE = {
  name: 'Ayabonga Qwabi',
  title: 'Senior Product Engineer',
  tagline: 'I don\'t write code. I build systems that compound.',
  origin: 'Eastern Cape, South Africa',
  bio: 'Founder of Qwabi Engineering. 10+ years shipping production systems — mobile apps, web platforms, AI tools, and the infrastructure underneath them. Based in South Africa, building for African realities.',
  personalUrl: 'https://www.qwabi.co.za',
  businessUrl: 'https://business.qwabi.co.za',
  whatsapp: 'https://wa.me/27603116777?text=Hi%20Ayabonga%2C%20I%20found%20your%20site%20and%20I%27d%20like%20to%20chat.',
  twitter: 'https://twitter.com/ayabongaqwabi',
  stats: [
    { value: '10+', label: 'Years shipping' },
    { value: '30+', label: 'Projects delivered' },
    { value: '8 wks', label: 'Typical MVP' },
  ],
};

const ALL_SERVICES = [
  { key: 'website',       label: 'Website Development',                  group: 'web' },
  { key: 'web-app',       label: 'Web Application Development',          group: 'web' },
  { key: 'landing-page',  label: 'Landing Page Development',             group: 'web' },
  { key: 'lead-gen',      label: 'Lead Generation Website Development',  group: 'web' },
  { key: 'ecommerce',     label: 'Headless E-commerce Development',      group: 'web' },
  { key: 'mobile-app',    label: 'Mobile Application Development',       group: 'mobile' },
  { key: 'cross-platform',label: 'Cross-Platform App Development',       group: 'mobile' },
  { key: 'react-native',  label: 'React Native App Development',         group: 'mobile' },
  { key: 'flutter',       label: 'Flutter App Development',              group: 'mobile' },
  { key: 'desktop',       label: 'Desktop Application Development',      group: 'mobile' },
  { key: 'ai-agent',      label: 'AI Agent Development',                 group: 'ai' },
  { key: 'llm',           label: 'LLM Integration & Fine-Tuning',        group: 'ai' },
  { key: 'chatbot',       label: 'AI Chatbot Development',               group: 'ai' },
  { key: 'whatsapp-bot',  label: 'WhatsApp Bot Development',             group: 'ai' },
  { key: 'facebook-bot',  label: 'Facebook Messenger Bot Development',   group: 'ai' },
  { key: 'rag',           label: 'RAG Pipeline Development',             group: 'ai' },
  { key: 'crm',           label: 'Custom CRM Development',               group: 'systems' },
  { key: 'booking',       label: 'Booking & Scheduling Systems',         group: 'systems' },
  { key: 'marketplace',   label: 'Marketplace Platform Development',     group: 'systems' },
  { key: 'saas',          label: 'SaaS Product Development',             group: 'systems' },
  { key: 'api',           label: 'API Development & Integration',        group: 'systems' },
  { key: 'payment',       label: 'Payment Integration (Paystack/Stitch/Ozow)', group: 'systems' },
  { key: 'admin',         label: 'Admin Dashboard & Internal Tools',     group: 'systems' },
  { key: 'white-label',   label: 'White-Label SaaS Development',         group: 'systems' },
];

const GROUP_LABELS = {
  web: 'Web & Frontend',
  mobile: 'Mobile & Desktop',
  ai: 'AI & Automation',
  systems: 'Systems & Platforms',
};

const SELECTED_PROJECTS = [
  { title: 'uTap', desc: 'Campus NFC digital wallet for SA students', url: 'https://utaptech.co.za', tag: 'Mobile · SaaS' },
  { title: 'ClinicPlus', desc: 'Occupational health bookings for mining & construction', url: 'https://clinicplusbookings.co.za', tag: 'Web App' },
  { title: 'Queens Connect', desc: 'Community AI assistant for Queenstown', url: 'https://queensconnect.qwabi.co.za', tag: 'AI Agent' },
  { title: 'Trip (Taxi Assist)', desc: 'Compliance-first ride-hailing, Eastern Cape & Gauteng', url: 'https://trip.qwabi.co.za', tag: 'Mobile · Marketplace' },
  { title: 'Laundry Marketplace', desc: 'Multi-sided turnkey laundry platform', url: 'https://laundry.qwabi.co.za', tag: 'Marketplace' },
  { title: 'Warner Music Africa', desc: 'Participant management — Culture Shifters competition', url: 'https://www.warnermusicafrica.com', tag: 'Enterprise' },
];

/* ─── Component ─────────────────────────────────────────────────── */

export default function AboutAyabonga({
  projectName = null,
  projectCategory = null,
  highlightServices = [],
  showProjects = true,
  showAllServices = true,
  compact = false,
}) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  /* Resolve which services to show */
  const hasHighlight = highlightServices.length > 0;
  const visibleServices = hasHighlight
    ? ALL_SERVICES.filter((s) => highlightServices.includes(s.key))
    : ALL_SERVICES;

  const groupedServices = visibleServices.reduce((acc, s) => {
    if (!acc[s.group]) acc[s.group] = [];
    acc[s.group].push(s);
    return acc;
  }, {});

  const serviceGroups = Object.entries(groupedServices);
  const showToggle = !hasHighlight && ALL_SERVICES.length > 8;
  const displayedGroups = !showAllServices || (!servicesExpanded && showToggle)
    ? serviceGroups.slice(0, 2)
    : serviceGroups;

  /* Intro line */
  const introLine = projectName
    ? `${projectName} was designed and built by Ayabonga Qwabi${projectCategory ? `, a ${projectCategory} specialist` : ''} and founder of Qwabi Engineering.`
    : 'This project was designed and built by Ayabonga Qwabi, founder of Qwabi Engineering.';

  return (
    <section style={styles.section} aria-labelledby="about-dev-heading">
      <div style={styles.container}>

        {/* ── Header ── */}
        <div style={styles.header}>
          <div style={styles.avatar} aria-hidden="true">AQ</div>
          <div style={styles.headerText}>
            <p style={styles.introLine}>{introLine}</p>
            <h2 id="about-dev-heading" style={styles.name}>{PROFILE.name}</h2>
            <p style={styles.titleBadge}>{PROFILE.title} · Qwabi Engineering</p>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={styles.divider} aria-hidden="true" />

        {/* ── Bio + Stats ── */}
        <div style={compact ? styles.bioRowCompact : styles.bioRow}>
          <div style={styles.bioBlock}>
            <p style={styles.tagline}>"{PROFILE.tagline}"</p>
            <p style={styles.bio}>{PROFILE.bio}</p>
            <p style={styles.origin}>
              <span style={styles.dot} aria-hidden="true">◎</span>
              {PROFILE.origin}
            </p>
          </div>
          <div style={styles.statsBlock}>
            {PROFILE.stats.map((s) => (
              <div key={s.label} style={styles.statCard}>
                <span style={styles.statValue}>{s.value}</span>
                <span style={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Services ── */}
        {showAllServices && (
          <>
            <div style={styles.divider} aria-hidden="true" />
            <div style={styles.sectionBlock}>
              <p style={styles.sectionLabel}>
                {hasHighlight ? 'Services used on this project' : 'Services'}
              </p>
              <div style={styles.servicesGrid}>
                {displayedGroups.map(([group, items]) => (
                  <div key={group} style={styles.serviceGroup}>
                    <p style={styles.groupLabel}>{GROUP_LABELS[group]}</p>
                    <ul style={styles.serviceList}>
                      {items.map((s) => (
                        <li key={s.key} style={styles.serviceItem}>
                          <span style={styles.serviceDot} aria-hidden="true" />
                          <a
                            href={PROFILE.personalUrl + '/services'}
                            style={styles.serviceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {showToggle && (
                <button
                  style={styles.toggleBtn}
                  onClick={() => setServicesExpanded((v) => !v)}
                  aria-expanded={servicesExpanded}
                >
                  {servicesExpanded ? '↑ Show less' : `↓ Show all ${ALL_SERVICES.length} services`}
                </button>
              )}
            </div>
          </>
        )}

        {/* ── Projects ── */}
        {showProjects && (
          <>
            <div style={styles.divider} aria-hidden="true" />
            <div style={styles.sectionBlock}>
              <p style={styles.sectionLabel}>Selected work</p>
              <div style={styles.projectsGrid}>
                {SELECTED_PROJECTS.map((p) => (
                  <a
                    key={p.title}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.projectCard}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = styles.projectCardHover.borderColor;
                      e.currentTarget.style.background = styles.projectCardHover.background;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = styles.projectCard.borderColor;
                      e.currentTarget.style.background = styles.projectCard.background;
                    }}
                  >
                    <div style={styles.projectHeader}>
                      <span style={styles.projectTitle}>{p.title}</span>
                      <span style={styles.projectTag}>{p.tag}</span>
                    </div>
                    <p style={styles.projectDesc}>{p.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ── CTA / Links ── */}
        <div style={styles.divider} aria-hidden="true" />
        <div style={styles.ctaRow}>
          <div style={styles.ctaLinks}>
            <a
              href={PROFILE.personalUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.ctaLinkPrimary}
            >
              qwabi.co.za →
            </a>
            <a
              href={PROFILE.businessUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.ctaLinkSecondary}
            >
              business.qwabi.co.za →
            </a>
            <a
              href={PROFILE.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.ctaLinkSecondary}
            >
              @ayabongaqwabi
            </a>
          </div>
          <a
            href={PROFILE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.whatsappBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#128C7E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = styles.whatsappBtn.background;
            }}
          >
            <svg
              style={{ width: 16, height: 16, flexShrink: 0 }}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.571a.5.5 0 0 0 .617.61l5.882-1.54A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.925 0-3.72-.524-5.257-1.435l-.378-.224-3.913 1.026 1.001-3.8-.246-.392A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* ── Footer attribution ── */}
        <p style={styles.attribution}>
          Built by{' '}
          <a href={PROFILE.personalUrl} style={styles.attrLink} target="_blank" rel="noopener noreferrer">
            Ayabonga Qwabi
          </a>{' '}
          ·{' '}
          <a href={PROFILE.businessUrl} style={styles.attrLink} target="_blank" rel="noopener noreferrer">
            Qwabi Engineering
          </a>{' '}
          · Senior Product Engineer South Africa
        </p>

      </div>
    </section>
  );
}

/* ─── Styles ────────────────────────────────────────────────────── */
/*
 * All values are neutral / muted intentionally.
 * No brand-specific colours — inherits from host site context.
 * Override any individual style by wrapping in a container
 * and using a CSS class with higher specificity.
 */

const styles = {
  section: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    lineHeight: 1.6,
    color: 'inherit',
    padding: '3rem 0',
  },
  container: {
    maxWidth: 900,
    margin: '0 auto',
    padding: '0 1.25rem',
  },

  /* Header */
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  avatar: {
    flexShrink: 0,
    width: 52,
    height: 52,
    borderRadius: '50%',
    background: 'rgba(128,128,128,0.12)',
    border: '1px solid rgba(128,128,128,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 600,
    letterSpacing: 1,
    color: 'inherit',
    opacity: 0.8,
  },
  headerText: { flex: 1 },
  introLine: {
    fontSize: 13,
    opacity: 0.55,
    margin: '0 0 4px',
    letterSpacing: 0.2,
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    margin: '0 0 4px',
    letterSpacing: -0.3,
  },
  titleBadge: {
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 500,
    padding: '2px 10px',
    borderRadius: 20,
    background: 'rgba(128,128,128,0.1)',
    border: '1px solid rgba(128,128,128,0.18)',
    margin: 0,
    letterSpacing: 0.3,
  },

  divider: {
    height: 1,
    background: 'rgba(128,128,128,0.15)',
    margin: '1.5rem 0',
  },

  /* Bio + Stats */
  bioRow: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  bioRowCompact: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  bioBlock: { flex: '1 1 320px' },
  tagline: {
    fontSize: 15,
    fontStyle: 'italic',
    opacity: 0.65,
    margin: '0 0 0.75rem',
    lineHeight: 1.5,
  },
  bio: {
    fontSize: 14,
    opacity: 0.8,
    margin: '0 0 0.75rem',
    lineHeight: 1.7,
  },
  origin: {
    fontSize: 13,
    opacity: 0.5,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  dot: { fontSize: 10, letterSpacing: 0 },

  statsBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    minWidth: 140,
  },
  statCard: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0.6rem 0.9rem',
    borderRadius: 8,
    background: 'rgba(128,128,128,0.07)',
    border: '1px solid rgba(128,128,128,0.13)',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  statLabel: {
    fontSize: 11,
    opacity: 0.55,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginTop: 2,
  },

  /* Services */
  sectionBlock: { marginBottom: '0.5rem' },
  sectionLabel: {
    fontSize: 11,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 1,
    opacity: 0.45,
    margin: '0 0 1rem',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.25rem',
  },
  serviceGroup: {},
  groupLabel: {
    fontSize: 12,
    fontWeight: 600,
    opacity: 0.5,
    margin: '0 0 0.5rem',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  serviceList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  serviceItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 7,
  },
  serviceDot: {
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: 'currentColor',
    opacity: 0.35,
    flexShrink: 0,
  },
  serviceLink: {
    fontSize: 13,
    color: 'inherit',
    textDecoration: 'none',
    opacity: 0.75,
    lineHeight: 1.5,
  },
  toggleBtn: {
    marginTop: '0.9rem',
    background: 'none',
    border: '1px solid rgba(128,128,128,0.2)',
    borderRadius: 6,
    padding: '5px 14px',
    fontSize: 12,
    cursor: 'pointer',
    color: 'inherit',
    opacity: 0.6,
    letterSpacing: 0.2,
  },

  /* Projects */
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '0.75rem',
  },
  projectCard: {
    display: 'block',
    padding: '0.85rem 1rem',
    borderRadius: 8,
    border: '1px solid rgba(128,128,128,0.15)',
    background: 'rgba(128,128,128,0.04)',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'border-color 0.15s, background 0.15s',
    cursor: 'pointer',
    borderColor: 'rgba(128,128,128,0.15)',
  },
  projectCardHover: {
    borderColor: 'rgba(128,128,128,0.32)',
    background: 'rgba(128,128,128,0.08)',
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
    gap: 8,
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: -0.1,
  },
  projectTag: {
    fontSize: 10,
    opacity: 0.45,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    whiteSpace: 'nowrap',
  },
  projectDesc: {
    fontSize: 12.5,
    opacity: 0.6,
    margin: 0,
    lineHeight: 1.5,
  },

  /* CTA */
  ctaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  ctaLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.9rem',
    alignItems: 'center',
  },
  ctaLinkPrimary: {
    fontSize: 13,
    fontWeight: 600,
    color: 'inherit',
    textDecoration: 'none',
    opacity: 0.85,
    letterSpacing: -0.1,
  },
  ctaLinkSecondary: {
    fontSize: 13,
    color: 'inherit',
    textDecoration: 'none',
    opacity: 0.5,
  },
  whatsappBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    background: '#25D366',
    color: '#fff',
    border: 'none',
    borderRadius: 7,
    padding: '8px 16px',
    fontSize: 13,
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background 0.15s',
    letterSpacing: 0.1,
  },

  /* Attribution */
  attribution: {
    marginTop: '1.5rem',
    fontSize: 11.5,
    opacity: 0.38,
    textAlign: 'center',
    letterSpacing: 0.1,
  },
  attrLink: {
    color: 'inherit',
    textDecoration: 'none',
    opacity: 1,
  },
};
