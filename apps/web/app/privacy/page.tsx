import { LegalLayout } from "@/components/legal/legal-layout"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <LegalLayout currentPage="privacy">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 mb-2">Last updated: November 26, 2025</p>
        <p className="text-gray-400 mb-8">Effective Date: November 26, 2025</p>

        <div className="space-y-8 text-gray-300">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed mb-4">
              AU Sigma LLC ("we," "us," or "our") operates Altarflow, a church management platform ("Service"). This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
              Service.
            </p>
            <p className="font-semibold text-white mb-2">Contact Information:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Company: AU Sigma LLC</li>
              <li>Email: hola@altarflow.com</li>
              <li>Address: San Francisco, CA</li>
            </ul>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
              <p className="leading-relaxed mb-2">
                We collect the following personal information when you register and use our Service:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Full name (first and last name)</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Organization information (church name, nonprofit status)</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-3">Financial Information</h3>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-2">
                <li>Donation amounts and payout data</li>
                <li>Processing fees</li>
              </ul>
              <p className="leading-relaxed italic">
                Note: We do not store credit card information or billing addresses. All payment processing is handled
                securely by Stripe.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-3">Usage Information</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Account activity and feature usage</li>
                <li>Communication logs within the platform</li>
                <li>Error reports and performance data (via Sentry)</li>
                <li>Analytics data about how you use our Service (via PostHog)</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-3">Content You Upload</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Photos and images for newsletters</li>
                <li>Church member information you choose to store</li>
                <li>Communication content and records</li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-2">We use your information to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide and maintain our Service</li>
              <li>Process donations and manage payouts through Stripe</li>
              <li>Authenticate your account (via Clerk)</li>
              <li>Send service-related communications</li>
              <li>Provide customer support</li>
              <li>Improve our Service through analytics</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="leading-relaxed mb-4">We may share your information with:</p>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-3">Service Providers</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Stripe: Payment processing and Connect account management</li>
                <li>Clerk: User authentication and account management</li>
                <li>Supabase: Database hosting and management</li>
                <li>HubSpot: Customer relationship management</li>
                <li>Resend: Email delivery services</li>
                <li>Topol: Newsletter creation tools</li>
                <li>Sentry: Error monitoring and debugging</li>
                <li>PostHog: Analytics and user behavior insights</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-3">Legal Requirements</h3>
              <p className="leading-relaxed">
                We may disclose your information if required by law, legal process, or government request.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-3">Business Transfers</h3>
              <p className="leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of
                that transaction.
              </p>
            </div>

            <p className="leading-relaxed font-semibold text-white">
              We do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p className="leading-relaxed mb-2">
              We implement appropriate security measures to protect your information, including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Secure hosting infrastructure</li>
            </ul>
            <p className="leading-relaxed italic">
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Data Retention</h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <span className="font-semibold">Active accounts:</span> We retain your information while your account is
                active
              </li>
              <li>
                <span className="font-semibold">Deleted accounts:</span> We retain your information for 120 days after
                account deletion
              </li>
              <li>
                <span className="font-semibold">Legal compliance:</span> Some information may be retained longer if
                required by law
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Your Rights</h2>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-3">California Residents (CCPA)</h3>
              <p className="leading-relaxed mb-2">If you are a California resident, you have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Know what personal information we collect, use, and disclose</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of the sale of personal information (we do not sell information)</li>
                <li>Non-discrimination for exercising your rights</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-3">All Users</h3>
              <p className="leading-relaxed mb-2">You may:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access and update your account information</li>
                <li>Request deletion of your account</li>
                <li>Opt-out of marketing communications</li>
                <li>Contact us with privacy concerns</li>
              </ul>
            </div>

            <p className="leading-relaxed">
              To exercise these rights, contact us at{" "}
              <a href="mailto:hola@altarflow.com" className="text-[#5B9BD5] hover:underline">
                hola@altarflow.com
              </a>
              .
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Cookies and Tracking</h2>
            <p className="leading-relaxed mb-2">
              We use cookies and similar tracking technologies. Please see our Cookie Policy for detailed information
              about:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Types of cookies we use</li>
              <li>How to manage cookie preferences</li>
              <li>Third-party tracking (PostHog, Sentry)</li>
            </ul>
          </section>

          {/* Age Requirements */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Age Requirements</h2>
            <p className="leading-relaxed">
              Our Service is intended for users 18 years of age and older. We do not knowingly collect information from
              children under 18.
            </p>
          </section>

          {/* International Users */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. International Users</h2>
            <p className="leading-relaxed">
              Our Service is currently available only to users in the United States and U.S. territories. By using our
              Service, you consent to the transfer and processing of your information in the United States.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to This Policy</h2>
            <p className="leading-relaxed mb-2">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Posting the updated policy on our website</li>
              <li>Sending email notification to your registered email address</li>
            </ul>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Us</h2>
            <p className="leading-relaxed mb-2">If you have questions about this Privacy Policy, please contact us:</p>
            <ul className="list-none space-y-1 ml-4 mb-4">
              <li>
                Email:{" "}
                <a href="mailto:hola@altarflow.com" className="text-[#5B9BD5] hover:underline">
                  hola@altarflow.com
                </a>
              </li>
              <li>Subject Line: "Privacy Policy Inquiry"</li>
              <li>AU Sigma LLC</li>
              <li>San Francisco, CA</li>
            </ul>
            <p className="leading-relaxed italic font-semibold">
              By using Altarflow, you acknowledge that you have read, understood, and agree to this Privacy Policy.
            </p>
          </section>
        </div>
      </LegalLayout>
      <Footer />
    </>
  )
}
