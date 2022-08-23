import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Films from '../../pages/Films';

describe('<Films />', () => {
  test('render Films', () => {
    render(<Films />);

    const appTitle = screen.getByText(/Films/i);
    expect(appTitle).toBeInTheDocument();
  });
});
