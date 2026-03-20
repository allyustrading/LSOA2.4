import aboutBanner from '../assets/about-banner.jpg'
import { PageBanner, SectionTitle, Container, Surface } from '../components/UI'

export default function AboutPage() {
  return (
    <>
      <PageBanner
        image={aboutBanner}
        title="A nonprofit organization built to serve education, innovation, and community wellbeing"
        subtitle="Liuli Society is a U.S. nonprofit organization recognized as tax-exempt under Section 501(c)(3) of the Internal Revenue Code. It exists to advance wellness education, research-informed exploration, and community-centered support."
      />
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="About"
            title="Clear positioning for academic, donor, and community audiences"
            subtitle="Liuli Society is designed to communicate responsibility, public value, and long-term mission alignment rather than commercial promotion."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Surface className="p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Who We Are</h3>
              <p className="mt-4 leading-8 text-slate-600">Liuli Society is a mission-driven nonprofit platform centered on education, thoughtful development, and supportive community engagement.</p>
            </Surface>
            <Surface className="p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Our Mission</h3>
              <p className="mt-4 leading-8 text-slate-600">Our mission is to make wellness learning more understandable, more accessible, and more humane through educational resources, research-informed frameworks, and community-based initiatives.</p>
            </Surface>
            <Surface className="p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Our Vision</h3>
              <p className="mt-4 leading-8 text-slate-600">We envision a future in which wellness knowledge, thoughtful design, and trusted community support work together to improve everyday life with credibility and care.</p>
            </Surface>
            <Surface className="p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Why This Structure</h3>
              <p className="mt-4 leading-8 text-slate-600">The nonprofit model helps keep education, public benefit, and mission-aligned growth at the center of the work. This website does not serve as a commercial store or promotional funnel for for-profit activity.</p>
            </Surface>
          </div>
        </Container>
      </section>
    </>
  )
}
