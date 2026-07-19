import Link from 'next/link';
import { LINKS, TRADEMARKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand & Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-serif font-light tracking-wide hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded inline-block mb-4"
            >
              {TRADEMARKS.masterBrand}
            </Link>
            <p className="text-sm leading-relaxed opacity-90">
              Pausing is where clarity, creativity and transformation begin.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-serif mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/art/the-art-of-pausing"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  {TRADEMARKS.artOfPausing}
                </Link>
              </li>
              <li>
                <Link
                  href="/coaching"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Work With Katie
                </Link>
              </li>
              <li>
                <Link
                  href="/retreats"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Retreats
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  The Pause Library
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-serif mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={LINKS.activationDeckProduct}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Power In The Pause® Activation Deck ↗
                </a>
              </li>
              <li>
                {LINKS.journalAmazonProduct ? (
                  <a
                    href={LINKS.journalAmazonProduct}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                  >
                    Power In The Pause Journal ↗
                  </a>
                ) : (
                  <Link
                    href="/shop/gratitude-journal"
                    className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                  >
                    Power In The Pause Journal
                  </Link>
                )}
              </li>
              <li>
                <a
                  href={LINKS.shopifyStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Katie Cooper Art ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-serif mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-serif mb-4">Follow</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href={LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Facebook ↗
                </a>
              </li>
            </ul>
            <div className="text-sm">
              <p className="mb-1 opacity-90">Contact</p>
              <a
                href="mailto:hello@thepowerinthepause.co.uk"
                className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
              >
                hello@thepowerinthepause.co.uk
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-xs opacity-75">
              © {currentYear} Katie Cooper. All rights reserved.
            </p>
            <p className="text-xs opacity-75 max-w-2xl">
              {TRADEMARKS.masterBrand} is a registered trademark of Katie Cooper.{' '}
              {TRADEMARKS.artOfPausing}, {TRADEMARKS.coachingProgramme},{' '}
              {TRADEMARKS.spiralShift}, {TRADEMARKS.pausePortal} and{' '}
              {TRADEMARKS.threeMinuteShift} are names used within the{' '}
              {TRADEMARKS.masterBrand} body of work.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
