import { render, screen } from '@testing-library/react';

import { GoogleAnalytics } from '../GoogleAnalytics';

describe('GoogleAnalytics', () => {
  it('should render the google-analytics-script', () => {
    // Arrange
    const gtmScript = 'google-analytics-script';

    // Act
    render(<GoogleAnalytics />);

    // Assert
    const script = screen.getByTestId(gtmScript);
    expect(script).toBeInTheDocument();
  });

  it('should render the google-analytics-inline-script', () => {
    // Arrange
    const gtmScript = 'google-analytics-inline-script';

    // Act
    render(<GoogleAnalytics />);

    // Assert
    const script = screen.getByTestId(gtmScript);
    expect(script).toBeInTheDocument();
  });
});
