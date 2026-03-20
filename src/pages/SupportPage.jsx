import supportBanner from '../assets/support-banner.jpg'
import { Container, PageBanner, SectionTitle, Surface } from '../components/UI'

export default function SupportPage() {
  return (
    <>
      <PageBanner
        image={supportBanner}
        title="A more standard support page that builds credibility and prepares for future growth"
        subtitle="Even when donations are not the immediate priority, this page helps establish nonprofit trust and future readiness for partnership, collaboration, and contribution."
      />
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Support"
            title="Preparing for future partnerships, contributions, and mission-aligned growth"
            subtitle="This section supports nonprofit legitimacy while leaving space for future fundraising or structured collaboration."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Surface className="p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Why Support Liuli Society</h3>
              <p className="mt-4 leading-8 text-slate-600">Support helps expand educational resources, responsible innovation, public-facing community work, and mission-centered organizational growth.</p>
            </Surface>
            <Surface className="p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Partnership Opportunities</h3>
              <p className="mt-4 leading-8 text-slate-600">Liuli Society welcomes mission-aligned conversations with institutions, community organizations, and individuals who value thoughtful, community-centered wellbeing work.</p>
            </Surface>
            <Surface className="p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Educational Collaboration</h3>
              <p className="mt-4 leading-8 text-slate-600">Opportunities may include workshops, learning resources, pilot programs, research discussion, and community outreach collaboration.</p>
            </Surface>
            <Surface className="border-0 bg-slate-950 p-8 text-white">
              <h3 className="text-2xl font-semibold">Tax-Deductible Giving</h3>
              <p className="mt-4 leading-8 text-slate-300">Liuli Society is a registered 501(c)(3) nonprofit organization in the United States. Contributions may be tax-deductible to the extent permitted by law.</p>
            </Surface>
          </div>
        </Container>
      </section>
    </>
  )
}
