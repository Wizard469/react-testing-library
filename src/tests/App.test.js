import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

describe('Testing component App', () => {
  it('tests if theres 3 fixed navigation links at top of the screen', () => {
    renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: /home/i });
    expect(home).toBeDefined();
    const about = screen.getByRole('link', { name: /about/i });
    expect(about).toBeDefined();
    const Favorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(Favorite).toBeDefined();
  });

  it('tests if the application is redirected to home page when clicked on the Home link',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/about');

      const home = screen.getByRole('link', { name: /home/i });
      userEvent.click(home);

      const h2 = screen.getByRole('heading', { name: /Encountered pokémons/i });
      expect(h2).toBeDefined();
    });

  it(`tests if the application is redirected to
   about page when clicked on the About link`,
  () => {
    renderWithRouter(<App />);

    const about = screen.getByRole('link', { name: /about/i });
    userEvent.click(about);

    const h2 = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(h2).toBeDefined();
  });

  it(`tests if the application is redirected to
   Favorite page when clicked on the Favorite link`,
  () => {
    renderWithRouter(<App />);

    const Favorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(Favorite);

    const h2 = screen.getByRole('heading', { name: /Favorite Pokémon/i });
    expect(h2).toBeDefined();
  });

  it('tests if the application is redirected to 404 page when URL is not found',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/404');

      const h2 = screen.getByRole('heading', { name: /Page requested not found/i });
      expect(h2).toBeDefined();
    });
});
