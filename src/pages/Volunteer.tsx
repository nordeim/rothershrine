import { HeartHandshake, Languages, Sprout, Users } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";

const roles = [
  {
    icon: Users,
    title: "Pilgrim Center Guide",
    text: "Greet visitors, share the exhibits, and help first-time pilgrims plan the rest of their visit.",
  },
  {
    icon: Sprout,
    title: "Grounds & Gardens",
    text: "Help tend the plantings along the Tepeyac Hill rosary walk and keep the campus pilgrim-ready.",
  },
  {
    icon: Languages,
    title: "Bilingual Hospitality",
    text: "Spanish-speaking volunteers help welcome pilgrims and support bilingual Masses and events.",
  },
  {
    icon: HeartHandshake,
    title: "Special Events",
    text: "Lend a hand at the Feast Day celebration, the rosary walk, and other seasonal gatherings.",
  },
];

export default function Volunteer() {
  return (
    <div>
      <PageHero
        eyebrow="Volunteer"
        title="Serve the way he served"
        description="Blessed Stanley gave his life in ordinary acts of service. Volunteers keep that same spirit alive on the Shrine grounds today."
        image="/images/hero-shrine.jpg"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Ways to Help" title="Find a place that fits your gifts" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-sm border border-shrine-stone/60 bg-shrine-parchment p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-shrine-maroon-600 text-shrine-gold-300">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-shrine-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-shrine-charcoal">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-shrine-maroon-900 py-16 text-shrine-cream sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Ready to give your time?
          </h2>
          <p className="max-w-xl text-shrine-cream/80">
            Complete a short application and a member of our volunteer team will follow up about
            orientation and scheduling. Bilingual applications are available in Spanish.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="#" variant="primary">
              Volunteer Application
            </Button>
            <Button href="#" variant="outline-light">
              Solicitud de Voluntariado
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
