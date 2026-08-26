import { Link } from "react-router-dom";
import { CalendarDays, Church, Clock, Compass, HandHeart, MapPin } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { whatToSee, upcomingEvents } from "../data/content";

const quickFacts = [
  { icon: Clock, label: "Daily Hours", value: "9:00 AM – 5:00 PM" },
  { icon: MapPin, label: "Location", value: "Oklahoma City, OK" },
  { icon: Church, label: "Sunday Mass", value: "8:00, 10:30 & 1:00 (Español)" },
  { icon: CalendarDays, label: "Feast Day", value: "July 28" },
];

export default function Home() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-shrine-maroon-900">
        <img
          src="/images/hero-shrine.jpg"
          alt="The shrine church at golden hour, seen from the rose-lined pilgrim path"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-shrine-maroon-900 via-shrine-maroon-900/70 to-shrine-maroon-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-shrine-maroon-900/80 via-shrine-maroon-900/20 to-transparent" />
        <Container className="relative flex min-h-[640px] flex-col justify-end gap-8 py-24 sm:min-h-[720px]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-shrine-gold-300">
              National Shrine &middot; Oklahoma City
            </p>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-tight text-shrine-cream sm:text-6xl">
              The Shepherd Who Stayed
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-shrine-cream/85">
              Come pray at the tomb of Blessed Stanley Rother — an Oklahoma farm boy who became a
              missionary priest in Guatemala, and gave his life for the people he served.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/pilgrimage#visit" variant="primary">
                Plan Your Visit
              </Button>
              <Button to="/about-blessed-stanley-rother" variant="outline-light">
                His Story
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-shrine-stone/60 bg-shrine-parchment">
        <Container className="grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {quickFacts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-shrine-maroon-600 text-shrine-gold-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-shrine-charcoal/60">{label}</p>
                <p className="text-sm font-semibold text-shrine-ink">{value}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="A Welcome from the Shrine"
              title="Every pilgrim has a place here"
              description="Whether you come with a parish group, a school class, or simply your own quiet questions, the Shrine exists to receive you the way Blessed Stanley received the people of Santiago Atitlán — patiently, practically, and without pretense. Walk the grounds, sit in the Chapel of the Tomb, and let his story meet yours."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/about-blessed-stanley-rother" variant="secondary">
                Read His Story
              </Button>
              <Button to="/what-to-see" variant="ghost" className="border border-shrine-maroon-200">
                Explore the Grounds
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-sm shadow-shrine">
              <img
                src="/images/shepherd-emblem.jpg"
                alt="Stained glass depicting a shepherd's crook, wheat, and a cross"
                className="h-80 w-full object-cover sm:h-96"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-48 rounded-sm border border-shrine-gold-300/60 bg-shrine-cream p-4 shadow-shrine sm:block">
              <p className="font-display text-sm italic leading-snug text-shrine-maroon-700">
                “The shepherd cannot run at the first sign of danger.”
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-shrine-charcoal/60">
                Attributed to Fr. Rother, 1981
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-shrine-pine-700 py-20 text-shrine-cream sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What to See"
            title="Three places, one pilgrimage"
            description="The Shrine campus unfolds in three parts — begin at the Pilgrim Center, pray in the Shrine Church and Chapel of the Tomb, then walk the gardens of Tepeyac Hill."
            light
            align="center"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {whatToSee.map((section) => (
              <Link
                key={section.id}
                to={`/what-to-see#${section.id}`}
                className="group flex flex-col overflow-hidden rounded-sm bg-shrine-pine-600/60 shadow-shrine ring-1 ring-shrine-cream/10 transition-transform hover:-translate-y-1"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-shrine-cream">{section.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-shrine-cream/75">{section.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-shrine-gold-300">
                    <Compass className="h-4 w-4" aria-hidden="true" />
                    Learn more
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="News & Events" title="Gather with fellow pilgrims" />
            <Button to="/news-events" variant="ghost" className="border border-shrine-maroon-200">
              View All Events
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="flex flex-col rounded-sm border border-shrine-stone/60 bg-shrine-parchment p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-shrine-maroon-600">{event.date}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-shrine-ink">{event.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-wide text-shrine-charcoal/60">{event.location}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-shrine-charcoal">{event.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-shrine-maroon-700 py-16 text-shrine-cream sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <HandHeart className="h-10 w-10 text-shrine-gold-300" aria-hidden="true" />
          <h2 className="max-w-2xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Help build a home for pilgrims to come
          </h2>
          <p className="max-w-xl text-shrine-cream/80">
            Every gift helps the Shrine welcome the next pilgrim — from daily upkeep of the grounds
            to the pipe organ that will one day lead the Shrine Church in song.
          </p>
          <Button to="/give" variant="primary">
            Give to the Shrine
          </Button>
        </Container>
      </section>
    </div>
  );
}
