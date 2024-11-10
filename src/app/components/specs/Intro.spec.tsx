import { render, screen } from '@testing-library/react';

import { Intro } from '../Intro';

describe('Intro', () => {
  beforeEach(() => {
    // Act
    render(<Intro />);
  });

  it('should have a section', () => {
    // Assert
    const element = screen.getByTestId('home');
    expect(element).toBeInTheDocument();
  });

  it('should have a heading', () => {
    // Assert
    const element = screen.getByTestId('heading');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('H1');
    expect(element).toHaveTextContent('MOHI BAGHERANI');
  });

  it('should have a heading', () => {
    // Assert
    const element = screen.getByTestId('description');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('P');
    expect(element).toHaveTextContent('Software Engineer');
  });

  it('should have an avator', () => {
    // Assert
    const element = screen.getByTestId('avatar');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('IMG');
    expect(element).toHaveAttribute('alt', 'mohi bagherani profile picture');
  });
});
