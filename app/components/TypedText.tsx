import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedText({ strings }: { strings: string[] }) {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed: 80,
      backSpeed: 40,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-blue-950 dark:text-rose-300">
      <span ref={el} />
    </div>
  );
}