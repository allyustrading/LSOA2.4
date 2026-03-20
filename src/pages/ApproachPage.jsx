import aboutBanner from '../assets/about-banner.jpg'
import { Container, PageBanner, SectionTitle, Surface } from '../components/UI'

const steps = [
  ['Knowledge First', 'Our approach starts with understanding. Education provides the foundation for more thoughtful daily choices and supportive practices.'],
  ['Understanding to Design', 'We explore design ideas that are grounded in real-life needs, practical use, and responsible development.'],
  ['Design to Daily Support', 'The goal is not one-time exposure but meaningful integration into learning, routine, and community context.'],
  ['Companion Support', 'We value follow-up, listening, feedback, and supportive continuity rather than isolated one-time interaction.'],
  ['Long-Term Trust', 'Trust grows when organizations communicate clearly, act responsibly, and stay aligned with public-serving values.'],
]

export default function ApproachPage() {
  return (
    <>
      <PageBanner
        image={aboutBanner}
        title="A standard, professional framework rooted in understanding rather than promotion"
        subtitle="Liuli Society presents its methodology in a way that is nonprofit-friendly, institutionally clear, and easy for academic, donor, and community audiences to understand."
      />
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Approach"
            title="Our approach begins not with selling, but with understanding"
            subtitle="This page explains the logic behind Liuli Society in language that is clearer, calmer, and more suitable for nonprofit and research audiences."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {steps.map(([title, text]) => (
              <Surface key={title} className="p-6">
                <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
