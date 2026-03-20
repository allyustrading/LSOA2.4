import supportBanner from '../assets/support-banner.jpg'
import { Container, PageBanner, SectionTitle, Surface } from '../components/UI'

const updatesList = [
  {
    label: 'Institutional Update',
    title: 'Strengthening the nonprofit platform foundation',
    text: 'We are refining the structure, language, and presentation of Liuli Society to better serve academic, nonprofit, and community audiences.',
  },
  {
    label: 'Education',
    title: 'Why education comes before intervention',
    text: 'Our work begins with understanding. Education helps people make informed decisions and engage more thoughtfully with supportive daily practices.',
  },
  {
    label: 'Research Note',
    title: 'Building a calm and credible innovation model',
    text: 'Liuli Society is shaping a nonprofit framework for responsible exploration, community learning, and mission-aligned growth.',
  },
]

export default function UpdatesPage() {
  return (
    <>
      <PageBanner
        image={supportBanner}
        title="A publishing section for educational, institutional, and mission-driven content"
        subtitle="This space is designed for project updates, articles, community events, and reflective notes while preserving a calm nonprofit tone."
      />
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Updates"
            title="Content designed to inform, reflect, and build trust"
            subtitle="This section helps create a living nonprofit presence without turning the site into a promotional channel."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {updatesList.map((item) => (
              <Surface key={item.title} className="p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">{item.label}</div>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
