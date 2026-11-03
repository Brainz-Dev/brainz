import PrivacyPolicy from "../components/PrivacyPolicy";
import SEOHead from "../components/SEOHead";

const breadcrumbs = [
  { name: "Home",           path: "/" },
  { name: "Privacy Policy", path: "/privacy" },
];

function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Learn how Brainz-Dev collects, uses, and protects your personal data when using our website and software development services."
        canonical="/privacy"
        noindex={false}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <article>
          <PrivacyPolicy />
        </article>
      </div>
    </>
  );
}

export default PrivacyPage;
