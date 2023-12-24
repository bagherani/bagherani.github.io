import { render, screen } from '@testing-library/react';

import Page from '../page';

describe('Page', () => {
  it('should render successfully', () => {
    // Arrange
    const headingId = 'heading';

    // Act
    render(<Page />);

    // Assert
    const heading = screen.getByTestId(headingId);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('MOHI BAGHERANI');
  });
});
