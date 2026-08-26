import type { ReactNode } from "react";
import { Container } from "./ui/Container";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, image, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-shrine-maroon-900 py-20 sm:py-28">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-shrine-maroon-900 via-shrine-maroon-900/85 to-shrine-maroon-900/60" />
      <Container className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-shrine-gold-300">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold text-shrine-cream sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-shrine-cream/80">{description}</p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
