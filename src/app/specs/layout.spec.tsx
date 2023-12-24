import { render, screen } from '@testing-library/react';

import Layout from '../layout';

jest.mock('next/font/google', () => ({
  Inter: jest.fn().mockReturnValue({
    className: 'inter',
  }),
}));

describe('Layout', () => {
  it('should render successfully', () => {
    // Arrange
    const contentTestId = 'content';
    const layout = (
      <Layout>
        <div data-testid={contentTestId}>hi</div>
      </Layout>
    );

    // Act
    render(layout);

    // Assert
    const conetnt = screen.getByTestId(contentTestId);
    expect(conetnt).toBeInTheDocument();
    expect(conetnt).toHaveTextContent('hi');
  });
});
