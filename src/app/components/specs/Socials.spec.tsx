import { render, screen } from '@testing-library/react';

import { Socials } from '../Socials';

describe('Socials', () => {
  beforeEach(() => {
    // Act
    render(<Socials />);
  });

  it.each(['linkedin', 'youtube', 'github', 'x'])(
    'should have a youtube link',
    (socialItem) => {
      // Assert
      const element = screen.getByTestId(`${socialItem}-link`);
      expect(element).toBeInTheDocument();
    },
  );
});
