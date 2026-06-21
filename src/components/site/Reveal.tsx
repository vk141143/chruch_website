import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  direction?: Direction;
  once?: boolean;
}

const HIDDEN: Record<Direction, string> = {
  up:    "opacity-0 translate-y-10 blur-[2px]",
  down:  "opacity-0 -translate-y-8",
  left:  "opacity-0 -translate-x-10",
  right: "opacity-0 translate-x-10",
  scale: "opacity-0 scale-90",
  fade:  "opacity-0",
};

const SHOWN = "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0";

export function Reveal({
  children, delay = 0, className = "",
  as: Tag = "div", direction = "up", once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
        visible ? SHOWN : HIDDEN[direction]
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
