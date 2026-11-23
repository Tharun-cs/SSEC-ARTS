'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '@/data/collegeData';
import { CollegeLogo } from '@/components/shared/CollegeLogo';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 38);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenSubmenuIndex(null);
    setMobileExpandedIndex(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleMobileSubmenu = (index: number) => {
    setMobileExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <header
      className={`w-full bg-white transition-all duration-200 z-40 ${
        isSticky
          ? 'sticky top-0 shadow-md border-b border-gray-200'
          : 'relative border-b border-gray-100'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Official College Logo & Identity */}
          <div className="flex items-center shrink-0 py-1 min-w-0">
            <CollegeLogo />
          </div>

          {/* Center-Right: Main Navigation Links (Desktop 8 Tabs with Dividers) */}
          <nav className="hidden xl:flex items-center h-full">
            {NAV_ITEMS.map((item, index) => {
              const active = isActive(item.href);
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const isLast = index === NAV_ITEMS.length - 1;

              return (
                <React.Fragment key={item.title}>
                  <div
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setOpenSubmenuIndex(index)}
                    onMouseLeave={() => setOpenSubmenuIndex(null)}
                  >
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1 px-3 py-2 text-[12.5px] font-bold tracking-wide uppercase transition-colors select-none ${
                        active
                          ? 'text-[#CF0003]'
                          : 'text-[#172C4F] hover:text-[#CF0003]'
                      }`}
                    >
                      <span>{item.title}</span>
                      {hasSubmenu && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 text-gray-400 group-hover:text-[#CF0003] ${
                            openSubmenuIndex === index ? 'rotate-180 text-[#CF0003]' : ''
                          }`}
                        />
                      )}
                      {/* Active State Red Underline matching design */}
                      {active && (
                        <span className="absolute bottom-2 left-3 right-3 h-[3px] bg-[#CF0003] rounded-full" />
                      )}
                    </Link>

                    {/* Mega / Dropdown Submenu */}
                    {hasSubmenu && (
                      <div
                        className={`absolute left-0 top-full ${
                          item.submenu && item.submenu.length > 5 ? 'w-80' : 'w-64'
                        } bg-white border-t-2 border-[#CF0003] shadow-xl rounded-b-md transition-all duration-150 z-50 ${
                          openSubmenuIndex === index
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                        }`}
                      >
                        <div className="py-2">
                          {item.submenu?.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:text-[#CF0003] hover:bg-red-50/60 transition-colors"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Subtle vertical divider between menu items */}
                  {!isLast && (
                    <span className="h-4 w-[1px] bg-gray-300 mx-1 pointer-events-none select-none" aria-hidden="true" />
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Far Right Action: Golden Yellow APPLY NOW Button & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-1.5 bg-[#FFCB0B] hover:bg-[#E5B50A] active:scale-98 text-[#172C4F] font-black text-[11px] sm:text-xs md:text-[13px] tracking-wider uppercase px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-md shadow-xs hover:shadow transition-all select-none whitespace-nowrap"
            >
              <span>APPLY NOW</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 sm:p-2 text-gray-700 hover:text-[#CF0003] focus:outline-none rounded-md transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.2]" /> : <Menu className="w-6 h-6 stroke-[2.2]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200 px-4 pt-3 pb-8 shadow-2xl max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="space-y-1 divide-y divide-gray-100">
            {NAV_ITEMS.map((item, idx) => {
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const isExpanded = mobileExpandedIndex === idx;

              return (
                <div key={item.title} className="pt-2 pb-1.5">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => !hasSubmenu && setMobileMenuOpen(false)}
                      className={`block py-1.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                        isActive(item.href) ? 'text-[#CF0003]' : 'text-[#242424] hover:text-[#CF0003]'
                      }`}
                    >
                      {item.title}
                    </Link>

                    {hasSubmenu && (
                      <button
                        onClick={() => toggleMobileSubmenu(idx)}
                        className="p-2 text-gray-500 hover:text-[#CF0003] focus:outline-none"
                        aria-label={`Toggle ${item.title} submenu`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-[#CF0003]' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Collapsible Submenu */}
                  {hasSubmenu && isExpanded && (
                    <div className="pl-3 py-1 space-y-1.5 border-l-2 border-red-200 ml-2 mt-1">
                      {item.submenu?.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-1.5 py-1 text-xs font-semibold text-gray-600 hover:text-[#CF0003] transition-colors"
                        >
                          <ChevronRight className="w-3 h-3 text-[#CF0003] shrink-0" />
                          <span>{sub.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Drawer Bottom Action */}
          <div className="pt-5 mt-3 border-t border-gray-100">
            <Link
              href="/admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#FFCB0B] hover:bg-[#E5B50A] text-[#172C4F] font-black py-3 rounded-lg text-xs uppercase tracking-wider shadow-sm transition-all active:scale-98"
            >
              <span>APPLY NOW 2026–27</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
