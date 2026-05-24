'use client';

import { useEffect, useRef } from 'react';
import { animate, utils } from 'animejs';

export default function SquareBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const squares = containerRef.current.querySelectorAll('.square');

    const animation = animate(squares, {
      x: ($el) => Number($el.getAttribute('data-x')),
      y: (_, i) => 50 + -50 * i,
      scale: (_, i, t) => (t.length - i) * 0.75,
      rotate: () => utils.random(-360, 360),
      borderRadius: () => `+=${utils.random(0, 8)}`,
      duration: () => utils.random(1200, 1800),
      delay: () => utils.random(0, 400),
      ease: 'outElastic(1, .5)',
      loop: true,
      alternate: true,
    });

    return () => animation.pause();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[600px] h-[600px]"
    >
      {[0, 1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="square absolute top-1/2 left-1/2 w-24 h-24 bg-white border border-white"
          data-x={item * 60}
        />
      ))}
    </div>
  );
}