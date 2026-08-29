import { useEffect, useState } from 'react';

/** Returns the id of the section currently owning the viewport. */
export function useScrollSpy(ids: string[], offset = 84): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const ratios = new Map<string, number>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        let best: string | null = null;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) { bestRatio = ratio; best = id; }
        });
        setActive(bestRatio > 0 ? best : null);
      },
      { threshold: [0, 0.15, 0.35, 0.6], rootMargin: `-${offset}px 0px -45% 0px` }
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) io.observe(node);
    });
    return () => io.disconnect();
  }, [ids, offset]);

  return active;
}

export default useScrollSpy;
