import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../constants';

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < parseInt(BREAKPOINTS.TABLET));
      setIsTablet(width >= parseInt(BREAKPOINTS.TABLET) && width < parseInt(BREAKPOINTS.DESKTOP));
      setIsDesktop(width >= parseInt(BREAKPOINTS.DESKTOP));
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return { isMobile, isTablet, isDesktop };
};
