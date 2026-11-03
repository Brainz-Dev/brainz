import TermsAndConditions from "../components/TermsAndConditions";
import SEOHead from "../components/SEOHead";

const breadcrumbs = [
  { name: "Home",                path: "/" },
  { name: "Terms & Conditions",  path: "/terms" },
];

function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms & Conditions"
        description="Read the Terms and Conditions for using Brainz-Dev's website, products, and software development services."
        canonical="/terms"
        noindex={false}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <article>
          <TermsAndConditions />
        </article>
      </div>
    </>
  );
}

export default TermsPage;
