import Aos from 'aos';

// Initialize AOS with custom duration
export const initializeAOS = (duration = 2000) => {
  Aos.init({ duration });
};

// Scroll to top of page
export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// Check if device is mobile
export const isMobileDevice = () => {
  return window.innerWidth <= 768;
};

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
