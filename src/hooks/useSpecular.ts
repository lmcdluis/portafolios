import { RefObject, useEffect, useRef } from 'react';

/**
 * Writes --mx / --my onto the panel so the .glass__specular layer can
 * track the pointer. Skipped on touch-only devices and when the user
 * asked for reduced motion.
 */
export function useSpecular<T extends HTMLElement>(enabled = true): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !enabled) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover)').matches) return;

    let frame = 0;
    const onMove = (event: MouseEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const rect = node.getBoundingClientRect();
        if (event.clientY < rect.top - 300 || event.clientY > rect.bottom + 300) return;
        const layer = node.querySelector<HTMLElement>('.glass__specular');
        if (!layer) return;
        layer.style.setProperty('--mx', (((event.clientX - rect.left) / rect.width) * 100).toFixed(1) + '%');
        layer.style.setProperty('--my', (((event.clientY - rect.top) / rect.height) * 100).toFixed(1) + '%');
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [enabled]);

  return ref;
}

export default useSpecular;
