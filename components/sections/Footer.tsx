export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-900 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Raphaël Parmentier</p>

        <p>
          Built with Next.js, TypeScript and TailwindCSS · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}