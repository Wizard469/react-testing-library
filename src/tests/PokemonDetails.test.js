import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

describe('Testing component PokemonDetails',
  () => {
    it('Test if the selected Pokemons detailed informations are showed on the screen',
      () => {
        renderWithRouter(<App />);

        userEvent.click(screen.getByRole('link', { name: /More details/i }));
        expect(screen.getByRole('heading', { name: /Pikachu Details/i })).toBeDefined();
        expect(screen.queryByText('More details')).not.toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /Summary/i, level: 2 })).toBeDefined();
        expect(screen.getByText(/This intelligent Pokémon/i)).toBeDefined();
      });

    it('Test if theres a map with the locations of the Pokemon',
      () => {
        renderWithRouter(<App />);

        userEvent.click(screen.getByRole('link', { name: /More details/i }));
        const loc = screen.getByRole('heading', { name: /Game Locations of Pikachu/i });
        const img1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
        const img2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
        const maps = screen.getAllByAltText(/Pikachu location/i);

        expect(loc).toBeDefined();
        expect(maps).toHaveLength(2);
        expect(maps[0]).toHaveAttribute('src', img1);
        expect(maps[1]).toHaveAttribute('src', img2);
      });

    it('Teste se o usuário pode favoritar um pokémon através da página de detalhes:',
      () => {
        renderWithRouter(<App />);

        userEvent.click(screen.getByRole('link', { name: /More details/i }));
        expect(screen.getByLabelText('Pokémon favoritado?')).toBeDefined();
        expect(screen.getByRole('checkbox', { checked: false })).toBeDefined();

        userEvent.click(screen.getByRole('checkbox', { checked: false }));
        expect(screen.getByRole('checkbox', { checked: true })).toBeDefined();
        expect(screen.getByAltText(/Pikachu is marked as favorite/i)).toBeDefined();

        userEvent.click(screen.getByRole('checkbox', { checked: true }));
        expect(screen.getByRole('checkbox', { checked: false })).toBeDefined();
        expect(screen.queryByAltText(/Pikachu is marked as favorite/i))
          .not.toBeInTheDocument();
      });
  });
