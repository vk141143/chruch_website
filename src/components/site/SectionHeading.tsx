interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center, light }: Props) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
          <span className="gold-divider" />
          <span className={`text-xs font-semibold tracking-[0.3em] uppercase ${light ? "text-gold" : "text-gold"}`}>
            {eyebrow}
          </span>
          <span className="gold-divider" />
        </div>
      )}
      <h2 className={`mt-4 font-serif text-4xl md:text-5xl leading-tight ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed ${light ? "text-white/75" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
