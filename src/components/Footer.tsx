import { Link } from "react-router-dom";
import { Camera, Mail, MapPin, MessageCircle, Phone, Video } from "lucide-react";
import { Container } from "./ui/Container";
import { footerNav } from "../data/nav";

export function Footer() {
  return (
    <footer className="bg-shrine-maroon-900 text-shrine-cream/85">
      <div className="divider-weave h-1.5 w-full" aria-hidden="true" />
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-shrine-gold-500 text-shrine-maroon-900">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <path d="M12 3v18M6 8h12M4 21c1.5-3 4-4 8-4s6.5 1 8 4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="6" r="2.4" />
              </svg>
            </span>
            <span className="font-display text-lg font-semibold text-shrine-cream">
              Blessed Stanley Rother Shrine
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-shrine-cream/70">
            A National Shrine of the Archdiocese of Oklahoma City, welcoming pilgrims to learn the
            story of the shepherd who stayed, and to pray at his tomb.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[MessageCircle, Camera, Video].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Shrine social media"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-shrine-cream/25 text-shrine-cream/80 transition-colors hover:border-shrine-gold-300 hover:text-shrine-gold-300"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-shrine-gold-300">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerNav.slice(0, 5).map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-shrine-cream/75 hover:text-shrine-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-shrine-gold-300">Get Involved</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerNav.slice(5).map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-shrine-cream/75 hover:text-shrine-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-shrine-gold-300">Visit Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-shrine-cream/75">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-shrine-gold-300" aria-hidden="true" />
              7501 NW Expressway, Oklahoma City, OK 73132
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-shrine-gold-300" aria-hidden="true" />
              (405) 555-0128
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-shrine-gold-300" aria-hidden="true" />
              info@rothershrine.org
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-shrine-cream/10 py-5">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-shrine-cream/55 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} National Shrine of Blessed Stanley Rother. All rights reserved.</p>
          <p>An Archdiocese of Oklahoma City Shrine &middot; Feast Day, July 28</p>
        </Container>
      </div>
    </footer>
  );
}
