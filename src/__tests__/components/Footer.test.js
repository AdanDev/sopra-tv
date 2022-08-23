import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  test('render Footer', () => {
    render(<Footer />);

    const appTitle = screen.getByText(/Sopra Films©/i);
    expect(appTitle).toBeInTheDocument();
  });
});
