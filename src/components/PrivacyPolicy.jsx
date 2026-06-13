const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="font-poppins font-semibold text-[17px] text-ink mb-3 flex items-center gap-2">
      <span className="w-1 h-4 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 inline-block flex-shrink-0" />
      {title}
    </h2>
    <div className="font-poppins text-[14px] text-ink-2 leading-relaxed space-y-3 pl-3">
      {children}
    </div>
  </div>
);

const SubSection = ({ title, children }) => (
  <div className="mt-3">
    <h3 className="font-poppins font-semibold text-[13px] text-ink mb-1.5">
      {title}
    </h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="space-y-1.5 mt-1">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/70 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const BoldItem = ({ label, children }) => (
  <div className="flex items-start gap-2">
    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/70 flex-shrink-0" />
    <span>
      <span className="text-ink font-medium">{label}: </span>
      {children}
    </span>
  </div>
);

const EmailLink = () => (
  <a
    href="mailto:support@brainz-dev.com"
    className="text-brand hover:text-brand/80 transition-colors underline underline-offset-2"
  >
    support@brainz-dev.com
  </a>
);

function PrivacyPolicy() {
  return (
    <div className="font-poppins">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-slate-200">
        <h1 className="font-poppins font-bold text-[26px] sm:text-[30px] text-ink mb-1">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="text-[13px] text-ink-3">
          Effective Date: 25 May 2026 · Version 1.0
        </p>
      </div>

      {/* Intro */}
      <div className="text-[14px] text-ink-2 leading-relaxed mb-8 space-y-3">
        <p>
          This policy is provided in English. In the event of any conflict
          between a translation and the English version, the English version
          shall prevail.
        </p>
        <p>
          <span className="text-gradient font-semibold">Brainz-Dev</span> ("we",
          "us" or "our") provides users with access to software applications
          published on the Freshworks Marketplace at{" "}
          <span className="text-ink font-medium">
            https://www.freshworks.com/apps
          </span>{" "}
          (each an "Application").
        </p>
        <p>
          This Privacy Policy ("Policy") explains what personal data we collect,
          why we collect it, how we use and protect it, and the rights available
          to you. It applies to all visitors to{" "}
          <span className="text-ink font-medium">https://brainz-dev.com</span>{" "}
          ("Website"), all users who install or use our Applications, and anyone
          who contacts us.
        </p>
        <p>
          We act as the{" "}
          <span className="text-ink font-medium">
            Data Controller / Data Fiduciary
          </span>{" "}
          in respect of the personal data described in this Policy. Where we
          process personal data on behalf of a customer (for example, ticket
          data accessed while the Application performs its function), we act as
          a <span className="text-ink font-medium">Data Processor</span> and our
          obligations are governed by that customer's privacy framework and any
          applicable data processing agreement.
        </p>
        <p>
          Questions? Contact us at <EmailLink /> before using any Application.
        </p>
      </div>

      <Section title="1. Definitions">
        <div className="space-y-2">
          <BoldItem label='"Personal Data"'>
            means any information relating to an identified or identifiable
            natural person.
          </BoldItem>
          <BoldItem label='"Processing"'>
            means any operation performed on Personal Data, including
            collection, storage, use, disclosure, or deletion.
          </BoldItem>
          <BoldItem label='"Data Principal / Data Subject"'>
            means the individual whose Personal Data is being processed — that
            is, you.
          </BoldItem>
          <BoldItem label='"Data Processor"'>
            means a third party that processes Personal Data on our behalf under
            a written contract.
          </BoldItem>
          <BoldItem label='"DPDP Act"'>
            means India's Digital Personal Data Protection Act, 2023 and rules
            made thereunder.
          </BoldItem>
          <BoldItem label='"GDPR"'>
            means the EU General Data Protection Regulation 2016/679 and the UK
            GDPR where applicable.
          </BoldItem>
          <BoldItem label='"Sensitive Personal Data"'>
            has the meaning given to it under applicable law, including
            passwords, financial information, health data, and biometric data.
          </BoldItem>
        </div>
      </Section>

      <Section title="2. Data We Collect">
        <p>
          We collect only the minimum data necessary for the purposes described
          below (data minimisation principle). The categories of Personal Data
          we may collect are:
        </p>

        <SubSection title="2.1 Data you provide directly">
          <div className="space-y-2">
            <BoldItem label="Account & purchase data">
              Name, business email address, company name, billing details, and
              Freshworks domain when you purchase or trial an Application.
            </BoldItem>
            <BoldItem label="Support communications">
              The content of emails and messages you send to us, including any
              attachments.
            </BoldItem>
            <BoldItem label="Form submissions">
              Any data you voluntarily enter through forms on our Website.
            </BoldItem>
          </div>
        </SubSection>

        <SubSection title="2.2 Data collected automatically">
          <div className="space-y-2">
            <BoldItem label="Log & technical data">
              IP address, browser type and version, operating system, referring
              URL, pages visited, date and time of access, and crash/error
              reports.
            </BoldItem>
            <BoldItem label="Usage data">
              Feature interactions, session duration, and in-app events —
              collected in aggregated or pseudonymised form to improve the
              Application.
            </BoldItem>
            <BoldItem label="Cookies and similar technologies">
              See Section 7 below.
            </BoldItem>
          </div>
        </SubSection>

        <SubSection title="2.3 Data we do NOT collect">
          <p>
            We do <span className="text-ink font-medium">not</span> passively or
            automatically read your Freshdesk or Freshservice ticket data. We
            access only the specific fields that you explicitly configure the
            Application to read or write, and only to the extent necessary to
            provide the Application's functionality. We never collect Sensitive
            Personal Data unless you deliberately submit it to us (e.g., in a
            support email), in which case we use it only to resolve your query.
          </p>
        </SubSection>
      </Section>

      <Section title="3. Legal Basis for Processing">
        <p>
          Where the GDPR or equivalent legislation applies, we rely on the
          following lawful bases:
        </p>
        <div className="space-y-2 mt-1">
          <BoldItem label="Contract performance (Art. 6(1)(b) GDPR)">
            Processing necessary to provide the Application you purchased.
          </BoldItem>
          <BoldItem label="Legitimate interests (Art. 6(1)(f) GDPR)">
            Security monitoring, fraud prevention, improving the Application,
            and responding to support requests — where our interests are not
            overridden by your rights.
          </BoldItem>
          <BoldItem label="Legal obligation (Art. 6(1)(c) GDPR)">
            Compliance with applicable law, court orders, or government
            authority requests.
          </BoldItem>
          <BoldItem label="Consent (Art. 6(1)(a) GDPR / DPDP Act s.6)">
            Marketing communications and any processing not covered by the bases
            above. You may withdraw consent at any time without affecting the
            lawfulness of prior processing.
          </BoldItem>
        </div>
        <p className="mt-2">
          Under the DPDP Act, we process your Personal Data on the basis of{" "}
          <span className="text-ink font-medium">consent</span> and/or{" "}
          <span className="text-ink font-medium">legitimate uses</span> as
          defined under the Act (e.g., compliance with applicable law,
          employment-related processing, or performance of a contract).
        </p>
      </Section>

      <Section title="4. How We Use Your Data">
        <div className="space-y-2">
          <BoldItem label="(a) Application delivery">
            To install, operate, and support the Application you have purchased.
          </BoldItem>
          <BoldItem label="(b) Account management">
            To manage billing, licensing, and your relationship with us.
          </BoldItem>
          <BoldItem label="(c) Communications">
            To respond to your support requests, send service-critical notices
            (e.g., downtime, security alerts), and — with your consent — product
            updates and marketing emails. You may opt out of marketing at any
            time by emailing <EmailLink /> or clicking "unsubscribe" in any
            email.
          </BoldItem>
          <BoldItem label="(d) Security & fraud prevention">
            To detect, investigate, and prevent unauthorised access, abuse, or
            illegal activity.
          </BoldItem>
          <BoldItem label="(e) Legal compliance">
            To satisfy obligations under applicable law, legal process, or
            requests from government authorities.
          </BoldItem>
          <BoldItem label="(f) Product improvement">
            To analyse aggregated or pseudonymised usage data to improve
            features, fix bugs, and develop new functionality.
          </BoldItem>
          <BoldItem label="(g) Rights protection">
            To protect the rights, property, and safety of Brainz-Dev, our
            users, or the public.
          </BoldItem>
        </div>
        <p className="mt-2">
          If we need to use your Personal Data for a purpose materially
          different from those listed above, we will obtain your prior consent.
        </p>
      </Section>

      <Section title="5. Sharing and Disclosure of Personal Data">
        <p>
          We do{" "}
          <span className="text-ink font-medium">not sell, rent, or trade</span>{" "}
          your Personal Data to any third party. We may share your Personal Data
          in the following limited circumstances:
        </p>
        <div className="space-y-2 mt-1">
          <BoldItem label="Data Processors">
            Trusted vendors who process data on our behalf (e.g., cloud
            infrastructure, email delivery, analytics) under written contracts
            that require them to maintain adequate data protection standards
            consistent with applicable law including the GDPR.
          </BoldItem>
          <BoldItem label="Complementary service providers">
            Third parties whose services are directly complementary to the
            Application, and only with your prior consent or on your explicit
            instruction.
          </BoldItem>
          <BoldItem label="Legal requirements">
            Where disclosure is required by law, court order, or a competent
            government authority, or where we believe disclosure is necessary to
            protect the safety of any person.
          </BoldItem>
          <BoldItem label="Business transfers">
            In connection with a merger, acquisition, or sale of all or
            substantially all of our assets, provided the receiving party agrees
            to treat your Personal Data in accordance with this Policy.
          </BoldItem>
          <BoldItem label="Professional advisers">
            Lawyers, accountants, and insurers, subject to confidentiality
            obligations.
          </BoldItem>
        </div>
      </Section>

      <Section title="6. International Data Transfers">
        <p>
          Brainz-Dev is based in India. We may process or cause your Personal
          Data to be processed on servers located in the{" "}
          <span className="text-ink font-medium">United States of America</span>{" "}
          and other countries. These countries may have data protection laws
          that are different from — and in some cases less protective than — the
          laws of your country.
        </p>
        <p>
          Where we transfer Personal Data from the European Economic Area (EEA),
          the United Kingdom, or Switzerland to a country not deemed adequate by
          the European Commission, we implement appropriate safeguards,
          including Standard Contractual Clauses (SCCs) approved by the European
          Commission and/or other legally recognised transfer mechanisms under
          applicable data protection law.
        </p>
        <p>
          By using the Application, you acknowledge and consent to the transfer
          and processing of your Personal Data in these locations.
        </p>
      </Section>

      <Section title="7. Cookies and Tracking Technologies">
        <p>
          Our Website may use cookies, pixel tags, web beacons, and similar
          technologies. These may be:
        </p>
        <div className="space-y-2 mt-1">
          <BoldItem label="Strictly necessary cookies">
            Required for the Website to function; cannot be disabled.
          </BoldItem>
          <BoldItem label="Analytics cookies">
            Help us understand how visitors use the Website (e.g., pages
            visited, time on site). Collected in aggregated, non-personally
            identifiable form.
          </BoldItem>
          <BoldItem label="Advertising cookies">
            Used by third parties to measure ad performance and deliver relevant
            advertisements.
          </BoldItem>
        </div>
        <p className="mt-2">
          You can control cookies through your browser settings. Disabling
          certain cookies may affect Website functionality. Third parties that
          place advertising cookies on our Website are responsible for their own
          privacy practices; please review their respective privacy policies.
        </p>
      </Section>

      <Section title="8. Data Retention">
        <p>
          We retain Personal Data only for as long as necessary for the purposes
          set out in this Policy or as required by law. Our standard retention
          periods are:
        </p>
        <div className="space-y-2 mt-1">
          <BoldItem label="Account & transaction data">
            For the duration of the active subscription plus 7 years, to comply
            with applicable tax and accounting laws.
          </BoldItem>
          <BoldItem label="Support communications">
            3 years from the date the support request is closed.
          </BoldItem>
          <BoldItem label="Server logs">
            90 days, after which they are deleted or anonymised.
          </BoldItem>
          <BoldItem label="Marketing consent records">
            Until consent is withdrawn plus 3 years for evidentiary purposes.
          </BoldItem>
        </div>
        <p className="mt-2">
          When your account is terminated, we will promptly delete or anonymise
          your Personal Data, except where retention is required to satisfy a
          legal obligation or to resolve a dispute. Residual copies may take a
          period of time to be purged from active servers and may remain in
          encrypted backup systems during the applicable backup retention window
          before being overwritten.
        </p>
      </Section>

      <Section title="9. Your Rights">
        <p>
          Subject to applicable law, you have the following rights regarding
          your Personal Data. To exercise any right, email <EmailLink /> with
          sufficient detail to identify yourself and your request. We will
          respond within 30 days (or a shorter period where required by law). We
          will not charge a fee unless the request is manifestly unfounded or
          excessive.
        </p>
        <div className="space-y-2 mt-2">
          <BoldItem label="Right of access">
            Obtain a copy of the Personal Data we hold about you, including
            information on how it is used, in a structured, commonly used,
            machine-readable format.
          </BoldItem>
          <BoldItem label="Right to rectification / correction">
            Request correction of inaccurate or incomplete Personal Data.
          </BoldItem>
          <BoldItem label='Right to erasure ("right to be forgotten")'>
            Request deletion of your Personal Data where it is no longer
            necessary for the purpose for which it was collected, where consent
            has been withdrawn, or where processing is unlawful — subject to our
            right to retain data required by law.
          </BoldItem>
          <BoldItem label="Right to restriction of processing">
            Request that we limit processing of your Personal Data in certain
            circumstances (e.g., while accuracy is contested).
          </BoldItem>
          <BoldItem label="Right to data portability">
            Receive your Personal Data in a structured, machine-readable format
            and transmit it to another controller.
          </BoldItem>
          <BoldItem label="Right to object">
            Object to processing based on legitimate interests, including
            profiling for direct marketing purposes.
          </BoldItem>
          <BoldItem label="Right to withdraw consent">
            Where processing is based on consent, withdraw that consent at any
            time without affecting the lawfulness of prior processing.
          </BoldItem>
          <BoldItem label="Right not to be subject to automated decision-making">
            We do not make decisions about you solely through automated means
            that produce legal or similarly significant effects.
          </BoldItem>
          <BoldItem label="Right to nominate (DPDP Act)">
            Nominate another individual to exercise your rights on your behalf
            in the event of your death or incapacity, in accordance with the
            DPDP Act.
          </BoldItem>
          <BoldItem label="Right to lodge a complaint">
            Lodge a complaint with the Data Protection Board of India (under the
            DPDP Act) or the supervisory authority in your jurisdiction (e.g.,
            the ICO in the UK, or a relevant EU DPA) if you believe we have
            infringed your rights.
          </BoldItem>
        </div>
      </Section>

      <Section title="10. Children's Privacy">
        <p>
          Our Applications are designed for business use and are not directed at
          children. We do not knowingly collect Personal Data from individuals
          under the age of 18 (or under 13 where a lower threshold applies under
          local law). If you are a parent or guardian and believe your child has
          provided us with Personal Data, please contact us immediately at{" "}
          <EmailLink /> and we will delete such data promptly.
        </p>
      </Section>

      <Section title="11. Information Security">
        <p>
          We implement and maintain appropriate technical and organisational
          security measures to protect your Personal Data against unauthorised
          access, accidental loss, destruction, or disclosure. These measures
          include, but are not limited to:
        </p>
        <BulletList
          items={[
            "Encryption of data in transit (TLS 1.2+) and at rest (AES-256 or equivalent);",
            "Access controls based on the principle of least privilege;",
            "Regular internal reviews of data collection, storage, and processing practices;",
            "Contractual requirements imposed on all Data Processors to maintain adequate security;",
            "Physical security measures at our data centre facilities.",
          ]}
        />
        <p className="mt-2">
          We do not warrant that these measures will prevent every possible
          security incident. We disclaim all liability for unauthorised access,
          alteration, disclosure, or destruction of data that is outside our
          reasonable control.
        </p>
      </Section>

      <Section title="12. Data Breach Notification">
        <p>In the event of a personal data breach, we will:</p>
        <BulletList
          items={[
            "Notify the relevant supervisory authority (e.g., the Data Protection Board of India, or EU/UK DPA as applicable) without undue delay and, where feasible, within 72 hours of becoming aware of a breach that is likely to result in risk to individuals' rights and freedoms;",
            "Notify affected individuals directly without undue delay where the breach is likely to result in a high risk to their rights and freedoms; and",
            "Maintain an internal record of all breaches, including those not reported to a supervisory authority, along with the facts, effects, and remedial action taken.",
          ]}
        />
        <p className="mt-2">
          Breach notifications to individuals will be sent to the primary email
          address associated with your account and will describe the nature of
          the breach, the categories of data affected, the likely consequences,
          and the measures taken or proposed to address the breach.
        </p>
      </Section>

      <Section title="13. Third-Party Websites and Services">
        <p>
          Our Applications and Website may contain links to third-party
          websites, including the Freshworks Marketplace. This Policy applies
          only to Brainz-Dev's own Applications and Website. We do not exercise
          control over third-party sites and are not responsible for their
          content or privacy practices. We encourage you to review the privacy
          policies of any third-party sites you visit.
        </p>
      </Section>

      <Section title="14. Changes to this Privacy Policy">
        <p>
          We may update this Policy from time to time. When we make material
          changes, we will:
        </p>
        <BulletList
          items={[
            'Update the "Effective date" at the top of this page;',
            "Post the updated Policy on our Website; and",
            "Where required by law or where changes are significant, notify you by email or through a prominent notice in the Application before the changes take effect.",
          ]}
        />
        <p className="mt-2">
          Your continued use of the Application after the effective date of an
          updated Policy constitutes your acceptance of that Policy. If you do
          not agree with the changes, you must stop using the Application before
          the effective date.
        </p>
      </Section>

      <Section title="15. Grievance Officer">
        <p>
          In accordance with the Information Technology Act, 2000 (as amended)
          and the Digital Personal Data Protection Act, 2023, Brainz-Dev has
          designated a Grievance Officer to address complaints and questions
          relating to this Policy:
        </p>
        <div className="space-y-2 mt-2">
          <BoldItem label="Name">Grievance Officer, Brainz-Dev</BoldItem>
          <BoldItem label="Email">
            <EmailLink />
          </BoldItem>
          <BoldItem label="Subject line">
            "Privacy Grievance – [Your Name]"
          </BoldItem>
        </div>
        <p className="mt-2">
          The Grievance Officer will acknowledge your complaint within 48 hours
          and endeavour to resolve it within 30 days of receipt. If you are not
          satisfied with the resolution, you may escalate your complaint to the
          Data Protection Board of India or the supervisory authority in your
          jurisdiction.
        </p>
      </Section>

      <Section title="16. Governing Law and Jurisdiction">
        <p>
          This Policy is governed by and construed in accordance with the laws
          of India. Any dispute arising out of or in connection with this Policy
          that cannot be resolved through the Grievance Officer process shall be
          subject to the exclusive jurisdiction of the courts of competent
          jurisdiction in India, without prejudice to your right to seek relief
          before a supervisory authority in your jurisdiction.
        </p>
      </Section>

      <Section title="17. Contact Us">
        <p>
          If you have any questions, concerns, or requests relating to this
          Policy or the processing of your Personal Data, please contact us:
        </p>
        <div className="space-y-2 mt-2">
          <BoldItem label="Email">
            <EmailLink />
          </BoldItem>
          <BoldItem label="Website">
            {" "}
            <a
              href="https://brainz-dev.com/#contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://brainz-dev.com/#contact
            </a>
          </BoldItem>
        </div>
        <p className="mt-2">
          We will always try to resolve your concern. However, if you remain
          dissatisfied, you have the right to lodge a complaint with the Data
          Protection Board of India or any other competent supervisory
          authority.
        </p>
      </Section>
    </div>
  );
}

export default PrivacyPolicy;
