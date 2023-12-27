import '@testing-library/jest-dom';
import 'jest-extended/all';
import React from 'react';

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

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: { src: string; alt: string; width: number; height: number }) => {
    return React.createElement('img', props);
  },
}));
