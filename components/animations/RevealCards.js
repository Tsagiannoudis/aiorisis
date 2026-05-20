'use client';

import React from 'react';
import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

export default function RevealCards({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.reveal-card');
    const targets = cards ? Array.from(cards) : [];
    if (!targets.length) return;

    const animation = animate(targets, {
      translateY: [40, 0],
      opacity: [0, 1],
      scale: [0.96, 1],
      delay: stagger(140),
      duration: 900,
      ease: 'outCubic',
    });

    return () => animation.pause();
  }, []);

  // Κλωνοποιούμε κάθε παιδικό στοιχείο και προσθέτουμε την κλάση 'reveal-card'
  const childrenWithRevealClass = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Ελέγχουμε αν το παιδί είναι έγκυρο React element
      return React.cloneElement(child, { className: `${child.props.className || ''} reveal-card`.trim() });
    }
    return child; // Επιστρέφουμε το παιδί ως έχει αν δεν είναι React element
  });
  return <div ref={ref} className={className}>{childrenWithRevealClass}</div>;
}