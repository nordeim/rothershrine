import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

/**
 * Fades + slides content into view on scroll via IntersectionObserver.
 * Renders visible immediately if IntersectionObserver is unavailable
 * (older browsers) so content is never permanently hidden.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const nodeRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const setNode = (node: HTMLElement | null) => {
    nodeRef.current = node;
  };

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const sharedProps = {
    className: cn("reveal", visible && "reveal-visible", className),
    style: { transitionDelay: visible ? `${delay}ms` : "0ms" },
  };

  if (as === "li") {
    return (
      <li ref={setNode} {...sharedProps}>
        {children}
      </li>
    );
  }

  return (
    <div ref={setNode} {...sharedProps}>
      {children}
    </div>
  );
}
