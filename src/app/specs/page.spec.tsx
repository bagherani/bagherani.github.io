import { render, screen } from '@testing-library/react';

import Page from '../page';

describe('Page', () => {
  it('should render successfully', () => {
    // Arrange
    const mainSection = 'main';

    // Act
    render(<Page />);

    // Assert
    expect(screen.getByTestId(mainSection)).toBeInTheDocument();
  });
});
