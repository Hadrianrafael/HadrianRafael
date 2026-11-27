"use client";

import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Inclinação máxima em graus. */
  max?: number;
  style?: CSSProperties;
  as?: "div" | "article" | "li";
}

/**
 * Card com inclinação 3D discreta e brilho que acompanha o ponteiro.
 * Só reage a ponteiros precisos (mouse) e respeita prefers-reduced-motion.
 */
export function TiltCard({ children, className = "", max = 4, style, as: Tag = "div" }: TiltCardProps) {
  const ref = useRef<HTMLElement | null>(null);
  const frame = useRef<number | null>(null);

  function canAnimate(event: PointerEvent) {
    return event.pointerType === "mouse" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    if (!canAnimate(event)) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(1000px) rotateX(${((0.5 - y) * max).toFixed(2)}deg) rotateY(${((x - 0.5) * max).toFixed(2)}deg)`;
    });
  }

  function onPointerLeave() {
    if (frame.current) cancelAnimationFrame(frame.current);
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <Tag
      ref={ref as never}
      className={`spotlight transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${className}`}
      style={style}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </Tag>
  );
}
