'use client';

import { useEffect, useRef } from 'react';
import { animate, stagger, utils } from 'animejs';

export default function FloatingShapes() {
  const ref = useRef(null);

  useEffect(() => {
    const shapes = ref.current?.querySelectorAll('.shape');
    if (!shapes?.length) return;

    const animation = animate(shapes, {
      translateY: () => utils.random(-30, 30),
      translateX: () => utils.random(-20, 20),
      rotate: () => utils.random(-20, 20),
      scale: [0.8, 1.15],
      opacity: [0.25, 0.55],
      delay: stagger(120),
      duration: () => utils.random(2500, 4500),
      ease: 'inOutSine',
      alternate: true,
      loop: true,
    });

    return () => animation.pause();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="shape absolute w-20 h-20 rounded-full bg-white/20 border border-white/30"
          style={{
            left: `${10 + i * 11}%`,
            top: `${20 + (i % 4) * 18}%`,
          }}
        />
      ))}
    </div>
  );
}