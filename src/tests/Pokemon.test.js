import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

describe('Testing component Pokemon',
  () => {
    it('tests if a card is rendered with the informations of a certain pokemon',
      () => {
        renderWithRouter(<App />);

        expect(screen.getByTestId('pokemon-name')).toHaveTextContent('Pikachu');
        expect(screen.getByText('Pikachu')).toBeDefined();
        expect(screen.getByTestId('pokemon-type')).toHaveTextContent('Electric');
        expect(screen.getAllByText('Electric')[0]).toBeDefined();
        expect(screen.getByText('Average weight: 6.0 kg')).toBeDefined();
        expect(screen.getByRole('img').src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
        expect(screen.getByRole('img').alt).toBe('Pikachu sprite');
      });

    it(`Test if the pokemons card on the Pokédex,
    contains a link to show details of this pokemon`,
    () => {
      renderWithRouter(<App />);

      const pikachuLink = screen.getByRole('link', { name: /More details/i }).href;
      expect(pikachuLink).toContain('/pokemons/25');
    });

    it(`Test if by clicking on the link 'details',
    you are redirected to the page of the pokemon's details`,
    () => {
      renderWithRouter(<App />);

      userEvent.click(screen.getByRole('link', { name: /More details/i }));
      expect(screen.getByRole('heading', { name: /Pikachu Details/i })).toBeDefined();
    });

    it('Test if the URL is showed on the browser to/pokemon/<id>',
      () => {
        const { history } = renderWithRouter(<App />);

        userEvent.click(screen.getByRole('link', { name: /More details/i }));
        expect(history.location.pathname).toBe('/pokemons/25');
      });

    it('Test if the URL is showed on the browser to/pokemon/<id>',
      () => {
        renderWithRouter(<App />);

        userEvent.click(screen.getByRole('link', { name: /More details/i }));
        userEvent.click(screen.getByLabelText('Pokémon favoritado?'));
        const favorite = screen.getByAltText('Pikachu is marked as favorite').src;
        expect(favorite).toContain('/star-icon.svg');
      });
  });
