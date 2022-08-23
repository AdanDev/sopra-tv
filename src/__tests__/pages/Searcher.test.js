import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Searcher from '../../pages/Searcher';

describe('<Searcher />', () => {
  test('render Searcher', () => {
    render(<Searcher />);

    const appTitle = screen.getByText(/Searcher/i);
    expect(appTitle).toBeInTheDocument();
  });
});
