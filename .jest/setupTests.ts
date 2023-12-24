import '@testing-library/jest-dom';
import 'jest-extended/all';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: () => ({
    matches: false,
  }),
});

Object.defineProperty(window, 'location', {
  value: {
    ...window.location,
    href: '',
  },
  writable: true,
});
