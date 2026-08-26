import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Container } from "../components/ui/Container";
import { faqs } from "../data/content";
import { cn } from "../utils/cn";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Answers for first-time pilgrims, returning visitors, and group leaders alike."
        image="/images/hero-shrine.jpg"
      />

      <section className="py-20 sm:py-24">
        <Container className="mx-auto max-w-3xl">
          <div className="divide-y divide-shrine-stone/60 rounded-sm border border-shrine-stone/60 bg-shrine-parchment">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="font-display text-lg font-semibold text-shrine-ink">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-shrine-maroon-600 transition-transform",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen ? (
                    <div id={`faq-panel-${index}`} className="px-6 pb-6 text-sm leading-relaxed text-shrine-charcoal">
                      {faq.answer}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
