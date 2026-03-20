import researchBanner from '../assets/research-banner.jpg'
import { Container, PageBanner, SectionTitle, Surface } from '../components/UI'

const sections = [
  ['Why UNH BIC', 'The UNH BIC context supports a more credible and innovation-oriented environment for nonprofit exploration and future collaboration.'],
  ['Research-Informed Innovation', 'Liuli Society is developing a model that values learning, reflection, documentation, and responsible refinement.'],
  ['Exploratory Development Areas', 'Potential areas include wellness education tools, community learning models, and exploratory design concepts informed by daily living needs.'],
  ['Community Pilot Possibilities', 'Pilot programs may support public learning, small-group engagement, and better understanding of supportive wellness practices.'],
  ['Future Collaboration', 'The platform is designed to welcome mission-aligned collaboration with universities, researchers, educators, and nonprofit partners.'],
]

export default function ResearchPage() {
  return (
    <>
      <PageBanner
        image={researchBanner}
        title="A calmer, more institutional research page with a credible nonprofit tone"
        subtitle="This page presents seriousness, innovation, and nonprofit legitimacy while remaining accessible to non-technical audiences."
      />
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Research"
            title="Research-informed innovation in a nonprofit setting"
            subtitle="The goal is to communicate seriousness and care without drifting into clinical claims or commercial language."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {sections.map(([title, text]) => (
              <Surface key={title} className="p-8">
                <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{text}</p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
