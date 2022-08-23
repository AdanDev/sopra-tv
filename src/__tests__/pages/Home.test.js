import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../pages/Home';

describe('<Home />', () => {
  test('render Home', () => {
    render(<Home />);

    const appTitle = screen.getByText(/Home/i);
    expect(appTitle).toBeInTheDocument();
  });
});
