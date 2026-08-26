import { PageHero } from "../components/PageHero";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";

const phases = [
  {
    title: "Groundbreaking",
    year: "2019",
    text:
      "Following Blessed Stanley's beatification, the Archdiocese of Oklahoma City broke ground on a permanent Shrine to welcome the pilgrims who had already begun arriving by the thousands to a temporary chapel. Local families, Oklahoma farmers, and donors from across the country contributed to the earliest phase of the project.",
  },
  {
    title: "Construction",
    year: "2020 – 2022",
    text:
      "Over three years, crews raised the Pilgrim Center, Shrine Church, and Chapel of the Tomb using regional limestone and reclaimed timber, echoing both the plains architecture of Okarche and the highland churches of Guatemala. Artists on two continents were commissioned for the mosaics, stained glass, and hand-carved altar.",
  },
  {
    title: "Dedication",
    year: "2023",
    text:
      "The Shrine Church was formally dedicated in a Mass attended by pilgrims from Oklahoma and Guatemala alike, including members of the Tz'utujil community Blessed Stanley had served. His remains were translated to the newly completed Chapel of the Tomb, where they rest today.",
  },
];

export default function History() {
  return (
    <div>
      <PageHero
        eyebrow="History"
        title="Building a home for pilgrims"
        description="From a groundbreaking ceremony to a completed campus, the story of how the National Shrine came to stand in Oklahoma City."
        image="/images/hero-shrine.jpg"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why a Shrine"
            title="A place built to answer a growing pilgrimage"
            description="Long before construction began, pilgrims were already finding their way to Oklahoma City to learn about Blessed Stanley Rother and to pray for his intercession. The Shrine was conceived to give that devotion a lasting, worthy home — one campus uniting the Pilgrim Center, the Shrine Church and Chapel of the Tomb, and the gardens of Tepeyac Hill."
          />
        </Container>
      </section>

      <section className="bg-shrine-parchment py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {phases.map((phase, index) => (
              <div key={phase.title} className="relative rounded-sm border border-shrine-stone/60 bg-shrine-cream p-8">
                <span className="font-display text-5xl font-semibold text-shrine-stone">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-shrine-maroon-600">{phase.year}</p>
                <h3 className="mt-1 font-display text-2xl font-semibold text-shrine-ink">{phase.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-shrine-charcoal">{phase.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src="https://images.pexels.com/photos/12271880/pexels-photo-12271880.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
            alt="Stone church facade with warm afternoon light"
            className="h-80 w-full rounded-sm object-cover shadow-shrine sm:h-96"
          />
          <div>
            <SectionHeading
              eyebrow="Two Communities, One Story"
              title="An Oklahoma shrine with a Guatemalan heart"
              description="Every design choice on campus reflects the two places Blessed Stanley called home. Limestone quarried in Oklahoma anchors the Shrine Church, while carved doors, textile patterns, and garden plantings on Tepeyac Hill honor the Tz'utujil community of Santiago Atitlán that shaped the second half of his life."
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
