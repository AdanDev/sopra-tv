import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Series from '../../pages/Series';

describe('<Series />', () => {
  test('render Series', () => {
    render(<Series />);

    const appTitle = screen.getByText(/Series/i);
    expect(appTitle).toBeInTheDocument();
  });
});
