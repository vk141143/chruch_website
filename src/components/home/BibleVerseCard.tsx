import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Share2, Bookmark, BookmarkCheck, Copy, Check } from "lucide-react";

interface Props {
  verse: string;
  reference: string;
  context?: string;
}

export function BibleVerseCard({ verse, reference, context }: Props) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(`"${verse}" — ${reference}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-3xl bg-navy p-10 md:p-14 text-center shadow-elegant"
    >
      {/* Decorative rings */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full border border-gold/10" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full border border-gold/10" />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <Quote className="mx-auto h-10 w-10 text-gold" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-7 font-serif text-2xl md:text-4xl lg:text-5xl leading-snug text-white"
      >
        &ldquo;{verse}&rdquo;
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mt-6 text-sm tracking-[0.35em] uppercase text-gold font-semibold"
      >
        — {reference}
      </motion.p>

      {context && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-white/65"
        >
          {context}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.85 }}
        className="mt-9 flex items-center justify-center gap-3"
      >
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 hover:border-gold hover:text-gold transition-colors"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy Verse"}
        </button>
        <button
          onClick={() => setSaved((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 hover:border-gold hover:text-gold transition-colors"
        >
          {saved ? <BookmarkCheck className="h-4 w-4 text-gold" /> : <Bookmark className="h-4 w-4" />}
          {saved ? "Saved" : "Save Verse"}
        </button>
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({ text: `"${verse}" — ${reference}` });
            } else handleCopy();
          }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 hover:border-gold hover:text-gold transition-colors"
        >
          <Share2 className="h-4 w-4" />
          Share
        </button>
      </motion.div>
    </motion.div>
  );
}
