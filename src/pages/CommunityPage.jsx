import communityBanner from '../assets/community-banner.jpg'
import { Container, PageBanner, SectionTitle, Surface } from '../components/UI'

const communityItems = [
  'Educational workshops and learning resources',
  'Small-group experiences and discussion circles',
  'Volunteer and mission-aligned participation',
  'Community-facing pilot initiatives',
  'Long-term support vision grounded in trust and care',
]

export default function CommunityPage() {
  return (
    <>
      <PageBanner
        image={communityBanner}
        title="Making wellness education more accessible and more supportive for real communities"
        subtitle="Liuli Society exists not only to explore ideas, but to make them more understandable, approachable, and useful through public-facing education and thoughtful engagement."
      />
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Community"
            title="Public-facing education, meaningful engagement, and long-term support"
            subtitle="This page presents a community-centered model that feels warm and human while still maintaining institutional credibility."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Surface className="p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Community Focus</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {communityItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </Surface>
            <Surface className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Long-Term Community Vision</h3>
              <p className="mt-4 leading-8 text-slate-600">Our long-term vision is to create a nonprofit ecosystem where education, supportive relationships, and responsible innovation strengthen one another and create real community value.</p>
            </Surface>
          </div>
        </Container>
      </section>
    </>
  )
}
