import { useEffect } from 'react';

const usePerformance = () => {
  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== 'development') return;

    // Monitor Largest Contentful Paint (LCP)
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry?.startTime);
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // Browser doesn't support this API
    }

    // Monitor First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // Browser doesn't support this API
    }

    // Monitor Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      console.log('CLS:', clsValue);
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Browser doesn't support this API
    }

    // Monitor Time to Interactive (TTI)
    const ttiObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        console.log('TTI:', entry.startTime);
      });
    });

    try {
      ttiObserver.observe({ entryTypes: ['interaction'] });
    } catch (e) {
      // Browser doesn't support this API
    }

    // Monitor custom performance marks
    const measureObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'measure') {
          const name = entry.name;
          const measure = performance.getEntriesByName(name)[0];
          console.log(`${name}:`, measure?.duration);
        }
      });
    });

    try {
      measureObserver.observe({ entryTypes: ['measure'] });
    } catch (e) {
      console.warn('Performance measure observer not supported');
    }

    // Cleanup
    return () => {
      try {
        observer.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        ttiObserver.disconnect();
        measureObserver.disconnect();
      } catch (e) {
        // Ignore cleanup errors
      }
    };
  }, []);
};

export default usePerformance;
