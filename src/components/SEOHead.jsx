import { Helmet } from "react-helmet-async";

const SITE_URL = "https://brainz-dev.com";
const SITE_NAME = "Brainz-Dev";
const DEFAULT_IMAGE = `${SITE_URL}/brainz.png`;
const DEFAULT_DESCRIPTION =
  "Brainz-Dev builds custom Freshdesk apps, Freshservice apps, Zoho Marketplace apps, SaaS integrations, and React/Node.js solutions. Ship production-ready software in 3 weeks.";

function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  breadcrumbs = [],
  jsonLdExtra = null,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | SaaS Integration & Custom App Development`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  const breadcrumbSchema = breadcrumbs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: `${SITE_URL}${crumb.path}`,
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Breadcrumb JSON-LD */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Extra page-level JSON-LD */}
      {jsonLdExtra && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLdExtra)}
        </script>
      )}
    </Helmet>
  );
}

export default SEOHead;
