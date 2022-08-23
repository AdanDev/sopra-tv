import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

describe('<Header />', () => {
  beforeEach(() => {
    render(<Header />, { wrapper: BrowserRouter });
  });

  test('render Header', () => {
    const appTitle = screen.getByText(/SmartUp Xperience/i);
    expect(appTitle).toBeInTheDocument();
  });

  test('checking menu buttons', () => {
    const menuButton = screen.getByRole('button', { name: /faBars/i });
    fireEvent.click(menuButton);

    const homeButton = screen.getByRole('button', { name: /Inicio/i });
    const searcherButton = screen.getByRole('button', { name: /Buscador/i });
    const seriesButton = screen.getByRole('button', { name: /Series TV/i });
    const filmsButton = screen.getByRole('button', { name: /Películas/i });
    const mylistButton = screen.getByRole('button', { name: /Mi lista/i });
    const myprofileButton = screen.getByRole('button', { name: /Mi perfil/i });

    expect(homeButton).toBeInTheDocument();
    expect(searcherButton).toBeInTheDocument();
    expect(seriesButton).toBeInTheDocument();
    expect(filmsButton).toBeInTheDocument();
    expect(mylistButton).toBeInTheDocument();
    expect(myprofileButton).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: /faXmark/i });
    fireEvent.click(closeButton);
  });
});
