import Link from 'next/link';
import { LINKS, TRADEMARKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Tagline */}
          <div className="lg:col-span-1">
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
                  href="/coaching"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Coaching
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
                  href="/art/intuitive-art"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Intuitive Art
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Resources
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

          {/* Shop & External Links */}
          <div>
            <h3 className="text-lg font-serif mb-4">Shop & Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/shop/activation-deck"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  The Activation Deck
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/gratitude-journal"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  The Gratitude Journal
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={LINKS.artOfPausingWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  The Art of Pausing ↗
                </a>
              </li>
              <li>
                <a
                  href={LINKS.artGallery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy rounded"
                >
                  Katie Cooper Art ↗
                </a>
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
              {TRADEMARKS.masterBrand}, {TRADEMARKS.artOfPausing},{' '}
              {TRADEMARKS.coachingProgramme},{' '}
              {TRADEMARKS.emotionalBioharmonising}, {TRADEMARKS.spiralShift},{' '}
              {TRADEMARKS.pausePortal}, and {TRADEMARKS.threeMinuteShift} are
              registered trademarks of Katie Cooper.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
