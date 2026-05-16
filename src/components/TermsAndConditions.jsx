const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="font-poppins font-semibold text-[17px] text-white mb-3 flex items-center gap-2">
      <span className="w-1 h-4 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 inline-block flex-shrink-0" />
      {title}
    </h2>
    <div className="font-poppins text-[14px] text-slate-400 leading-relaxed space-y-2 pl-3">
      {children}
    </div>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="space-y-1.5 mt-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/70 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

function TermsAndConditions() {
  return (
    <div className="font-poppins">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-white/[0.07]">
        <h1 className="font-poppins font-bold text-[26px] sm:text-[30px] text-white mb-1">
          Terms &amp; <span className="text-gradient">Conditions</span>
        </h1>
        <p className="text-[13px] text-slate-500">Effective Date: 01 May 2024</p>
      </div>

      {/* Intro */}
      <p className="text-[14px] text-slate-400 leading-relaxed mb-8">
        Welcome to{" "}
        <span className="text-gradient font-semibold">Brainz-Dev</span>! These
        Terms and Conditions govern your use of our services, including custom
        app development, integrations, extensions for SaaS tools, and our
        e-commerce website. By using our services, you agree to comply with
        these terms.
      </p>

      <Section title="Introduction">
        <p>
          These Terms and Conditions ("Terms") form a legal agreement between
          you ("User," "you," or "your") and{" "}
          <span className="text-gradient font-semibold">Brainz-Dev</span> ("we,"
          "us," or "our"). By accessing or using our services, you accept and
          agree to be bound by these Terms.
        </p>
      </Section>

      <Section title="Services">
        <p>Our services include:</p>
        <BulletList
          items={[
            "Development of custom applications, integrations, and extensions for SaaS tools.",
            "Provision of an e-commerce website for purchasing products and services.",
          ]}
        />
        <p className="mt-3">
          We reserve the right to modify or discontinue any service, either
          temporarily or permanently, with or without notice.
        </p>
      </Section>

      <Section title="User Responsibilities">
        <p>As a user of our services, you agree to:</p>
        <BulletList
          items={[
            "Provide accurate, complete, and current information as requested.",
            "Not share your access credentials with third parties.",
            "Use our services in compliance with applicable laws and regulations.",
            "Respect intellectual property rights associated with any proprietary technology or code.",
          ]}
        />
      </Section>

      <Section title="Data Collection and Privacy">
        <p>
          We collect certain personal and service-related data to provide our
          services effectively. Please review our Privacy Policy for information
          on data collection, usage, and protection. By using our services, you
          consent to the data practices described in our Privacy Policy.
        </p>
      </Section>

      <Section title="Intellectual Property">
        <p>
          All intellectual property rights, including code, design, and content
          created or used in our services, remain the exclusive property of{" "}
          <span className="text-gradient font-semibold">Brainz-Dev</span> or our
          licensors. Users are granted a limited, non-exclusive,
          non-transferable right to access and use the services for personal or
          internal business purposes only.
        </p>
      </Section>

      <Section title="Payment and Refunds">
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/70 flex-shrink-0" />
            <span>
              <span className="text-white font-medium">Payments: </span>
              Users must pay for services as outlined in any specific agreement
              or on our e-commerce site.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/70 flex-shrink-0" />
            <span>
              <span className="text-white font-medium">Refunds: </span>
              Refunds may be issued at our discretion, subject to any specific
              terms outlined in your agreement with us.
            </span>
          </div>
        </div>
      </Section>

      <Section title="Limitations of Liability">
        <p>
          To the fullest extent permitted by law,{" "}
          <span className="text-gradient font-semibold">Brainz-Dev</span> shall
          not be liable for any indirect, incidental, special, consequential, or
          punitive damages, including but not limited to loss of profits, data,
          or goodwill arising from your use of our services. Our total liability
          for any claim arising from or related to these Terms shall not exceed
          the amount you paid for our services within the prior six months.
        </p>
      </Section>

      <Section title="Termination">
        <p>
          We reserve the right to suspend or terminate your access to our
          services at our sole discretion, without prior notice, for any conduct
          that we consider to be in violation of these Terms, illegal, or
          harmful to others.
        </p>
      </Section>

      <Section title="Changes to These Terms">
        <p>
          We may update these Terms periodically. Any changes will be posted on
          this page with an updated effective date. By continuing to use our
          services after changes are posted, you accept the revised Terms.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          If you have questions about these Terms, please contact us at{" "}
          <a
            href="mailto:support@brainz-dev.freshdesk.com"
            className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
          >
            support@brainz-dev.freshdesk.com
          </a>
        </p>
      </Section>
    </div>
  );
}

export default TermsAndConditions;
