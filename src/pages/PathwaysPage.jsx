import { Leaf } from 'lucide-react'
import pathwaysBanner from '../assets/pathways-banner.jpg'
import { Container, PageBanner, SectionTitle, Surface } from '../components/UI'

const pathways = [
  ['Comfort & Circulation Support', 'Supporting everyday physical comfort, ease of movement, and a greater sense of balance through gentle wellness approaches.'],
  ['Daily Natural Skin Wellness', 'Encouraging daily practices that support balanced, healthy, and well-cared-for skin through natural care principles.'],
  ['Special Skin Care Support', 'Exploring supportive pathways for individuals with more sensitive, specialized, or closely monitored skin needs.'],
  ['Light Balance & Clean Living', 'Promoting habits, routines, and environments that help people feel clearer, lighter, and more grounded in daily life.'],
  ['Calm & Rest Support', 'Creating supportive routines for stillness, relaxation, and more restorative daily rhythms.'],
  ['Emotional Ease & Mood Balance', 'Supporting emotional comfort, steadiness, and a more balanced sense of wellbeing in everyday life.'],
  ['Better Living Rituals', 'Encouraging intentional daily rituals that support rhythm, wellbeing, and quality of life.'],
  ['Focus & Clarity Support', 'Supporting clearer attention, thoughtful engagement, and mental freshness through better daily patterns.'],
  ['Space Purification & Atmosphere', 'Exploring how supportive environments and thoughtful atmosphere design can improve how people live and work.'],
]

export default function PathwaysPage() {
  return (
    <>
      <PageBanner
        image={pathwaysBanner}
        title="Nine wellness pathways organized for clarity, accessibility, and future development"
        subtitle="The Liuli framework is presented as a set of pathways rather than product categories, making it more suitable for education, nonprofit communication, and research-oriented exploration."
      />
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Pathways"
            title="A structured framework for education, exploration, and thoughtful growth"
            subtitle="Each pathway reflects an area of everyday life, natural care experience, or future nonprofit learning opportunity."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pathways.map(([title, text], index) => (
              <Surface key={title} className="p-7">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-cyan-700">Pathway {index + 1}</div>
                  <Leaf className="text-slate-300" size={18} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </Surface>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
