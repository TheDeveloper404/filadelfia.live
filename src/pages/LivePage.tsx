import LivePlayer from '@/components/LivePlayer';
import PageMeta from '@/components/PageMeta';
import Container from '@/components/ui/container';
import { WaveDivider } from '@/components/WaveDivider';
import siteConfig from '@/data/site-config.json';

export default function LivePage() {
  return (
    <div>
      <PageMeta title="Live — Biserica Filadelfia" description="Urmărește transmisia noastră live." />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-secondary/8 blur-[100px]" />
        </div>
        <Container className="relative text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Transmisie în direct</p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl" style={{ color: '#d4ab84' }}>Live</h1>
          <p className="mx-auto mt-4 max-w-lg text-xl leading-8 text-slate-300">
            Te invităm să urmărești programele noastre în direct.
          </p>
        </Container>
      </section>
      <WaveDivider bottomColor="#d4ab84" height={70} />
      {/* ── Player ── */}
      <section className="py-20 sm:py-24 bg-[#d4ab84]">
        <Container>
          <div className="rounded-3xl bg-white shadow-sm border border-slate-200/80 overflow-hidden">
            <div className="border-b border-slate-100 px-4 py-6 sm:px-10 sm:py-8 text-center">
              <p className="mt-3 text-base font-semibold uppercase tracking-[0.3em]" style={{ color: '#d4ab84' }}>Dacă nu ai putut urmări transmisia live, poți urmări aici ultima înregistrare</p>
              <h2 className="mt-2 text-4xl font-bold text-slate-900 sm:text-5xl">Ultimul program înregistrat</h2>
            </div>
            <div className="p-4 sm:p-10">
              <LivePlayer autoplay />
            </div>
          </div>
        </Container>
      </section>
      {/* ── Arhivă predici ── */}
      <section className="py-20 sm:py-24 bg-[#d4ab84]">
        <Container>
          <div className="rounded-3xl bg-white shadow-sm border border-slate-200/80 overflow-hidden">
            <div className="border-b border-slate-100 px-4 py-6 sm:px-10 sm:py-8 text-center">
              <p className="mt-3 text-base font-semibold uppercase tracking-[0.3em]" style={{ color: '#d4ab84' }}>Predici recomandate de la Biserica Filadelfia Petroșani</p>
              <h2 className="mt-2 text-4xl font-bold text-slate-900 sm:text-5xl">Arhivă predici</h2>
            </div>
            <div className="p-4 sm:p-10 space-y-6">
              <div className="text-center">
                <a
                  href={`${siteConfig.social.youtube}/streams`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground transition hover:bg-secondary/90 shadow-md shadow-secondary/20"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Vezi toate predicile pe YouTube
                </a>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 mt-10">
                {['sS6zzDwsVtY', 'adU7LVlbv5A', 'KQ_L_iq47zs', '4rxOvnmSuu8'].map(id => (
                  <div key={id} className="aspect-video overflow-hidden rounded-2xl bg-slate-950">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
                      title="Predică"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
