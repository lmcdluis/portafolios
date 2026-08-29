import { useEffect } from 'react';

/**
 * The trailing ring + dot, and the slight pull on small controls.
 * Mounts nothing on touch devices or under prefers-reduced-motion.
 */
export function useMagneticCursor(enabled = true): void {
  useEffect(() => {
    if (!enabled) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ring = document.querySelector<HTMLElement>('.cursor-ring');
    const dot = document.querySelector<HTMLElement>('.cursor-dot');
    if (!ring || !dot) return;

    document.body.setAttribute('data-cursor-on', '1');

    let tx = -100, ty = -100, rx = -100, ry = -100;
    let raf = window.requestAnimationFrame(function loop() {
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      ring.style.transform = `translate3d(${rx.toFixed(1)}px,${ry.toFixed(1)}px,0)`;
      dot.style.transform = `translate3d(${tx.toFixed(1)}px,${ty.toFixed(1)}px,0)`;
      raf = window.requestAnimationFrame(loop);
    });

    const onMove = (event: MouseEvent) => {
      tx = event.clientX;
      ty = event.clientY;
      ring.classList.add('is-visible');
      dot.classList.add('is-visible');
    };
    const onLeave = () => {
      ring.classList.remove('is-visible');
      dot.classList.remove('is-visible');
    };

    const grow = (size: number, fill: boolean) => {
      ring.style.width = size + 'px';
      ring.style.height = size + 'px';
      ring.style.margin = `${-size / 2}px 0 0 ${-size / 2}px`;
      ring.style.background = fill ? 'var(--acc-tint)' : 'transparent';
    };

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('a, button, input, textarea, [data-magnet]')
    );
    const pullables = targets.filter((el) => el.hasAttribute('data-magnet'));
    const disposers: Array<() => void> = [];

    targets.forEach((el) => {
      const enter = () => grow(el.classList.contains('project-card') ? 58 : 44, true);
      const leave = () => grow(26, false);
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
      disposers.push(() => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    });

    pullables.forEach((el) => {
      const move = (event: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const dx = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
        const dy = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
        el.style.transform = `translate(${(dx * 10).toFixed(1)}px,${(dy * 8).toFixed(1)}px)`;
      };
      const reset = () => { el.style.transform = ''; };
      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', reset);
      disposers.push(() => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', reset);
      });
    });

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      disposers.forEach((fn) => fn());
      document.body.removeAttribute('data-cursor-on');
    };
  }, [enabled]);
}

export default useMagneticCursor;
