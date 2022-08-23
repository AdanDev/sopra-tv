import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../App';

describe('<App />', () => {
  test('render App', () => {
    render(<App />);

    const appTitle = screen.getByText(/SmartUp Xperience/i);
    expect(appTitle).toBeInTheDocument();
  });
});
