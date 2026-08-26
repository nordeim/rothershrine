import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { primaryNav } from "../data/nav";
import { cn } from "../utils/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDesktopMenu(null);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-shrine-maroon-900 text-shrine-cream/90 sm:block">
        <Container className="flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-shrine-gold-300" aria-hidden="true" />
              7501 NW Expressway, Oklahoma City, OK
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-shrine-gold-300" aria-hidden="true" />
              (405) 555-0128
            </span>
          </div>
          <span className="uppercase tracking-[0.2em] text-shrine-gold-300">
            Feast Day &middot; July 28
          </span>
        </Container>
      </div>

      <div
        className={cn(
          "border-b transition-colors duration-300",
          scrolled
            ? "border-shrine-stone/60 bg-shrine-cream/95 backdrop-blur"
            : "border-transparent bg-shrine-cream",
        )}
      >
        <Container className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-shrine-maroon-600 text-shrine-gold-300 shadow-shrine">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <path d="M12 3v18M6 8h12M4 21c1.5-3 4-4 8-4s6.5 1 8 4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="6" r="2.4" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold tracking-tight text-shrine-maroon-700 sm:text-xl">
                Blessed Stanley Rother
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.3em] text-shrine-charcoal/70">
                National Shrine
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDesktopMenu(item.label)}
                onMouseLeave={() => item.children && setOpenDesktopMenu(null)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-semibold uppercase tracking-wide text-shrine-charcoal transition-colors hover:text-shrine-maroon-600",
                      isActive && "text-shrine-maroon-600",
                    )
                  }
                >
                  {item.label}
                  {item.children ? <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                </NavLink>
                {item.children && openDesktopMenu === item.label ? (
                  <div className="absolute left-0 top-full w-64 rounded-sm border border-shrine-stone/60 bg-shrine-cream py-2 shadow-shrine">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block px-4 py-2 text-sm text-shrine-charcoal hover:bg-shrine-parchment hover:text-shrine-maroon-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button to="/pilgrimage#visit" variant="ghost" className="!px-4 !py-2 normal-case">
              Plan Your Visit
            </Button>
            <Button to="/give" variant="primary" className="!px-5 !py-2.5">
              Give
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-shrine-maroon-600 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>
      </div>

      {mobileOpen ? (
        <div className="border-b border-shrine-stone/60 bg-shrine-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <div key={item.label} className="border-b border-shrine-stone/40 pb-2">
                <Link
                  to={item.to}
                  className="block py-2 text-sm font-semibold uppercase tracking-wide text-shrine-charcoal"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="ml-3 flex flex-col gap-1 pb-1">
                    {item.children.map((child) => (
                      <Link key={child.label} to={child.to} className="py-1 text-sm text-shrine-charcoal/80">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button to="/pilgrimage#visit" variant="secondary">
                Plan Your Visit
              </Button>
              <Button to="/give" variant="primary">
                Give
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
