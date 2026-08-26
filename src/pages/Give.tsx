import { Gift, Landmark, PiggyBank } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { givingOptions } from "../data/content";

export default function Give() {
  return (
    <div>
      <PageHero
        eyebrow="Give"
        title="Support the Shrine's mission"
        description="Your gift helps welcome every pilgrim who walks through the Pilgrim Center doors, and keeps Blessed Stanley's story alive for the next generation."
        image="/images/hero-shrine.jpg"
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="#" variant="primary">
            <Gift className="h-4 w-4" aria-hidden="true" /> Give Now
          </Button>
          <Button to="#qcd" variant="outline-light">
            <PiggyBank className="h-4 w-4" aria-hidden="true" /> Give from an IRA
          </Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Where Your Gift Goes"
            title="Every giving option supports a specific need"
            description="From covering the lights and staffing to funding a future pipe organ, choose the fund that speaks to you."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {givingOptions.map((option) => (
              <div key={option.title} className="flex flex-col rounded-sm border border-shrine-stone/60 bg-shrine-parchment p-6">
                <h3 className="font-display text-lg font-semibold text-shrine-ink">{option.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-shrine-charcoal">{option.description}</p>
                <Button href="#" variant="ghost" className="mt-5 self-start border border-shrine-maroon-200">
                  Give
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="qcd" className="scroll-mt-24 bg-shrine-parchment py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-shrine-maroon-600 text-shrine-gold-300">
              <Landmark className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-shrine-ink sm:text-3xl">
              Qualified Charitable Distributions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-shrine-charcoal">
              If you are 70½ or older, you may be able to make a tax-free gift from your IRA
              directly to the Shrine. Speak with your financial advisor about a Qualified
              Charitable Distribution, and let our development office know so we can properly
              thank you and apply your gift.
            </p>
            <Button href="#" variant="secondary" className="mt-6">
              Learn About QCD Gifts
            </Button>
          </div>
          <div className="rounded-sm border border-shrine-stone/60 bg-shrine-cream p-8">
            <h3 className="font-display text-lg font-semibold text-shrine-ink">Other Ways to Give</h3>
            <ul className="mt-4 space-y-3 text-sm text-shrine-charcoal">
              <li>Mail a check to the Shrine development office</li>
              <li>Set up a recurring monthly gift through Apla's Circle</li>
              <li>Include the Shrine in your estate plan through the Rother Heritage Circle</li>
              <li>Make a major gift through the Tejedores Society</li>
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
}
