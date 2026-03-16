import { Link } from "react-router";

export function TermsPage() {
  return (
    <div className="pt-24 pb-20 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl mb-4">
          Terms of{" "}
          <span className="bg-gradient-to-r from-[#A020F0] to-[#2FFFA3] bg-clip-text text-transparent">
            Service
          </span>
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Last updated: March 16, 2026
        </p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl mb-3 text-gray-900">1. Acceptance of Terms</h2>
            <p>
              By accessing and using <strong>celesticore.tech</strong> (the "Site"), you accept and agree to be
              bound by these Terms of Service and our{" "}
              <Link to="/privacy-policy" className="text-[#A020F0] hover:underline">
                Privacy Policy
              </Link>
              . If you do not agree to these terms, please do not use our Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-3 text-gray-900">2. Use of the Site</h2>
            <p>You agree to use the Site only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Violate any applicable local, national, or international law or regulation.</li>
              <li>Infringe on the rights of others, including intellectual property rights.</li>
              <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
              <li>Attempt to gain unauthorised access to any part of the Site or our systems.</li>
              <li>Interfere with the proper operation of the Site.</li>
              <li>Misrepresent your identity or affiliation with any person or organisation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-3 text-gray-900">3. Intellectual Property</h2>
            <p>
              All content on this Site — including text, graphics, logos, images, and software — is the property
              of CelestiCore Technologies or its content suppliers and is protected by applicable intellectual
              property laws. You may not reproduce, distribute, modify, or create derivative works from any
              content on this Site without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-3 text-gray-900">4. Third-Party Advertising</h2>
            <p>
              This Site displays advertisements served by third parties, including Google AdSense. These
              advertisers may use cookies and other technologies to deliver relevant ads. CelestiCore Technologies
              is not responsible for the content of third-party ads or for the privacy practices of advertisers.
              By using this Site, you acknowledge and consent to the use of cookies for advertising purposes as
              described in our{" "}
              <Link to="/privacy-policy" className="text-[#A020F0] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-3 text-gray-900">5. Disclaimer of Warranties</h2>
            <p>
              The Site and its content are provided on an "as is" and "as available" basis without any warranties
              of any kind, either express or implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the
              Site will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-3 text-gray-900">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, CelestiCore Technologies shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages arising from your use
              of or inability to use the Site, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-3 text-gray-900">7. External Links</h2>
            <p>
              The Site may contain links to third-party websites. These links are provided solely for your
              convenience. We have no control over the content of those sites and accept no responsibility for
              them or for any loss or damage that may arise from your use of them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-3 text-gray-900">8. Contact Form</h2>
            <p>
              Information submitted through our contact form is used solely to respond to your inquiry. We do
              not use this information for unsolicited marketing without your consent. For details on how we
              handle submitted data, see our{" "}
              <Link to="/privacy-policy" className="text-[#A020F0] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-3 text-gray-900">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
              arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in
              Pune, Maharashtra, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-3 text-gray-900">10. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
              posting to the Site. Your continued use of the Site following any changes constitutes your
              acceptance of the revised Terms. We encourage you to review these Terms periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-3 text-gray-900">11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-3 p-5 rounded-2xl bg-white border border-gray-200">
              <p className="font-semibold text-gray-900">CelestiCore Technologies</p>
              <p>Shiv Shakti Chowk, Gurudatta Nagar</p>
              <p>Pune, Maharashtra 412308, India</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:aniketyelameli26@gmail.com"
                  className="text-[#A020F0] hover:underline"
                >
                  aniketyelameli26@gmail.com
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
