import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyList from '../../pages/MyList';

describe('<MyList />', () => {
  test('render MyList', () => {
    render(<MyList />);

    const appTitle = screen.getByText(/MyList/i);
    expect(appTitle).toBeInTheDocument();
  });
});
