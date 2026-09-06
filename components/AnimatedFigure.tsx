"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function AnimatedFigure({
  children,
  className,
  label,
  as: Tag = "div",
}: {
  children: ReactNode;
  className: string;
  label: string;
  as?: "div" | "figure";
}) {
  const ref = useRef<HTMLElement & HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let visible = false;
    const update = () => {
      element.dataset.visible = String(visible && !document.hidden);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    }, { threshold: 0.15 });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <Tag ref={ref} className={`${className} animated-figure`} data-paused={paused}>
      {children}
      <div className="figure-controls">
        <button
          type="button"
          className="figure-motion-toggle"
          aria-label={`${paused ? "Resume" : "Pause"} ${label} animation`}
          onClick={() => setPaused((value) => !value)}
        >
          <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
          {paused ? "Resume motion" : "Pause motion"}
        </button>
        <span className="figure-reduced-motion">Reduced motion enabled</span>
      </div>
    </Tag>
  );
}
