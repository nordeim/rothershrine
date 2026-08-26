import { CalendarHeart, Cross, Languages, Wheat } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/ui/Button";
import { lifeTimeline } from "../data/content";

const highlights = [
  {
    icon: Wheat,
    title: "Oklahoma Farm Boy",
    text: "Raised on a wheat and dairy farm near Okarche, he brought a farmer's practicality to everything he later built in Guatemala.",
  },
  {
    icon: Languages,
    title: "Learned Tz'utujil",
    text: "One of the only outsiders ever to master the difficult, largely unwritten Tz'utujil Maya language, which he used to help translate Scripture.",
  },
  {
    icon: Cross,
    title: "First US-Born Martyr",
    text: "Recognized by Pope Francis as a martyr killed in hatred of the faith, and beatified in 2017 as the first US-born priest to reach the altar.",
  },
  {
    icon: CalendarHeart,
    title: "Feast Day, July 28",
    text: "The Church now honors him each July 28, the anniversary of his death in the rectory at Santiago Atitlán in 1981.",
  },
];

export default function AboutRother() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="Blessed Stanley Rother"
        description="Priest, farmer, translator, and martyr — the story of an ordinary Oklahoma man who became an extraordinary shepherd to the people of Guatemala."
        image="/images/hero-shrine.jpg"
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-base leading-relaxed text-shrine-charcoal">
            <SectionHeading eyebrow="His Life" title="From Okarche to Santiago Atitlán" />
            <p>
              Stanley Francis Rother was born March 27, 1935, the eldest of four children on a
              wheat and dairy farm outside Okarche, Oklahoma. He grew up doing the unglamorous work
              of a farm — repairing machinery, tending livestock, rising early — habits that would
              later serve him more than any classroom ever could.
            </p>
            <p>
              Seminary was not easy for him. Latin coursework proved so difficult that one seminary
              dismissed him from formation. He persisted, transferred, and was ordained a priest of
              the Diocese of Oklahoma City on May 25, 1963. Parishioners who knew him in his early
              assignments remembered a priest of few words but constant service, more comfortable
              with a wrench than a microphone.
            </p>
            <p>
              In 1968, he volunteered for the Oklahoma diocesan mission in Santiago Atitlán,
              Guatemala, a parish serving tens of thousands of Tz'utujil Maya on the shore of Lake
              Atitlán. He arrived speaking neither Spanish nor Tz'utujil, and left, thirteen years
              later, as one of the only outsiders in the region's history to master the Tz'utujil
              language well enough to help translate the New Testament into it.
            </p>
            <p>
              Known to his parish as "Padre Apla's" — a Tz'utujil pronunciation of his middle name,
              Francisco — he worked beside farmers in their fields, helped build the region's first
              hospital, a school, a farmers' cooperative, and a Catholic radio station, all while
              serving as pastor to a parish larger than most American dioceses.
            </p>
            <p>
              As Guatemala's civil war deepened in the late 1970s, catechists and lay leaders of his
              parish began disappearing. Father Rother's name reached a military death list. He
              returned to Oklahoma for a matter of weeks in early 1981 at the urging of his bishop
              and family, but he could not stay away. He returned to Santiago Atitlán for Holy Week,
              reportedly telling those who worried for him that a shepherd does not run at the first
              sign of danger.
            </p>
            <p>
              In the early hours of July 28, 1981, three armed men entered the rectory and killed
              him. He was 46. At his family's request, his body was returned to Oklahoma for burial
              in Okarche. At the request of his Guatemalan parishioners, his heart remains enshrined
              in the church he had served, a sign that part of him never left.
            </p>
            <p>
              Pope Francis formally recognized his martyrdom in December 2016, and he was beatified
              in Oklahoma City on September 23, 2017 — the first martyr, and the first priest born
              in the United States, ever to be beatified.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-sm border border-shrine-stone/60 bg-shrine-parchment p-6">
              <h3 className="font-display text-lg font-semibold text-shrine-maroon-700">At a Glance</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-shrine-stone/50 pb-2">
                  <dt className="text-shrine-charcoal/70">Born</dt>
                  <dd className="text-right font-semibold text-shrine-ink">March 27, 1935 — Okarche, OK</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-shrine-stone/50 pb-2">
                  <dt className="text-shrine-charcoal/70">Ordained</dt>
                  <dd className="text-right font-semibold text-shrine-ink">May 25, 1963</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-shrine-stone/50 pb-2">
                  <dt className="text-shrine-charcoal/70">Mission Began</dt>
                  <dd className="text-right font-semibold text-shrine-ink">1968, Santiago Atitlán</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-shrine-stone/50 pb-2">
                  <dt className="text-shrine-charcoal/70">Died</dt>
                  <dd className="text-right font-semibold text-shrine-ink">July 28, 1981</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-shrine-charcoal/70">Beatified</dt>
                  <dd className="text-right font-semibold text-shrine-ink">September 23, 2017</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-sm bg-shrine-maroon-700 p-6 text-shrine-cream">
              <h3 className="font-display text-lg font-semibold">Visit His Tomb</h3>
              <p className="mt-3 text-sm leading-relaxed text-shrine-cream/80">
                Blessed Stanley's relics rest in the Chapel of the Tomb within the Shrine Church,
                open daily for quiet, personal prayer.
              </p>
              <Button to="/pilgrimage#visit" variant="primary" className="mt-5">
                Plan Your Visit
              </Button>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-shrine-parchment py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Why He Is Remembered" title="A shepherd's life, four marks" align="center" className="mx-auto" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-sm border border-shrine-stone/60 bg-shrine-cream p-6 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-shrine-maroon-600 text-shrine-gold-300">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-shrine-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-shrine-charcoal">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Timeline" title="A life in eight chapters" align="center" className="mx-auto" />
          <ol className="relative mx-auto mt-14 max-w-3xl border-l border-shrine-stone/70 pl-8">
            {lifeTimeline.map((entry) => (
              <li key={entry.title} className="relative mb-10 last:mb-0">
                <span className="absolute -left-[38px] flex h-6 w-6 items-center justify-center rounded-full bg-shrine-gold-500 text-[10px] font-bold text-shrine-maroon-900 ring-4 ring-shrine-cream">
                  •
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-shrine-maroon-600">{entry.year}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-shrine-ink">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-shrine-charcoal">{entry.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </div>
  );
}
