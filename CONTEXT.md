# filadelfia.live — Context de business & domeniu

> Ce este, stack-ul și istoricul infrastructurii. Citește acest fișier DOAR când ai nevoie de
> detaliul respectiv — nu se încarcă automat. Procedura de deploy, convențiile și testele rămân
> în `CLAUDE.md` (mereu în context).

---

## Ce este

**Church PWA** pentru **Biserica Filadelfia Petroșani** (`filadelfia-petrosani.ro`). Conținut
editabil din `/admin` (predici/live status/contact etc.). Numele folderului local
(`filadelfia.live`) NU reflectă domeniul — e același site/domeniu cu `filadelfia-petrosani.ro`.

Același client ca `seminarulteologicfiladelfia.ro` (Seminarul e parte din această biserică). Ambele
site-uri rulează pe același VPS, în foldere/useri Linux separați — vezi
`reference_shared_client_filadelfia_seminar.md` în memorie pentru relația completă.

---

## Stack (actual)

- **React 19 + TypeScript + Vite 5 + Tailwind + Radix UI** (shadcn-style, `src/components/ui`).
- **Server API:** Hono + `@hono/node-server`, bundle single-file cu esbuild (`server/index.ts` →
  `api/*.ts` handlere).
- **SQLite** (`node:sqlite`) pentru conținut editabil din `/admin`.
- **Maileroo** pentru formularul de contact (NU EmailJS, NU Firebase — proiectul a migrat de pe
  Vercel/Firebase pe VPS + Node/SQLite).
- **PWA** (`vite-plugin-pwa`).

Variabile de mediu server-side (`ADMIN_PIN`, `YOUTUBE_API_KEY`, `MAILEROO_*`, `ADMIN_SESSION_SECRET`,
etc.) și structura completă a directoarelor: `README.md`.

---

## Istoricul infrastructurii

- Proiectul a migrat de pe **Vercel/Firebase** pe **VPS + Node/SQLite**.
- **Migrare Hostinger → OVHcloud (2026-08-18):** IP nou (`57.131.141.84`), chei SSH noi, TLS via
  **Cloudflare Origin CA** (nu certbot). Abonamentul Hostinger anulat definitiv după confirmarea
  că ambele site-uri (filadelfia + Seminar, migrate în aceeași sesiune) funcționează pe noul VPS.
- Detalii complete de infrastructură (mașina e comună celor două proiecte): `docs/arhitectura.md`
  din proiectul `seminarulteologicfiladelfia.ro`, secțiunea „Infrastructură (VPS)".
- Procedura curentă de acces + deploy: `CLAUDE.md` §„Deploy" și memoria `project_deploy.md`.
