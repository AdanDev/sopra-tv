import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyProfile from '../../pages/MyProfile';

describe('<MyProfile />', () => {
  test('render MyProfile', () => {
    render(<MyProfile />);

    const appTitle = screen.getByText(/MyProfile/i);
    expect(appTitle).toBeInTheDocument();
  });
});
