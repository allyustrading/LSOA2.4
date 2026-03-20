import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Container({ children, className = '' }) {
  return <div className={`mx-auto max-w-7xl px-4 md:px-6 lg:px-8 ${className}`}>{children}</div>
}

export function SectionTitle({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="max-w-3xl">
      <div className={`text-xs font-semibold uppercase tracking-[0.28em] ${light ? 'text-cyan-200' : 'text-cyan-700'}`}>
        {eyebrow}
      </div>
      <h2 className={`mt-4 text-3xl font-semibold leading-tight md:text-5xl ${light ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-5 text-lg leading-8 ${light ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>
      ) : null}
    </div>
  )
}

export function Surface({ children, className = '' }) {
  return (
    <div className={`rounded-[28px] border border-slate-200 bg-white shadow-soft ${className}`}>
      {children}
    </div>
  )
}

export function PageBanner({ image, title, subtitle }) {
  return (
    <section className="overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
      <Container className="grid items-stretch gap-0 lg:grid-cols-[1fr_1.15fr]">
        <div className="flex items-center py-14 md:py-20 lg:pr-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Liuli Society</div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{subtitle}</p>
          </div>
        </div>
        <div className="min-h-[280px] lg:min-h-[360px]">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      </Container>
    </section>
  )
}

export function CTAButton({ to, children, inverted = false }) {
  const className = inverted
    ? 'inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-slate-950'
    : 'inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-medium text-white'

  return (
    <Link to={to} className={className}>
      {children} <ArrowRight size={16} />
    </Link>
  )
}
