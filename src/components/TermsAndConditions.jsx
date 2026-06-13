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

const ClauseItem = ({ id, children }) => (
  <div className="flex items-start gap-2.5 mt-2">
    <span className="font-poppins text-[13px] text-ink-3 font-medium flex-shrink-0 mt-0.5">
      {id}
    </span>
    <span>{children}</span>
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

function TermsAndConditions() {
  return (
    <div className="font-poppins">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-slate-200">
        <h1 className="font-poppins font-bold text-[26px] sm:text-[30px] text-ink mb-1">
          Terms &amp; <span className="text-gradient">Conditions</span>
        </h1>
        <p className="text-[13px] text-ink-3">Effective Date: 25 May 2026 · Version 1.0</p>
      </div>

      {/* Preamble */}
      <div className="mb-8 p-4 rounded-xl bg-slate-50 border border-slate-200">
        <h2 className="font-poppins font-semibold text-[15px] text-ink mb-2">Preamble</h2>
        <p className="text-[14px] text-ink-2 leading-relaxed">
          <span className="text-gradient font-semibold">Brainz-Dev</span> ("we," "us," or
          "our") operates online applications that complement user engagement with Freshdesk
          and Freshservice features. These Terms of Service govern use of any Application and
          form a binding contractual agreement between you and Brainz-Dev.
        </p>
      </div>

      {/* Recitals */}
      <div className="mb-8">
        <h2 className="font-poppins font-semibold text-[15px] text-ink mb-3">Recitals</h2>
        <div className="space-y-2 text-[14px] text-ink-2 leading-relaxed pl-3">
          <ClauseItem id="A.">
            These Terms of Service govern use of any Application and form a binding contractual
            agreement between you, other Users, and Brainz-Dev.
          </ClauseItem>
          <ClauseItem id="B.">
            These Terms are significant and warrant careful review. Contact <EmailLink /> with
            questions before using the Application.
          </ClauseItem>
          <ClauseItem id="C.">
            By using the Application, you acknowledge and agree you have read and understood
            these Terms and consent to be bound by them. Discontinue use if you disagree.
          </ClauseItem>
          <ClauseItem id="D.">
            These Terms constitute an electronic record under the Information Technology Act,
            2000 (India) and require no physical or digital signature for validity.
          </ClauseItem>
        </div>
      </div>

      <Section title="1. Definitions">
        <div className="space-y-2">
          <BoldItem label="1.1 Application">
            Any Brainz-Dev application acquired through{" "}
            <span className="text-ink font-medium">https://www.freshworks.com/apps</span>
          </BoldItem>
          <BoldItem label="1.2 Confidential Information">
            Information designated or reasonably considered confidential, marked as such, or
            of a sensitive nature.
          </BoldItem>
          <BoldItem label="1.3 Content">
            Anything uploaded or transmitted through the Application; your Content refers to
            material you introduce.
          </BoldItem>
          <BoldItem label="1.4 Data Processor">
            Brainz-Dev or any third party processing your personal information.
          </BoldItem>
          <BoldItem label="1.5 Feedback">
            Suggestions, ideas, enhancement requests, recommendations, corrections, or other
            feedback regarding the Application.
          </BoldItem>
          <BoldItem label="1.6 Force Majeure Event">
            Events beyond reasonable control including acts of God, natural disasters,
            pandemics, epidemics, war, terrorism, riots, civil commotion,
            internet/telecommunications outages, governmental action, or third-party
            infrastructure failure.
          </BoldItem>
          <BoldItem label="1.7 Intellectual Property">
            All intellectual property rights (registered and unregistered copyright, designs,
            trademarks, patents) in technology, trade secrets, user details, software,
            programs, inventions, designs, and works belonging to Brainz-Dev.
          </BoldItem>
          <BoldItem label="1.8 Membership Data">
            Information you provide to access or use the Application.
          </BoldItem>
          <BoldItem label="1.9 Third Party">
            Any entity other than Brainz-Dev, its subsidiaries, or you.
          </BoldItem>
          <BoldItem label="1.10 User">
            Any person purchasing and accessing the Application, regardless of identification
            status.
          </BoldItem>
          <BoldItem label="1.11 You">
            A User or any person accessing the Application.
          </BoldItem>
          <BoldItem label="1.12 Freshworks Website">
            The website located at www.freshworks.com
          </BoldItem>
        </div>
      </Section>

      <Section title="2. Eligibility">
        <ClauseItem id="2.1">
          You must be at least 18 years old with full legal capacity to enter binding contracts
          in your jurisdiction. Using the Application constitutes representation that you meet
          this requirement.
        </ClauseItem>
        <ClauseItem id="2.2">
          If using the Application on behalf of a company, organisation, or legal entity, you
          represent and warrant authority to bind that entity to these Terms. "You" and "your"
          refer to that entity in such cases. Discontinue use if you lack such authority.
        </ClauseItem>
        <ClauseItem id="2.3">
          The Application is unavailable to Users previously suspended or removed by
          Brainz-Dev.
        </ClauseItem>
      </Section>

      <Section title="3. Use of the Application">
        <ClauseItem id="3.1">
          Brainz-Dev grants you a non-exclusive, non-transferable, revocable, limited license
          to use the Application strictly according to these Terms and solely for internal
          business purposes.
        </ClauseItem>
        <ClauseItem id="3.2">
          The Application may contain links to other websites and Third-Party Content.
          Brainz-Dev does not endorse, sponsor, or approve user-generated content or linked
          website content. Brainz-Dev expressly disclaims liability for any Content
          transmitted through the Application or by other means.
        </ClauseItem>
        <ClauseItem id="3.3">
          You acknowledge the Application may not operate continuously and may be unavailable
          periodically, including for maintenance.
        </ClauseItem>
        <p className="mt-2 text-ink font-medium">3.4 You must not directly or indirectly:</p>
        <div className="space-y-1.5 mt-1 pl-2">
          <ClauseItem id="(a)">
            Create any service, software, or documentation performing substantially identical
            functionality.
          </ClauseItem>
          <ClauseItem id="(b)">
            Disassemble, decompile, reverse engineer, or discover source code, algorithms, or
            trade secrets.
          </ClauseItem>
          <ClauseItem id="(c)">
            Encumber, sublicense, transfer, distribute, rent, or lease the Application to
            third parties.
          </ClauseItem>
          <ClauseItem id="(d)">
            Adapt, combine, create derivative works, or otherwise modify the Application.
          </ClauseItem>
          <ClauseItem id="(e)">
            Circumvent, disable, or interfere with security features or content usage
            restrictions.
          </ClauseItem>
          <ClauseItem id="(f)">
            Use automated tools, bots, scrapers, or scripts to access the Application in
            ways exceeding human-reasonable request rates.
          </ClauseItem>
        </div>
        <p className="mt-3 text-ink font-medium">3.5 Account Security:</p>
        <p>
          You are responsible for maintaining credential confidentiality and all account
          activity. Notify <EmailLink /> immediately upon suspecting unauthorized access.
          Brainz-Dev is not liable for losses from credential negligence.
        </p>
      </Section>

      <Section title="4. User Conduct">
        <p className="text-ink font-medium">4.1 By accepting these Terms, you represent:</p>
        <div className="space-y-1.5 mt-1 pl-2">
          <ClauseItem id="(a)">You have capacity to accept these Terms.</ClauseItem>
          <ClauseItem id="(b)">
            You will provide, maintain, and promptly update Membership Data ensuring accuracy,
            currency, and completeness.
          </ClauseItem>
        </div>
        <ClauseItem id="4.2">
          You must not use the Application for illegal, immoral, or unethical purposes.
        </ClauseItem>
        <p className="mt-2 text-ink font-medium">
          4.3 You must not knowingly directly or indirectly:
        </p>
        <div className="space-y-1.5 mt-1 pl-2">
          <ClauseItem id="(a)">
            Interfere with proper Application operation or conducted activities.
          </ClauseItem>
          <ClauseItem id="(b)">
            Bypass privacy settings or access-prevention measures.
          </ClauseItem>
          <ClauseItem id="(c)">
            Operate mail lists, Listservs, autoresponders, or spam.
          </ClauseItem>
        </div>
        <p className="mt-2 text-ink font-medium">4.4 You must not transmit Content that:</p>
        <div className="space-y-1.5 mt-1 pl-2">
          <ClauseItem id="(a)">
            Is inaccurate, harmful, obscene, defamatory, racist, threatening, violent,
            offensive, abusive, vulgar, profane, indecent, unlawful, or harassing.
          </ClauseItem>
          <ClauseItem id="(b)">Exploits another person.</ClauseItem>
          <ClauseItem id="(c)">Includes unauthorised personal information disclosure.</ClauseItem>
          <ClauseItem id="(d)">Violates anyone's intellectual property rights.</ClauseItem>
          <ClauseItem id="(e)">
            Contains viruses or code designed to interrupt, destroy, or limit functionality.
          </ClauseItem>
        </div>
        <ClauseItem id="4.5">
          You are solely responsible for Content and all activities during Application use.
        </ClauseItem>
        <ClauseItem id="4.6">
          Misuse violating these Terms may result in Brainz-Dev restricting, suspending, or
          disabling access without prior notice and without liability.
        </ClauseItem>
      </Section>

      <Section title="5. Your Content">
        <ClauseItem id="5.1">
          Brainz-Dev uses your Content only to provide Application access or comply with
          applicable law, legal requirements, police investigations, or government requests.
        </ClauseItem>
        <ClauseItem id="5.2">
          Brainz-Dev records and stores your Content to provide and improve Application use.
          Specifically:
        </ClauseItem>
        <div className="space-y-1.5 mt-1 pl-2">
          <ClauseItem id="(a)">
            Brainz-Dev will not store data beyond the requested field and associated Freshdesk
            ticket, nor passively or automatically read Freshdesk data.
          </ClauseItem>
          <ClauseItem id="(b)">
            Brainz-Dev will not write Content to Freshdesk except as necessary for Application
            provision.
          </ClauseItem>
        </div>
        <ClauseItem id="5.3">
          Brainz-Dev reserves the right to disclose information as necessary to satisfy
          applicable law, legal requirements, police investigations, or government requests.
        </ClauseItem>
        <ClauseItem id="5.4">
          Brainz-Dev promptly deletes all Content copies following the earlier of: (a) when no
          longer needed for Application provision, or (b) upon your written request.
        </ClauseItem>
        <ClauseItem id="5.5">
          You grant Brainz-Dev a worldwide, royalty-free, non-exclusive, limited license to
          host, store, process, and display your Content solely as necessary for Application
          provision. This license terminates upon Content deletion per clause 5.4.
        </ClauseItem>
        <ClauseItem id="5.6">
          Review our{" "}
          <a href="/privacy" className="text-brand hover:text-brand/80 transition-colors underline underline-offset-2">
            Privacy Policy
          </a>{" "}
          for additional information.
        </ClauseItem>
      </Section>

      <Section title="6. Feedback">
        <ClauseItem id="6.1">
          Providing Feedback grants Brainz-Dev a perpetual, irrevocable, worldwide,
          royalty-free, fully paid-up license to use, reproduce, modify, create derivative
          works, and incorporate Feedback into products and services without compensation,
          attribution, or confidentiality obligations. You represent and warrant you have
          rights to grant this license.
        </ClauseItem>
      </Section>

      <Section title="7. Payment">
        <ClauseItem id="7.1">
          If an Application requires payment, the purchase price is disclosed before access.
        </ClauseItem>
        <ClauseItem id="7.2">
          Freshworks exclusively handles payments. Direct billing disputes, payment processing
          issues, refund requests, or chargebacks to Freshworks. Brainz-Dev has no liability
          for payment processing errors, failed transactions, or refund requests.
        </ClauseItem>
        <ClauseItem id="7.3">
          All fees exclude applicable taxes. You are responsible for all taxes, duties, and
          levies from your purchase, except taxes on Brainz-Dev's net income.
        </ClauseItem>
      </Section>

      <Section title="8. Confidential Information">
        <ClauseItem id="8.1">
          You agree to maintain Confidential Information confidentiality and use or disclose
          it only as authorised by the owner.
        </ClauseItem>
        <ClauseItem id="8.2">
          Confidentiality obligations do not apply to information: (a) generally available in
          the public domain, except from Terms breach; (b) known prior to disclosure; or (c)
          required disclosure by applicable law or court order, provided you give prompt written
          notice and reasonably cooperate with protective order efforts.
        </ClauseItem>
        <ClauseItem id="8.3">
          These confidentiality obligations survive termination for 5 years.
        </ClauseItem>
      </Section>

      <Section title="9. Intellectual Property Rights">
        <ClauseItem id="9.1">
          These Terms do not transfer Intellectual Property rights. You acknowledge Brainz-Dev
          owns all Application Intellectual Property rights, including underlying software,
          code, algorithms, databases, trade secrets, documentation, user interface designs,
          and branding.
        </ClauseItem>
        <ClauseItem id="9.2">
          Express written permission from Brainz-Dev is required to reproduce any Application
          aspect or Brainz-Dev Intellectual Property.
        </ClauseItem>
        <ClauseItem id="9.3">
          All trademarks, service marks, logos, and trade names displayed in or through the
          Application are proprietary to Brainz-Dev or their owners. These Terms grant no
          license or rights.
        </ClauseItem>
        <p className="mt-2 text-ink font-medium">9.4 IP Infringement Notice:</p>
        <p>
          Notify <EmailLink /> if Application Content infringes your intellectual property
          rights. Include: (i) infringed work identification; (ii) allegedly infringing
          material identification and location; (iii) your contact details; (iv) good-faith
          belief statement and accuracy. Brainz-Dev investigates and takes appropriate action.
        </p>
      </Section>

      <Section title="10. Termination and Suspension">
        <ClauseItem id="10.1">
          These Terms continue until you withdraw consent or Terms variation/replacement, but
          Brainz-Dev may terminate at any time without notice at sole discretion.
        </ClauseItem>
        <ClauseItem id="10.2">
          Brainz-Dev may suspend or terminate any User without notice at sole discretion.
        </ClauseItem>
        <ClauseItem id="10.3">
          Brainz-Dev reserves the right to change or discontinue any Application feature or
          the entire Application at any time at sole discretion.
        </ClauseItem>
        <p className="mt-2 text-ink font-medium">10.4 Effect of Termination:</p>
        <p>Upon termination/expiry: (a) all granted licenses immediately cease; (b) you must
          stop using the Application; (c) Brainz-Dev processes your Content per clause 5.4.
          Termination does not affect accrued rights or obligations.</p>
        <p className="mt-2 text-ink font-medium">10.5 Survival:</p>
        <p>
          Clauses 1 (Definitions), 5.3 (Disclosure obligations), 6 (Feedback), 8 (Confidential
          Information), 9 (Intellectual Property), 11 (Limitation of Liability), 12 (Disclaimer
          of Warranties), 13 (Assumption of Risk), 14 (Indemnification), and 15 (General)
          survive termination/expiry.
        </p>
      </Section>

      <Section title="11. Limitation of Liability">
        <ClauseItem id="11.1">
          Brainz-Dev is not liable for any losses from Application use.
        </ClauseItem>
        <ClauseItem id="11.2">
          You are liable for any loss, damage, or injury to any party (including Brainz-Dev,
          Third Parties, and other Users) from your negligent acts/omissions and shall
          indemnify Brainz-Dev.
        </ClauseItem>
        <p className="mt-2 text-ink font-medium">11.3 Brainz-Dev is not liable for:</p>
        <div className="space-y-1.5 mt-1 pl-2">
          <ClauseItem id="(a)">
            Data loss, inaccuracy, damage, Application use interruption, or substitute
            technology/goods/services costs.
          </ClauseItem>
          <ClauseItem id="(b)">
            Indirect, punitive, incidental, reliance, special, exemplary, or consequential
            damages including business loss, revenue loss, profit loss, and goodwill loss.
          </ClauseItem>
        </div>
        <ClauseItem id="11.4">
          Brainz-Dev's aggregate liability from any legal claim connected to Application use
          is limited to the total amount you paid (if any) for the relevant Application in
          the 12 months preceding the claim.
        </ClauseItem>
        <p className="mt-2 text-ink font-medium">11.5 Force Majeure:</p>
        <p>
          Brainz-Dev is not in breach or liable for delays/failures from Force Majeure Events.
          Brainz-Dev promptly notifies you and uses reasonable efforts to resume performance.
        </p>
      </Section>

      <Section title="12. Disclaimer of Warranties">
        <p>
          The Application is provided "as is" and "as available" without warranties.
          Brainz-Dev makes no representations or warranties:
        </p>
        <div className="space-y-1.5 mt-1 pl-2">
          <ClauseItem id="(a)">
            That Application access is timely, secure, uninterrupted, or error-free.
          </ClauseItem>
          <ClauseItem id="(b)">
            That the Application is compatible with all Freshworks features or programs.
          </ClauseItem>
          <ClauseItem id="(c)">
            That Application defects will be corrected.
          </ClauseItem>
          <ClauseItem id="(d)">
            That disclosed information is accurate, current, complete, or useful.
          </ClauseItem>
          <ClauseItem id="(e)">
            That the Application or its server is virus-free or free from harmful components.
          </ClauseItem>
        </div>
        <p className="mt-2">
          To the maximum extent permitted by applicable law, Brainz-Dev expressly disclaims
          all express, implied, statutory, or other warranties, including merchantability,
          fitness for particular purpose, title, and non-infringement implied warranties.
        </p>
      </Section>

      <Section title="13. Assumption of Risk">
        <ClauseItem id="13.1">
          Using the Application, you assume all risks including online/offline User and
          Third-Party interactions, information reliance, and computer system damage/data loss
          risks.
        </ClauseItem>
      </Section>

      <Section title="14. Indemnification">
        <ClauseItem id="14.1">
          You agree to indemnify, defend, and hold harmless Brainz-Dev and its officers,
          directors, employees, agents, licensors, and suppliers from all claims, actions,
          liabilities, damages, costs, losses, and expenses (including reasonable legal costs)
          from: (a) your Application use/access; (b) Terms violations; (c) applicable law or
          third-party rights violations; (d) Content you submit, post, or transmit through
          the Application.
        </ClauseItem>
        <ClauseItem id="14.2">
          You are responsible for indemnifying Brainz-Dev against liability for all
          person/property loss, damage, or injury from you or your employees/agents, and all
          related claims, damages, costs, and expenses.
        </ClauseItem>
        <ClauseItem id="14.3">
          Brainz-Dev reserves the right to assume exclusive control of any indemnified matter
          at your expense. You agree to cooperate with claim defense. Do not settle claims
          without Brainz-Dev's prior written consent.
        </ClauseItem>
      </Section>

      <Section title="15. General">
        <ClauseItem id="15.1">
          These Terms prevail if anything in or associated with the Application is
          inconsistent.
        </ClauseItem>
        <ClauseItem id="15.2">
          Invalid or unenforceable provisions are read down or severed without affecting
          remaining provisions' validity or enforceability.
        </ClauseItem>
        <ClauseItem id="15.3">
          These Terms are governed by and construed according to the laws of India, without
          regard to conflict-of-law provisions.
        </ClauseItem>
        <p className="mt-2 text-ink font-medium">15.4 Dispute Resolution:</p>
        <p>
          Before formal legal proceedings, notify <EmailLink /> in writing and allow 30 days
          for resolution. If unresolved, parties attempt good-faith mediation before
          litigation. Nothing prevents urgent injunctive or equitable relief.
        </p>
        <ClauseItem id="15.5">
          Both parties irrevocably submit to the exclusive jurisdiction of the courts in India
          for dispute resolution.
        </ClauseItem>
        <ClauseItem id="15.6">
          Non-enforcement of any provision does not constitute waiver or affect subsequent
          enforcement rights.
        </ClauseItem>
        <p className="mt-2 text-ink font-medium">15.7 Assignment:</p>
        <p>
          You cannot assign, transfer, or delegate rights/obligations without written consent.
          Brainz-Dev may freely assign, including in merger/acquisition/asset sale contexts.
          Unauthorised assignments are void.
        </p>
        <ClauseItem id="15.8">
          Brainz-Dev provides required notices by emailing each User. Notice is deemed
          received 24 hours after sending unless delivery failure occurs. You consent to
          electronic notice receipt satisfying Information Technology Act, 2000 (India)
          written notice requirements.
        </ClauseItem>
        <ClauseItem id="15.9">
          Brainz-Dev may amend or vary these Terms at sole discretion with reasonable notice;
          varied Terms take immediate effect. Continued use constitutes acceptance.
          Disagreement requires discontinuation before variation effectiveness.
        </ClauseItem>
        <p className="mt-2 text-ink font-medium">15.10 Export Compliance:</p>
        <p>
          You comply with all export/import control laws and regulations. You represent you
          are not on prohibited/restricted party government lists and will not use the
          Application with prohibited activities.
        </p>
        <ClauseItem id="15.11">
          These Terms and the{" "}
          <a href="/privacy" className="text-brand hover:text-brand/80 transition-colors underline underline-offset-2">
            Privacy Policy
          </a>{" "}
          constitute the entire agreement, superseding prior versions and communications,
          whether oral/written or express/implied.
        </ClauseItem>
      </Section>
    </div>
  );
}

export default TermsAndConditions;
