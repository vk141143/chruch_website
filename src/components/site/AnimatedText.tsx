import { motion, useReducedMotion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  mode?: "words" | "chars";
}

export function AnimatedText({ text, className = "", delay = 0, mode = "words" }: Props) {
  const reduce = useReducedMotion();
  const tokens = mode === "words" ? text.split(" ") : text.split("");
  const separator = mode === "words" ? " " : "";

  if (reduce) return <span className={className}>{text}</span>;

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}>
      {tokens.map((token, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: "60%", filter: "blur(4px)" }}
          animate={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
          transition={{
            duration: 0.6,
            delay: delay / 1000 + i * (mode === "words" ? 0.08 : 0.04),
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {token}{separator}
        </motion.span>
      ))}
    </span>
  );
}
