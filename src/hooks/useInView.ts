import { RefObject, useEffect, useRef, useState } from 'react';

/**
 * Fires once, the first time the element crosses the viewport.
 * Falls back to `true` when IntersectionObserver is unavailable so
 * content is never left invisible.
 */
export function useInView<T extends HTMLElement>(
  threshold = 0.08,
  rootMargin = '0px 0px -10% 0px'
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

export default useInView;
