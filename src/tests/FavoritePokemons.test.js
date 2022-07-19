import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

describe('Testing component FavoritePokemons',
  () => {
    it(`tests if the message "No favorite pokemon found",
     is showed on the screen in case the person has no favorite pokemon`,
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/favorites');

      const paragraph = screen.getByText(/No favorite pokemon found/i);
      expect(paragraph).toBeDefined();
    });

    it(`tests if the message "No favorite pokemon found",
     is showed on the screen in case the person has no favorite pokemon`,
    () => {
      const { history } = renderWithRouter(<App />);

      const details = screen.getByRole('link', { name: /More details/i });
      userEvent.click(details);
      expect(history.location.pathname).toBe('/pokemons/25');

      const checkbox = screen.getByLabelText(/Pokémon favoritado/i);
      userEvent.click(checkbox);
      history.push('/favorites');

      const starImg = screen.getAllByAltText('Pikachu is marked as favorite');
      expect(starImg).toBeDefined();
    });
  });
