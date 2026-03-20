import { Building2, Mail } from 'lucide-react'
import contactBanner from '../assets/contact-banner.jpg'
import { Container, PageBanner, SectionTitle, Surface } from '../components/UI'

const inquiryTypes = [
  'University or research collaboration',
  'Community partnership',
  'Educational inquiry',
  'Volunteer interest',
  'Mission-aligned partnership',
]

export default function ContactPage() {
  return (
    <>
      <PageBanner
        image={contactBanner}
        title="Start a conversation with Liuli Society"
        subtitle="We welcome inquiries from researchers, educators, community organizations, volunteers, and mission-aligned supporters."
      />
      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle
            eyebrow="Contact"
            title="Open, professional, and partnership-ready communication"
            subtitle="This page is structured to support future outreach workflows while remaining simple and credible today."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <Surface className="p-8">
              <Building2 className="text-cyan-700" size={28} />
              <h3 className="mt-5 text-2xl font-semibold text-slate-950">Inquiry Areas</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {inquiryTypes.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">{item}</div>
                ))}
              </div>
            </Surface>
            <Surface className="p-8">
              <h3 className="text-2xl font-semibold text-slate-950">Contact Form</h3>
              <p className="mt-3 leading-8 text-slate-600">This form is shown as a website-ready preview and can later be connected to email, a CRM, or a nonprofit form service.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none" placeholder="Your name" />
                <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none" placeholder="Email address" />
                <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none md:col-span-2" placeholder="Subject" />
                <textarea className="min-h-36 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none md:col-span-2" placeholder="How would you like to connect with Liuli Society?" />
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-medium text-white">Send Inquiry <Mail size={16} /></button>
            </Surface>
          </div>
        </Container>
      </section>
    </>
  )
}
