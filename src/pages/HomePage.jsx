import { BookOpen, Compass, FlaskConical, HandHeart, HeartHandshake, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroHome from '../assets/hero-home.jpg'
import { Container, CTAButton, SectionTitle, Surface } from '../components/UI'

const trustItems = [
  'Registered U.S. 501(c)(3) nonprofit',
  'Research-informed approach',
  'Education and community focus',
  'Connected to the innovation environment of UNH BIC',
]

const pillars = [
  {
    icon: BookOpen,
    title: 'Wellness Knowledge',
    text: 'We translate complex wellness ideas into accessible learning, practical understanding, and responsible everyday guidance.',
  },
  {
    icon: Compass,
    title: 'Thoughtful Design',
    text: 'We explore supportive design frameworks rooted in real-life needs, clarity of purpose, and long-term usefulness.',
  },
  {
    icon: HeartHandshake,
    title: 'Companion Support',
    text: 'We value follow-through, listening, and human-centered support that helps communities build trust over time.',
  },
]

const pathways = [
  'Comfort & Circulation Support',
  'Daily Natural Skin Wellness',
  'Special Skin Care Support',
  'Light Balance & Clean Living',
  'Calm & Rest Support',
  'Emotional Ease & Mood Balance',
]

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-100 blur-3xl" />
          <div className="absolute right-0 top-10 h-[360px] w-[360px] rounded-full bg-sky-100 blur-3xl" />
        </div>

        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm text-cyan-800 shadow-sm">
              <Sparkles size={14} /> Research-informed nonprofit platform
            </div>
            <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-slate-950 md:text-6xl">
              Advancing wellness education, thoughtful innovation, and community support
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Liuli Society is a U.S. 501(c)(3) nonprofit organization dedicated to building a more informed, humane, and community-centered approach to natural wellness in connection with the broader innovation environment of UNH BIC.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
              We present wellness through education, responsible exploration, and supportive community engagement—not through commercial promotion or medical claims.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton to="/about">Learn About Liuli Society</CTAButton>
              <Link to="/approach" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-medium text-slate-800">
                Explore Our Approach
              </Link>
            </div>
          </div>

          <Surface className="overflow-hidden">
            <img src={heroHome} alt="Liuli Society visual" className="h-64 w-full object-cover md:h-72" />
            <div className="border-b border-slate-200 bg-slate-950 p-6 text-white md:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Key Statement</div>
              <p className="mt-4 text-2xl font-semibold leading-tight">
                Liuli Society is a U.S. 501(c)(3) nonprofit organization advancing research-informed wellness education, community-centered initiatives, and thoughtful innovation within the broader environment of UNH BIC.
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="border-b border-r border-slate-200 p-6 md:border-b-0 md:p-7">
                <div className="text-sm font-semibold text-slate-950">What this website emphasizes</div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>Wellness education</li>
                  <li>Research and innovation</li>
                  <li>Community support</li>
                  <li>Daily living guidance</li>
                </ul>
              </div>
              <div className="p-6 md:p-7">
                <div className="text-sm font-semibold text-slate-950">What this website avoids</div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>Disease treatment claims</li>
                  <li>Cure or diagnose language</li>
                  <li>Direct sales language</li>
                  <li>Commercial funnel structure</li>
                </ul>
              </div>
            </div>
          </Surface>
        </Container>
      </section>

      <section className="py-5">
        <Container className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700">
              {item}
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-6 lg:grid-cols-3">
          <Surface className="p-8 lg:col-span-2">
            <SectionTitle
              eyebrow="Mission"
              title="A clearer and more accessible model for everyday wellness learning"
              subtitle="Our mission is to advance wellness education, research-informed innovation, and community-based support in ways that are understandable, responsible, and human-centered."
            />
            <p className="mt-8 max-w-3xl leading-8 text-slate-600">
              Liuli Society works to make healthy living more understandable, more accessible, and more grounded in everyday experience. We aim to connect education, thoughtful design, and supportive community engagement into a nonprofit model that can grow with credibility and care.
            </p>
          </Surface>

          <Surface className="border-0 bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] p-8 text-white">
            <HandHeart className="text-cyan-300" size={28} />
            <h3 className="mt-5 text-2xl font-semibold">Community Value</h3>
            <p className="mt-4 leading-8 text-slate-300">
              We are building more than a platform. We are building a trusted framework for learning, support, and future community-centered collaboration.
            </p>
          </Surface>
        </Container>
      </section>

      <section className="py-8 pb-20 md:pb-24">
        <Container>
          <SectionTitle
            eyebrow="Core Framework"
            title="Three pillars that shape the Liuli Society model"
            subtitle="The nonprofit website is organized around three foundational ideas that make the work clear, trustworthy, and professionally presented."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <Surface key={pillar.title} className="p-8">
                  <div className="inline-flex rounded-2xl bg-cyan-50 p-3 text-cyan-700"><Icon size={24} /></div>
                  <h3 className="mt-5 text-2xl font-semibold text-slate-950">{pillar.title}</h3>
                  <p className="mt-4 leading-8 text-slate-600">{pillar.text}</p>
                </Surface>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionTitle
              eyebrow="Wellness Pathways"
              title="A structured nine-pathway framework for education, exploration, and future innovation"
              subtitle="Our wellness framework is organized into pathways that reflect everyday life scenarios, natural care experiences, and future directions for education and responsible development."
              light
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {pathways.map((item, index) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold text-cyan-300">Pathway {index + 1}</div>
                  <div className="mt-2 text-lg font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8"><CTAButton to="/pathways" inverted>View All Pathways</CTAButton></div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Surface className="p-8">
            <FlaskConical className="text-cyan-700" size={28} />
            <h3 className="mt-5 text-2xl font-semibold text-slate-950">Research and Innovation at UNH BIC</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Within the broader innovation environment of UNH BIC, Liuli Society is developing a nonprofit framework for wellness education, exploratory design, community-facing pilots, and long-term mission-driven growth.
            </p>
          </Surface>
          <Surface className="p-8">
            <Users className="text-cyan-700" size={28} />
            <h3 className="mt-5 text-2xl font-semibold text-slate-950">Partnership and Support</h3>
            <p className="mt-4 leading-8 text-slate-600">
              We welcome mission-aligned conversations with educators, researchers, donors, community partners, and institutions who share a thoughtful approach to natural wellness.
            </p>
          </Surface>
        </Container>
      </section>
    </>
  )
}
