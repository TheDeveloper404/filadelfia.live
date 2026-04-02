import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '@/components/ui/container';
import ChurchIcon from '@/components/ui/ChurchIcon';
import siteConfig from '@/data/site-config.json';

const navLinks = [
  { to: '/', label: 'Acasă' },
  { to: '/live', label: 'Live' },
  { to: '/stiri', label: 'Știri' },
  { to: '/plan-citire', label: 'Plan Biblic' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/20'
          : 'bg-slate-900'
      }`}
      style={{ position: 'sticky' }}
    >
      <Container className="flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 text-3xl font-bold text-white hover:text-white">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-sm">
            <ChurchIcon className="h-7 w-7" />
          </span>
          <span className="text-lg sm:text-3xl">{siteConfig.churchName}</span>
        </Link>

        {/* Desktop nav */}
        <nav data-testid="desktop-nav" className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link px-4 py-3 text-lg font-medium transition-colors duration-200 ${
                  active ? 'nav-active text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          className="flex md:hidden items-center justify-center h-10 w-10 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Închide meniu' : 'Deschide meniu'}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile menu — absolute, overlays hero */}
      <div
        className="absolute left-0 right-0 top-full z-50 md:hidden overflow-hidden transition-all duration-200"
        style={{
          maxHeight: menuOpen ? '400px' : '0px',
          opacity: menuOpen ? 1 : 0,
          background: 'rgba(10, 15, 30, 0.98)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderTop: menuOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        <nav className="flex flex-col px-4 py-3">
          {navLinks.map(link => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  active ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
