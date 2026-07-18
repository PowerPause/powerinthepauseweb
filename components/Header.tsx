'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Coaching', href: '/coaching' },
  {
    label: 'Art',
    dropdown: [
      { label: 'The Art of Pausing®', href: '/art/the-art-of-pausing' },
      { label: 'Intuitive Art', href: '/art/intuitive-art' },
    ],
  },
  {
    label: 'Shop',
    dropdown: [
      { label: 'The Activation Deck', href: '/shop/activation-deck' },
      { label: 'The Gratitude Journal', href: '/shop/gratitude-journal' },
    ],
  },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleDropdownKeyDown = (
    e: React.KeyboardEvent,
    label: string
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDropdownToggle(label);
    } else if (e.key === 'Escape') {
      setOpenDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-cream transition-all duration-300 ${
        isScrolled ? 'border-b border-gold shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="text-3xl md:text-4xl font-script text-navy hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded"
          >
            The Power In The Pause®
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.label} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        onKeyDown={(e) => handleDropdownKeyDown(e, item.label)}
                        aria-expanded={openDropdown === item.label}
                        aria-haspopup="true"
                        className="text-navy hover:text-gold transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded px-2 py-1 flex items-center gap-1"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === item.label && (
                        <ul className="absolute top-full left-0 mt-2 bg-white border border-gold/20 rounded shadow-lg py-2 min-w-[200px]">
                          {item.dropdown.map((dropdownItem) => (
                            <li key={dropdownItem.href}>
                              <Link
                                href={dropdownItem.href}
                                onClick={() => setOpenDropdown(null)}
                                className="block px-4 py-2 text-navy hover:bg-cream hover:text-gold transition-colors focus:outline-none focus:bg-cream focus:text-gold"
                              >
                                {dropdownItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="text-navy hover:text-gold transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded px-2 py-1"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <Button variant="primary" href="/resources#spiral-shift">
              Begin with The Spiral Shift™
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden text-navy focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded p-2"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-cream z-40 overflow-y-auto">
          <nav className="px-6 py-8">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        onKeyDown={(e) => handleDropdownKeyDown(e, item.label)}
                        aria-expanded={openDropdown === item.label}
                        aria-haspopup="true"
                        className="text-2xl font-serif text-navy hover:text-gold transition-colors w-full text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded p-2"
                      >
                        {item.label}
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            openDropdown === item.label ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          strokeWidth="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdown === item.label && (
                        <ul className="mt-4 ml-4 space-y-3">
                          {item.dropdown.map((dropdownItem) => (
                            <li key={dropdownItem.href}>
                              <Link
                                href={dropdownItem.href}
                                onClick={closeMobileMenu}
                                className="text-xl text-navy hover:text-gold transition-colors block focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded p-2"
                              >
                                {dropdownItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={closeMobileMenu}
                      className="text-2xl font-serif text-navy hover:text-gold transition-colors block focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded p-2"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                variant="primary"
                href="/resources#spiral-shift"
                className="w-full"
              >
                Begin with The Spiral Shift™
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
