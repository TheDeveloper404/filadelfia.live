import { Link } from 'react-router-dom';
import { useState } from 'react';
import Container from '@/components/ui/container';
import ChurchIcon from '@/components/ui/ChurchIcon';
import siteConfig from '@/data/site-config.json';

const socialIcons = {
  youtube: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.1 0 12 0 12s0 3.9.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.9 24 12 24 12s0-3.9-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  ),
  facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88V14.89h-2.54V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z" />
    </svg>
  ),
};

export default function Footer() {
  const [showEgg, setShowEgg] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-400">
      <Container className="grid gap-10 py-12 md:grid-cols-3 md:gap-8 md:py-8">

        {/* Brand */}
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Link to="/" className="flex items-center gap-3 text-xl font-bold text-white hover:text-white">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow">
              <ChurchIcon className="h-6 w-6" />
            </span>
            <span className="leading-tight">{siteConfig.churchName}</span>
          </Link>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {Object.entries(siteConfig.social).map(([key, url]) =>
              url ? (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-secondary/50 hover:bg-secondary/10 hover:text-secondary"
                  aria-label={key}
                >
                  {socialIcons[key as 'youtube' | 'facebook']}
                </a>
              ) : null,
            )}
          </div>
        </div>

        {/* Pages */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Pagini</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-sm">
            {[
              { to: '/', label: 'Acasă' },
              { to: '/live', label: 'Live' },
              { to: '/stiri', label: 'Știri' },
              { to: '/plan-citire', label: 'Plan Biblic' },
              { href: `${siteConfig.youtube.channelUrl}/streams`, label: 'Arhivă' },
              { to: '/contact', label: 'Contact' },
            ].map(link =>
              'href' in link ? (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="text-slate-300 transition hover:text-secondary">
                  {link.label}
                </a>
              ) : (
                <Link key={link.to} to={link.to} className="text-slate-300 transition hover:text-secondary">
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center gap-3 md:items-start">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Contact</p>
          <div className="space-y-2 text-sm text-slate-300 text-center md:text-left">
            {siteConfig.contact.address && (
              <p className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.083 3.218-4.212 3.218-6.878a6.75 6.75 0 0 0-13.5 0c0 2.666 1.274 4.795 3.218 6.878a19.58 19.58 0 0 0 2.683 2.282 16.975 16.975 0 0 0 1.144.742zM12 13.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z" clipRule="evenodd" />
                </svg>
                {siteConfig.contact.address}
              </p>
            )}
          </div>
        </div>

      </Container>

      <div className="border-t border-white/8 py-4">
        <Container className="text-center text-xs text-slate-600">
          <span
            onClick={() => setShowEgg(e => !e)}
            className="cursor-default select-none"
          >
            &copy; {new Date().getFullYear()} {siteConfig.churchName}. Toate drepturile rezervate.
          </span>
          {showEgg && (
            <span className="ml-2 text-slate-500 transition-opacity">
              · Powered by <span className="text-secondary font-semibold">ACL Smart Software</span>
            </span>
          )}
        </Container>
      </div>
    </footer>
  );
}
