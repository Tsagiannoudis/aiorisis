'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function LotusPulse() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const animation = animate(ref.current, {
      scale: [0.95, 1.08],
      rotate: [0, 8],
      opacity: [0.12, 0.24],
      duration: 4000,
      ease: 'inOutSine',
      alternate: true,
      loop: true,
    });

    return () => animation.pause();
  }, []);

  return (
    <div ref={ref} className="absolute -right-24 -bottom-24 pointer-events-none">
      <Image
        src="/lotus-white4.png"
        alt=""
        width={520}
        height={520}
        className="select-none"
      />
    </div>
  );
}