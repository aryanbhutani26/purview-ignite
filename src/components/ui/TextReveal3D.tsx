import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TextReveal3DProps {
  children: string;
  className?: string;
}

export const TextReveal3D = ({ children, className = "" }: TextReveal3DProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"]
  });

  const words = children.split(" ");

  return (
    <div ref={ref} className={className}>
      <div className="flex flex-wrap">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </div>
    </div>
  );
};

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [20, 0]);
  const rotateX = useTransform(progress, range, [45, 0]);

  return (
    <span className="relative mr-2 mt-1 inline-block" style={{ perspective: "1000px" }}>
      <motion.span
        style={{ opacity, y, rotateX }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
};

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const CountUp = ({ end, duration = 2, suffix = "", prefix = "", className = "" }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.5"]
  });

  const value = useTransform(scrollYProgress, [0, 1], [0, end]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      <motion.span>{value}</motion.span>
      {suffix}
    </motion.span>
  );
};
