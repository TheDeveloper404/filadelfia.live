import { useEffect } from 'react';
import PageMeta from '@/components/PageMeta';
import Container from '@/components/ui/container';
import { WaveDivider } from '@/components/WaveDivider';

const placeholderEvents = [
  { year: '~1994', title: 'Înființarea bisericii', desc: 'Un grup de credincioși pun bazele bisericii Filadelfia în Petroșani.' },
  { year: '...', title: 'Primii ani', desc: 'Comunitatea crește, noi membri se alătură și activitățile se diversifică.' },
  { year: '...', title: 'Construirea lăcașului', desc: 'Este ridicat actualul local de cult, un spațiu dedicat comunității.' },
  { year: '2024', title: '30 de ani de credință', desc: 'O sărbătoare a credinței, comunității și harului divin.' },
];

export default function DespreNoi() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="relative">
      <PageMeta title="Despre noi — Filadelfia" description="Istoria și identitatea Bisericii Filadelfia Petroșani." />

      {/* ── Popup overlay ── */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', background: 'rgba(15,23,42,0.55)' }}>
        <div className="w-full max-w-sm rounded-3xl bg-white px-8 py-10 text-center shadow-2xl">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15">
            <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">În curând</h2>
          <p className="mt-3 text-slate-500 text-sm leading-relaxed">
            Lucrăm la această pagină. Povestea bisericii noastre va fi disponibilă în curând.
          </p>
        </div>
      </div>

      {/* ── Page content (blurred behind popup) ── */}
      <div className="pointer-events-none select-none" style={{ filter: 'blur(10px)', opacity: 0.45 }}>

        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-secondary/8 blur-[100px]" />
          </div>
          <Container className="relative text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Identitate & Istorie</p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl" style={{ color: '#d4ab84' }}>Despre noi</h1>
            <p className="mx-auto mt-4 max-w-lg text-xl leading-8 text-slate-300">
              O comunitate de credință întemeiată în 1924, construită pe iubire și rugăciune.
            </p>
          </Container>
        </section>

        {/* Cine suntem */}
        <section className="relative py-20 bg-[#d4ab84]">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 -translate-y-full">
            <WaveDivider bottomColor="#d4ab84" height={70} />
          </div>
          <Container>
            <div className="rounded-3xl bg-white shadow-sm border border-slate-200/80 overflow-hidden">
              <div className="border-b border-slate-100 px-4 py-6 sm:px-10 sm:py-8 text-center">
                <p className="text-base font-semibold uppercase tracking-[0.3em]" style={{ color: '#d4ab84' }}>Identitate</p>
                <h2 className="mt-2 text-4xl font-bold text-slate-900 sm:text-5xl">Cine suntem</h2>
              </div>
              <div className="px-4 py-10 sm:px-16 sm:py-12 max-w-3xl mx-auto text-center space-y-4">
                <p className="text-lg leading-8 text-slate-600">
                  Biserica Filadelfia din Petroșani este o comunitate creștină evanghelică cu o tradiție de peste 100 de ani.
                  Ne întâlnim săptămânal pentru închinare, rugăciune și studiul Cuvântului lui Dumnezeu.
                </p>
                <p className="text-lg leading-8 text-slate-600">
                  Credem în puterea transformatoare a Evangheliei și ne dorim să fim o comunitate deschisă tuturor celor care caută.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Timeline */}
        <section className="pb-24 bg-[#d4ab84]">
          <Container>
            <div className="rounded-3xl bg-white shadow-sm border border-slate-200/80 overflow-hidden">
              <div className="border-b border-slate-100 px-4 py-6 sm:px-10 sm:py-8 text-center">
                <p className="text-base font-semibold uppercase tracking-[0.3em]" style={{ color: '#d4ab84' }}>Cronologie</p>
                <h2 className="mt-2 text-4xl font-bold text-slate-900 sm:text-5xl">Istoria noastră</h2>
              </div>

              <div className="px-4 py-12 sm:px-10">
                <div className="relative max-w-3xl mx-auto">
                  {/* Vertical line */}
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 sm:left-1/2" />

                  <div className="space-y-10">
                    {placeholderEvents.map((ev, i) => (
                      <div key={ev.year} className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                        {/* Card */}
                        <div className={`ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:mr-8 sm:text-right' : 'sm:ml-8'}`}>
                          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#d4ab84' }}>{ev.year}</p>
                            <h3 className="mt-1 text-base font-bold text-slate-900">{ev.title}</h3>
                            <p className="mt-1 text-sm leading-6 text-slate-500">{ev.desc}</p>
                          </div>
                        </div>

                        {/* Dot */}
                        <div className="absolute left-[18px] top-5 sm:left-1/2 sm:-translate-x-1/2 h-4 w-4 rounded-full border-2 border-white shadow-md" style={{ background: '#d4ab84' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

      </div>
    </div>
  );
}
