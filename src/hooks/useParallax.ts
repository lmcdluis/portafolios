import { RefObject, useEffect, useRef } from 'react';

/** Translates the element against scroll at `factor` speed (rAF-throttled). */
export function useParallax<T extends HTMLElement>(factor: number): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        node.style.transform = 'translate3d(0,' + (-(window.scrollY || 0) * factor).toFixed(1) + 'px,0)';
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [factor]);

  return ref;
}

export default useParallax;
