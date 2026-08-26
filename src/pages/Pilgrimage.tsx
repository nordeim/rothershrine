import { Clock, Mail, MapPin, Navigation, Phone, Users } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";

const hours = [
  { day: "Monday – Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Sunday", time: "8:00 AM – 3:00 PM" },
  { day: "Chapel of the Tomb", time: "Closes 30 minutes before the grounds" },
];

const massTimes = [
  { day: "Sunday", time: "8:00 AM, 10:30 AM, 1:00 PM (Español)" },
  { day: "Monday – Friday", time: "12:10 PM" },
  { day: "Saturday", time: "8:00 AM &middot; Vigil 5:30 PM" },
];

export default function Pilgrimage() {
  return (
    <div>
      <PageHero
        eyebrow="Pilgrimage"
        title="Plan your pilgrimage"
        description="Whether you're coming alone, with your family, or leading a parish bus, here is everything you need to plan a meaningful visit."
        image="/images/hero-shrine.jpg"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What is a Pilgrimage?"
            title="More than a visit"
            description="A pilgrimage is a journey undertaken with intention — to pray, to ask, to give thanks, or simply to draw closer to a story that has shaped your own faith. Pilgrims to this Shrine come from every state and from Guatemala itself, walking the same grounds where Blessed Stanley's story is told and where his relics now rest. However you arrive, you are welcome to slow down, pray, and listen."
          />
        </Container>
      </section>

      <section id="visit" className="scroll-mt-24 bg-shrine-parchment py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="flex items-center gap-2 font-display text-2xl font-semibold text-shrine-ink">
                <Clock className="h-5 w-5 text-shrine-maroon-600" aria-hidden="true" />
                Shrine Hours
              </h3>
              <dl className="mt-4 space-y-3">
                {hours.map((item) => (
                  <div key={item.day} className="flex justify-between border-b border-shrine-stone/50 pb-2 text-sm">
                    <dt className="text-shrine-charcoal/70">{item.day}</dt>
                    <dd className="font-semibold text-shrine-ink">{item.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-display text-2xl font-semibold text-shrine-ink">
                <Users className="h-5 w-5 text-shrine-maroon-600" aria-hidden="true" />
                Mass Schedule
              </h3>
              <dl className="mt-4 space-y-3">
                {massTimes.map((item) => (
                  <div key={item.day} className="flex justify-between border-b border-shrine-stone/50 pb-2 text-sm">
                    <dt className="text-shrine-charcoal/70">{item.day}</dt>
                    <dd
                      className="text-right font-semibold text-shrine-ink"
                      dangerouslySetInnerHTML={{ __html: item.time }}
                    />
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-sm border border-shrine-stone/60 bg-shrine-cream p-6">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-shrine-ink">
                <MapPin className="h-5 w-5 text-shrine-maroon-600" aria-hidden="true" />
                Address
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-shrine-charcoal">
                7501 NW Expressway
                <br />
                Oklahoma City, OK 73132
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm text-shrine-charcoal">
                <Phone className="h-4 w-4 text-shrine-maroon-600" aria-hidden="true" /> (405) 555-0128
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-shrine-charcoal">
                <Mail className="h-4 w-4 text-shrine-maroon-600" aria-hidden="true" /> pilgrimage@rothershrine.org
              </p>
              <Button
                href="https://www.google.com/maps/search/?api=key&query=7501+NW+Expressway+Oklahoma+City+OK"
                variant="secondary"
                className="mt-5"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
              </Button>
            </div>
            <div className="overflow-hidden rounded-sm border border-shrine-stone/60 shadow-shrine">
              <iframe
                title="Map to the National Shrine of Blessed Stanley Rother"
                src="https://www.google.com/maps?q=7501+NW+Expressway,+Oklahoma+City,+OK+73132&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-sm border border-shrine-stone/60 bg-shrine-parchment p-8">
            <h3 className="font-display text-2xl font-semibold text-shrine-ink">Individuals & Families</h3>
            <p className="mt-4 text-sm leading-relaxed text-shrine-charcoal">
              No reservation is needed — arrive any day during open hours, pick up a self-guided
              tour map at the Pilgrim Center desk, and take as long as you'd like in the Chapel of
              the Tomb or on Tepeyac Hill. Most individual visits last 45 minutes to an hour.
            </p>
          </div>
          <div className="rounded-sm border border-shrine-stone/60 bg-shrine-parchment p-8">
            <h3 className="font-display text-2xl font-semibold text-shrine-ink">Groups & Parishes</h3>
            <p className="mt-4 text-sm leading-relaxed text-shrine-charcoal">
              Groups of ten or more should request a guided tour at least two weeks in advance.
              Download the planning packet for sample itineraries, bus parking information, and
              options for a group Mass or meal.
            </p>
            <Button href="#" variant="secondary" className="mt-5">
              Download Planning Packet
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
