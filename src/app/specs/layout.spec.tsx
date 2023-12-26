import { render, screen } from '@testing-library/react';

import Layout, { metadata } from '../layout';

jest.mock('next/font/google', () => ({
  Inter: jest.fn().mockReturnValue({
    className: 'inter',
  }),
}));

describe('Layout', () => {
  beforeAll(() => {
    console.error = jest.fn();
  });

  it('should render successfully', () => {
    // Arrange
    const contentTestId = 'content';
    const layout = Layout({ children: <div data-testid={contentTestId}>hi</div> });

    // Act
    render(layout);

    // Assert
    const content = screen.getByTestId(contentTestId);
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent('hi');
  });

  it('should have a default meta', () => {
    expect(metadata).toEqual({
      description: "Mohammad Bagherani's personal website",
      title: 'Mohi Bagherani',
    });
  });
});
