"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Counter({ value, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: value,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.floor(obj.val) + suffix;
          },
        });
      },
    });

    return () => st.kill();
  }, [value, suffix, duration]);

  return (
    <span ref={ref}>
      0{suffix}
    </span>
  );
}