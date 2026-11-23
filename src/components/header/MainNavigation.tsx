'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { NAV_ITEMS, COLLEGE_INFO } from '@/data/collegeData';

export const MainNavigation: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenSubmenuIndex(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      ref={navRef}
      className={`w-full z-40 transition-all duration-300 ${
        isSticky
          ? 'fixed top-0 left-0 bg-white shadow-md border-b-2 border-[#CF0003]'
          : 'relative bg-white border-b border-[#E8E8E8]'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-13 md:h-14">

          {/* Sticky Mini Logo for Mobile / Desktop */}
          {isSticky && (
            <Link href="/" className="flex items-center mr-4 shrink-0" aria-label="SSEC Home">
              <img
                src={COLLEGE_INFO.logoUrl}
                alt="SSEC Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          )}

          {/* Desktop Navigation Links (Exactly 8 tabs with white background and mega-dropdowns) */}
          <div className="hidden md:flex items-stretch h-full w-full justify-between lg:justify-start lg:gap-1">
            {NAV_ITEMS.map((item, index) => {
              const active = isActive(item.href);
              const hasSubmenu = item.submenu && item.submenu.length > 0;

              return (
                <div
                  key={item.title}
                  className="relative group flex items-stretch"
                  onMouseEnter={() => setOpenSubmenuIndex(index)}
                  onMouseLeave={() => setOpenSubmenuIndex(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3.5 lg:px-4 text-[13px] lg:text-[14px] font-bold tracking-wide uppercase transition-colors select-none relative ${
                      active
                        ? 'text-[#CF0003] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#CF0003]'
                        : 'text-[#242424] hover:text-[#CF0003]'
                    }`}
                  >
                    <span>{item.title}</span>
                    {hasSubmenu && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          openSubmenuIndex === index ? 'rotate-180 text-[#CF0003]' : 'text-gray-400'
                        }`}
                      />
                    )}
                  </Link>

                  {/* Mega-Menu / Dropdown */}
                  {hasSubmenu && (
                    <div
                      className={`absolute left-0 top-full ${
                        item.submenu && item.submenu.length > 6 ? 'min-w-[420px]' : 'min-w-[280px]'
                      } bg-white border-t-3 border-[#CF0003] rounded-b-lg mega-dropdown-shadow transition-all duration-200 z-50 ${
                        openSubmenuIndex === index
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                      }`}
                    >
                      <div className="p-3">
                        <div className="text-[10px] font-black uppercase tracking-wider text-[#CF0003] px-3 py-1 bg-red-50/60 rounded mb-2">
                          {item.title} Overview
                        </div>
                        <div
                          className={`grid ${
                            item.submenu && item.submenu.length > 6
                              ? 'grid-cols-2 gap-x-2'
                              : 'grid-cols-1'
                          } divide-y divide-gray-50`}
                        >
                          {item.submenu?.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-white hover:bg-[#CF0003] rounded transition-colors"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Apply Now on Sticky Navbar */}
          {isSticky && (
            <div className="hidden lg:flex items-center ml-auto">
              <Link
                href="/admissions"
                className="bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#242424] text-xs font-black uppercase tracking-wider px-4 py-2 rounded shadow-xs transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#CF0003]" />
                Apply Now
              </Link>
            </div>
          )}

          {/* Mobile Hamburger Toggle Button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#242424]">
              Main Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#242424] hover:text-[#CF0003] focus:outline-none focus:ring-2 focus:ring-[#CF0003] rounded"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Animated Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-4 border-[#CF0003] shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
            {NAV_ITEMS.map((item, index) => {
              const active = isActive(item.href);
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const isExpanded = mobileExpandedIndex === index;

              return (
                <div key={item.title} className="border-b border-gray-100 last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => !hasSubmenu && setMobileMenuOpen(false)}
                      className={`flex-1 py-3 text-sm font-bold uppercase tracking-wide ${
                        active ? 'text-[#CF0003]' : 'text-gray-800'
                      }`}
                    >
                      {item.title}
                    </Link>

                    {hasSubmenu && (
                      <button
                        onClick={() =>
                          setMobileExpandedIndex(isExpanded ? null : index)
                        }
                        className="p-2 text-gray-500 hover:text-[#CF0003]"
                        aria-label={`Expand ${item.title} submenu`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-[#CF0003]' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {hasSubmenu && isExpanded && (
                    <div className="pl-4 pb-2 space-y-1 bg-gray-50 rounded mb-2 border-l-2 border-[#CF0003]">
                      {item.submenu?.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 text-xs font-semibold text-gray-600 hover:text-[#CF0003]"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile Action Buttons */}
            <div className="pt-4 flex flex-col gap-2">
              <Link
                href="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#FFCB0B] text-[#242424] py-3 rounded font-black text-xs uppercase tracking-wider shadow-xs"
              >
                Apply Online 2026–2027
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-gray-100 text-gray-800 py-2.5 rounded font-bold text-xs uppercase"
              >
                Campus Location & Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
