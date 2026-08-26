import { CalendarDays, MapPin, Newspaper } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { upcomingEvents } from "../data/content";

const articles = [
  {
    category: "Shrine Spotlight",
    title: "The carvers behind the Chapel altar",
    excerpt:
      "A conversation with the artisans who spent a year carving the altar beneath which Blessed Stanley's relics now rest.",
  },
  {
    category: "Venerable Voices",
    title: "Remembering Padre Apla's, forty years later",
    excerpt:
      "Parishioners from Santiago Atitlán share memories of the priest who learned their language and never left their side.",
  },
  {
    category: "Shrine Spotlight",
    title: "Why Tepeyac Hill carries that name",
    excerpt:
      "The story behind the Shrine's devotional hill, and its link to Our Lady of Guadalupe's apparition at Tepeyac in Mexico City.",
  },
];

export default function NewsEvents() {
  return (
    <div>
      <PageHero
        eyebrow="News & Events"
        title="Stories from the Shrine"
        description="Feast day celebrations, monthly gatherings, and the ongoing story of a community still being shaped by Blessed Stanley's witness."
        image="/images/hero-shrine.jpg"
      />

      <section id="feastday" className="scroll-mt-24 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Upcoming Events" title="Join us on campus" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="flex gap-5 rounded-sm border border-shrine-stone/60 bg-shrine-parchment p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-shrine-maroon-600 text-shrine-gold-300">
                  <CalendarDays className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-shrine-maroon-600">{event.date}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-shrine-ink">{event.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-wide text-shrine-charcoal/60">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {event.location}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-shrine-charcoal">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-shrine-parchment py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Articles" title="Shrine Spotlights & Venerable Voices" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="flex flex-col rounded-sm border border-shrine-stone/60 bg-shrine-cream p-6">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-shrine-maroon-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-shrine-maroon-600">
                  <Newspaper className="h-3.5 w-3.5" aria-hidden="true" />
                  {article.category}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-shrine-ink">{article.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-shrine-charcoal">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="taste" className="scroll-mt-24 py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src="https://images.pexels.com/photos/24738158/pexels-photo-24738158.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200"
            alt="Close-up of a hand loom weaving colorful textile"
            className="h-80 w-full rounded-sm object-cover shadow-shrine sm:h-96"
          />
          <div>
            <SectionHeading
              eyebrow="TASTE Series"
              title="An evening of faith, food, and conversation"
              description="Several times a year, the Shrine hosts TASTE, an evening lecture and dinner series exploring the Church in Guatemala, the missionary vocation, and the ongoing legacy of Blessed Stanley Rother. Guest speakers have included clergy, historians, and members of the Tz'utujil community he served."
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
