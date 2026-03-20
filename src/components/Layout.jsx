import { NavLink } from 'react-router-dom'

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Approach', '/approach'],
  ['Pathways', '/pathways'],
  ['Research', '/research'],
  ['Community', '/community'],
  ['Updates', '/updates'],
  ['Support', '/support'],
  ['Contact', '/contact'],
]

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `transition-colors hover:text-cyan-700 ${isActive ? 'font-medium text-cyan-700' : 'text-slate-700'}`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#ecfeff_0%,#ffffff_35%,#f8fafc_100%)] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <NavLink to="/" className="min-w-0">
            <div className="truncate text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">Liuli Society</div>
            <div className="hidden truncate text-xs text-slate-500 md:block">
              A nonprofit platform for wellness education, research-informed innovation, and community support
            </div>
          </NavLink>

          <nav className="hidden items-center gap-6 text-sm xl:flex">
            {navItems.map(([label, to]) => (
              <NavItem key={to} to={to}>{label}</NavItem>
            ))}
          </nav>

          <NavLink
            to="/contact"
            className="rounded-full border border-slate-300 bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:opacity-95"
          >
            Contact
          </NavLink>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <div className="text-2xl font-semibold">Liuli Society</div>
            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Liuli Society is a registered 501(c)(3) nonprofit organization in the United States. Contributions may be tax-deductible to the extent permitted by law.
            </p>
            <p className="mt-3 max-w-3xl leading-7 text-slate-400">
              This website presents the nonprofit mission of Liuli Society only. It is dedicated to education, research-informed innovation, and community support.
            </p>
          </div>

          <div className="grid min-w-[260px] grid-cols-2 gap-x-10 gap-y-3 text-sm text-slate-300">
            {navItems.map(([label, to]) => (
              <NavLink key={to} to={to} className="hover:text-white">
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
