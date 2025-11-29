import { LegalLayout } from "@/components/legal/legal-layout"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Header />
      <LegalLayout currentPage="terms">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-gray-400 mb-2">Last updated: November 26, 2025</p>
        <p className="text-gray-400 mb-8">Effective Date: November 26, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By accessing or using Altarflow ("Service"), operated by AU Sigma LLC ("Company," "we," "us," or "our"),
              you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms,
              you may not access the Service.
            </p>
            <p className="text-gray-300 leading-relaxed mb-2">Contact Information:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>Company: AU Sigma LLC</li>
              <li>
                Email:{" "}
                <a href="mailto:hola@altarflow.com" className="text-[#5B9BD5] hover:underline">
                  hola@altarflow.com
                </a>
              </li>
              <li>Address: San Francisco, CA</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Altarflow is a Software-as-a-Service (SaaS) platform designed specifically for churches and religious
              organizations to manage:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>Expenses and financial tracking</li>
              <li>Donation processing and management</li>
              <li>Member management and communication</li>
              <li>Newsletter creation and distribution</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Eligibility and Account Requirements</h2>
            <h3 className="text-xl font-semibold text-white mb-3">User Requirements</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>You must be at least 18 years of age</li>
              <li>You must represent a registered nonprofit organization or business entity</li>
              <li>You must be located in the United States or U.S. territories</li>
              <li>You must provide accurate and complete registration information</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Stripe Connect Requirement</h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              To access donation and banking functionality, your organization must:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>Successfully complete Stripe Connect account verification</li>
              <li>Meet Stripe's requirements for nonprofit organizations</li>
              <li>Maintain good standing with Stripe's terms of service</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Without Stripe Connect approval, donation and banking features will be unavailable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Account Registration and Access</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Invitation-Only Access</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>Currently, Altarflow operates on an invitation-only basis</li>
              <li>New invitations default to a free tier with limited functionality</li>
              <li>You may upgrade or downgrade your subscription at any time through your account dashboard</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Account Security</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You agree to notify us immediately of any unauthorized use of your account</li>
              <li>You are responsible for all activities that occur under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Subscription Plans and Pricing</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Current Pricing Structure</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>Monthly Plan: $99 per month</li>
              <li>Annual Plan: $99 per month, billed annually with 30% discount</li>
              <li>Free Tier: Limited functionality, available during invitation-only period</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Founding Church Pricing</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>The first 30 churches receive grandfathered pricing protection</li>
              <li>Founding church pricing will remain unchanged even if general pricing increases</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Price Changes</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>We reserve the right to modify pricing for new customers</li>
              <li>Existing customers will receive 30 days' notice of any price changes</li>
              <li>Founding churches maintain their original pricing structure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Billing</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>Monthly plans are billed monthly in advance</li>
              <li>Annual plans are billed annually in advance</li>
              <li>All payments are processed through Stripe</li>
              <li>Billing begins when you upgrade from the free tier</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Payment Methods</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>We accept major credit cards through Stripe</li>
              <li>Payment information is stored and processed by Stripe, not by us</li>
              <li>You authorize us to charge your selected payment method</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Failed Payments</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>If payment fails, your account may be suspended after a grace period</li>
              <li>We will attempt to contact you before suspension</li>
              <li>Service will be restored upon successful payment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Refund and Cancellation Policy</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Cancellations</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>You may cancel your subscription at any time through your account dashboard</li>
              <li>Cancellations take effect at the end of your current billing period</li>
              <li>You retain access to paid features until the end of your billing period</li>
              <li>No partial refunds for unused time in the current billing period</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Refund Policy</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>Monthly subscriptions: No refunds (standard SaaS practice)</li>
              <li>Annual subscriptions: Pro-rated refund available if cancelled within 30 days of initial purchase</li>
              <li>After 30 days: No refunds for annual subscriptions</li>
              <li>
                Service disruptions: Refunds may be considered on a case-by-case basis for significant service outages
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Account Deletion</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>Upon cancellation, your account will be downgraded to free tier</li>
              <li>Account data will be retained for 120 days for potential reactivation</li>
              <li>After 120 days, your data will be permanently deleted</li>
              <li>You may request immediate data deletion by contacting us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Content and Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Your Content</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>You retain ownership of all content you upload (photos, text, member data)</li>
              <li>You grant us a limited license to use your content solely to provide the Service</li>
              <li>You are responsible for ensuring you have rights to upload any content</li>
              <li>You agree not to upload content that violates any laws or rights of others</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Our Intellectual Property</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>Altarflow software, design, and content are owned by AU Sigma LLC</li>
              <li>You may not copy, modify, distribute, or reverse engineer our Service</li>
              <li>All trademarks and service marks are the property of their respective owners</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">DMCA Compliance</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>We respond to valid DMCA takedown notices</li>
              <li>
                Contact{" "}
                <a href="mailto:hola@altarflow.com" className="text-[#5B9BD5] hover:underline">
                  hola@altarflow.com
                </a>{" "}
                for copyright concerns
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Donation Processing and Financial Services</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Our Role vs. Stripe's Role</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>Altarflow's Role: We provide the platform interface and donation management tools</li>
              <li>Stripe's Role: Stripe processes all payments, handles PCI compliance, and manages fund transfers</li>
              <li>
                Your Role: You are responsible for tax reporting, compliance with donation regulations, and donor
                communications
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Financial Disclaimers</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>We are not a financial institution or payment processor</li>
              <li>All financial transactions are processed by Stripe under their terms</li>
              <li>We do not guarantee the availability or accuracy of Stripe services</li>
              <li>You are responsible for compliance with all applicable tax and donation regulations</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Donation Data</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>We track donation amounts and fees for reporting purposes</li>
              <li>We do not store credit card information</li>
              <li>Donor payment information is handled exclusively by Stripe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Prohibited Uses</h2>
            <p className="text-gray-300 leading-relaxed mb-2">You agree not to use the Service to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Upload malicious code or viruses</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Service Availability and Modifications</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Service Availability</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>We strive for 99.9% uptime but do not guarantee uninterrupted service</li>
              <li>Scheduled maintenance will be announced in advance when possible</li>
              <li>We are not liable for service interruptions beyond our reasonable control</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Service Modifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>We may modify or discontinue features with reasonable notice</li>
              <li>We will not remove core functionality without providing alternatives or notice</li>
              <li>Some modifications may require updates to these Terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-2">Our Service integrates with third-party providers:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>Stripe: Payment processing (subject to Stripe's terms)</li>
              <li>Clerk: Authentication services</li>
              <li>Others: Various service providers as listed in our Privacy Policy</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              You acknowledge that these third parties have their own terms and privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-4 font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>Service Provided "AS IS": We provide the Service without warranties of any kind</li>
              <li>
                Limited Liability: Our liability is limited to the amount you paid for the Service in the 12 months
                prior to the claim
              </li>
              <li>Excluded Damages: We are not liable for indirect, incidental, or consequential damages</li>
              <li>
                Force Majeure: We are not liable for delays or failures due to circumstances beyond our reasonable
                control
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed mb-2">
              You agree to indemnify and hold harmless AU Sigma LLC from any claims, losses, or damages arising from:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any laws or third-party rights</li>
              <li>Content you upload or submit</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Governing Law and Disputes</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Governing Law</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              These Terms are governed by the laws of the State of California, without regard to conflict of law
              principles.
            </p>
            <h3 className="text-xl font-semibold text-white mb-3">Dispute Resolution</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>Informal Resolution: We encourage contacting us first to resolve disputes</li>
              <li>
                Binding Arbitration: Any unresolved disputes will be settled by binding arbitration in San Francisco
                County, California
              </li>
              <li>Class Action Waiver: You agree to resolve disputes individually, not as part of a class action</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Exceptions</h3>
            <p className="text-gray-300 leading-relaxed mb-2">The following may be resolved in court:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>Small claims court matters</li>
              <li>Intellectual property disputes</li>
              <li>Emergency injunctive relief</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Termination</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Termination by You</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>You may terminate your account at any time through your account settings</li>
              <li>Termination follows the cancellation policy outlined in Section 7</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Termination by Us</h3>
            <p className="text-gray-300 leading-relaxed mb-2">We may terminate or suspend your account if you:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>Violate these Terms</li>
              <li>Fail to pay subscription fees</li>
              <li>Engage in fraudulent or illegal activities</li>
              <li>Pose a security risk to our Service or other users</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Effect of Termination</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>Your right to use the Service ends immediately</li>
              <li>Data retention follows our Privacy Policy</li>
              <li>Termination does not relieve you of payment obligations incurred before termination</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">17. General Provisions</h2>
            <h3 className="text-xl font-semibold text-white mb-3">Entire Agreement</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              These Terms, along with our Privacy Policy and Cookie Policy, constitute the entire agreement between you
              and AU Sigma LLC.
            </p>
            <h3 className="text-xl font-semibold text-white mb-3">Severability</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              If any provision of these Terms is found unenforceable, the remaining provisions will remain in full
              force.
            </p>
            <h3 className="text-xl font-semibold text-white mb-3">Waiver</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our failure to enforce any provision does not constitute a waiver of that provision.
            </p>
            <h3 className="text-xl font-semibold text-white mb-3">Updates to Terms</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>We may update these Terms from time to time</li>
              <li>Material changes will be communicated via email or prominent notice</li>
              <li>Continued use of the Service constitutes acceptance of updated Terms</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mb-3">Assignment</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              <li>You may not assign these Terms without our written consent</li>
              <li>We may assign these Terms in connection with a business transfer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">18. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-2">For questions about these Terms of Service:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mb-4">
              <li>
                Email:{" "}
                <a href="mailto:hola@altarflow.com" className="text-[#5B9BD5] hover:underline">
                  hola@altarflow.com
                </a>
              </li>
              <li>Subject Line: "Terms of Service Inquiry"</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-2">AU Sigma LLC</p>
            <p className="text-gray-300 leading-relaxed mb-8">San Francisco, CA</p>
            <p className="text-gray-300 leading-relaxed italic border-t border-white/20 pt-6">
              By using Altarflow, you acknowledge that you have read, understood, and agree to be bound by these Terms
              of Service.
            </p>
          </section>
        </div>
      </LegalLayout>
      <Footer />
    </>
  )
}
