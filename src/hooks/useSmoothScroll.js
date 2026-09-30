import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId = 0;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const handleLenisStop = () => lenis.stop();
    const handleLenisStart = () => lenis.start();
    const handleHamburgerChange = (e) => {
      if (e.detail && typeof e.detail.isOpen === 'boolean') {
        if (e.detail.isOpen) {
          lenis.stop();
        } else {
          lenis.start();
        }
      }
    };

    window.addEventListener('lenis:stop', handleLenisStop);
    window.addEventListener('lenis:start', handleLenisStart);
    window.addEventListener('hamburgerStateChange', handleHamburgerChange);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('lenis:stop', handleLenisStop);
      window.removeEventListener('lenis:start', handleLenisStart);
      window.removeEventListener('hamburgerStateChange', handleHamburgerChange);
      lenis.destroy();
    };
  }, []);
};
