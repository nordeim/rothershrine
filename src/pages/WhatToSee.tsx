import { PageHero } from "../components/PageHero";
import { Container } from "../components/ui/Container";
import { whatToSee } from "../data/content";
import { cn } from "../utils/cn";

export default function WhatToSee() {
  return (
    <div>
      <PageHero
        eyebrow="What to See"
        title="A campus built for pilgrimage"
        description="Three spaces, one journey — from welcome, to worship, to the gardens of Tepeyac Hill."
        image="/images/hero-shrine.jpg"
      />

      {whatToSee.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={cn("scroll-mt-24 py-20 sm:py-24", index % 2 === 1 && "bg-shrine-parchment")}
        >
          <Container
            className={cn(
              "grid gap-12 lg:grid-cols-2 lg:items-center",
              index % 2 === 1 && "lg:[&>*:first-child]:order-2",
            )}
          >
            <img
              src={section.image}
              alt={section.imageAlt}
              className="h-80 w-full rounded-sm object-cover shadow-shrine sm:h-[26rem]"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-shrine-maroon-500">
                {String(index + 1).padStart(2, "0")} &middot; What to See
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-shrine-ink sm:text-4xl">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-shrine-charcoal">{section.summary}</p>
              <ul className="mt-6 space-y-3">
                {section.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-sm text-shrine-charcoal">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-shrine-gold-500" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ))}
    </div>
  );
}
