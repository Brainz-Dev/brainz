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

function PrivacyPolicy() {
  return (
    <div className="font-poppins">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-white/[0.07]">
        <h1 className="font-poppins font-bold text-[26px] sm:text-[30px] text-white mb-1">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="text-[13px] text-slate-500">Effective Date: 01 May 2024</p>
      </div>

      {/* Intro */}
      <p className="text-[14px] text-slate-400 leading-relaxed mb-8">
        This Privacy Policy explains how{" "}
        <span className="text-gradient font-semibold">Brainz-Dev</span> ("we",
        "us," or "our") collects, uses, and protects your information when you
        use our services, including custom apps, integrations, extensions for
        SaaS tools, and our e-commerce website.
      </p>

      <Section title="Information We Collect">
        <p>
          We collect the following information to provide and improve our
          services:
        </p>
        <div className="space-y-2 mt-2">
          <div className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/70 flex-shrink-0" />
            <span>
              <span className="text-white font-medium">Personal Information: </span>
              Name, email address, and physical address.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/70 flex-shrink-0" />
            <span>
              <span className="text-white font-medium">Integration Credentials: </span>
              API keys, access tokens, and other credentials required to connect
              to the software tools you use.
            </span>
          </div>
        </div>
      </Section>

      <Section title="How We Use Your Information">
        <p>We use the information we collect for purposes such as:</p>
        <div className="space-y-2 mt-2">
          {[
            ["Service Provision", "To enable app integrations, customizations, and functionality within the software tools you use."],
            ["Communication", "To respond to inquiries, provide updates, and communicate essential information regarding your account or usage of our services."],
            ["Product Enhancement", "To understand user needs better, improve product quality, and develop new features or tools."],
            ["Feedback and Ideas", "To gather suggestions for new app ideas and features."],
          ].map(([label, desc]) => (
            <div key={label} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/70 flex-shrink-0" />
              <span>
                <span className="text-white font-medium">{label}: </span>
                {desc}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Data Security">
        <p>
          We implement industry-standard security measures to protect your data,
          including:
        </p>
        <div className="space-y-2 mt-2">
          <div className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/70 flex-shrink-0" />
            <span>
              <span className="text-white font-medium">Data Encryption: </span>
              We encrypt sensitive data such as API keys and access tokens.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/70 flex-shrink-0" />
            <span>
              <span className="text-white font-medium">Access Control: </span>
              Access to your data is restricted to authorized personnel only.
            </span>
          </div>
        </div>
      </Section>

      <Section title="Sharing and Disclosure of Information">
        <p>
          We do not share, sell, or disclose your information to any third
          parties. All data collected is solely for internal purposes and is
          kept strictly confidential.
        </p>
      </Section>

      <Section title="Your Rights">
        <p>You have the right to:</p>
        <BulletList
          items={[
            "Access the personal data we hold about you.",
            "Request corrections to inaccurate information.",
            "Request deletion of your data under certain conditions.",
          ]}
        />
      </Section>

      <Section title="Updates to This Privacy Policy">
        <p>
          We may update this Privacy Policy periodically. Any changes will be
          posted on this page with an updated effective date.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <a
            href="mailto:support@brainz-dev.freshdesk.com"
            className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
          >
            support@brainz-dev.freshdesk.com
          </a>
          .
        </p>
      </Section>
    </div>
  );
}

export default PrivacyPolicy;
