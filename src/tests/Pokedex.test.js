import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

const Charmander = 'Charmander sprite';

describe('Testing component About',
  () => {
    it('tests if the page contains an h2 heading with the text "Encountered pokémons"',
      () => {
        renderWithRouter(<App />);

        const h2 = screen.getByRole('heading', { name: /Encountered pokémons/i });
        expect(h2).toBeDefined();
      });

    it(`tests if the next pokemon of the list is showed
    when the button "Próximo pokémon" is clicked`,
    () => {
      renderWithRouter(<App />);

      const btnNext = screen.getByTestId('next-pokemon');
      userEvent.click(btnNext);

      const charmander = screen.getByAltText(Charmander);
      expect(charmander).toBeDefined();
      userEvent.click(btnNext);

      const caterpie = screen.getByAltText('Caterpie sprite');
      expect(caterpie).toBeDefined();
      userEvent.click(btnNext);

      const ekans = screen.getByAltText('Ekans sprite');
      expect(ekans).toBeDefined();
      userEvent.click(btnNext);

      const alakazam = screen.getByAltText('Alakazam sprite');
      expect(alakazam).toBeDefined();
      userEvent.click(btnNext);

      const mew = screen.getByAltText('Mew sprite');
      expect(mew).toBeDefined();
      userEvent.click(btnNext);

      const rapidash = screen.getByAltText('Rapidash sprite');
      expect(rapidash).toBeDefined();
      userEvent.click(btnNext);

      const snorlax = screen.getByAltText('Snorlax sprite');
      expect(snorlax).toBeDefined();
      userEvent.click(btnNext);

      const dragonair = screen.getByAltText('Dragonair sprite');
      expect(dragonair).toBeDefined();
      userEvent.click(btnNext);

      const pikachu = screen.getByAltText('Pikachu sprite');
      expect(pikachu).toBeDefined();
    });

    it('tests if it shows only one pokemon at a time',
      () => {
        renderWithRouter(<App />);

        const card = screen.getAllByTestId('pokemon-name');
        expect(card).toHaveLength(1);
      });

    it('tests if the pokedex has the filter buttons',
      () => {
        renderWithRouter(<App />);
        const maxButtons = 7;

        const allButtons = screen.getAllByTestId('pokemon-type-button');
        expect(allButtons).toHaveLength(maxButtons);

        const btn1 = screen.getByRole('button', { name: /Electric/i });
        expect(btn1).toBeDefined();
        const btn2 = screen.getByRole('button', { name: /Fire/i });
        expect(btn2).toBeDefined();
        const btn3 = screen.getByRole('button', { name: /Bug/i });
        expect(btn3).toBeDefined();
        const btn4 = screen.getByRole('button', { name: /Poison/i });
        expect(btn4).toBeDefined();
        const btn5 = screen.getByRole('button', { name: /Psychic/i });
        expect(btn5).toBeDefined();
        const btn6 = screen.getByRole('button', { name: /Normal/i });
        expect(btn6).toBeDefined();
        const btn7 = screen.getByRole('button', { name: /Dragon/i });
        expect(btn7).toBeDefined();

        const all = screen.getByRole('button', { name: /all/i });

        userEvent.click(btn2);
        const charmander = screen.getByAltText(Charmander);
        expect(charmander).toBeDefined();
        expect(all).toBeDefined();

        const btnNext = screen.getByRole('button', { name: /Próximo pokémon/i });
        userEvent.click(btnNext);
        const rapidash = screen.getByAltText('Rapidash sprite');
        expect(rapidash).toBeDefined();
        expect(all).toBeDefined();
        userEvent.click(btnNext);
        expect(charmander).toBeDefined();
        expect(all).toBeDefined();
      });

    it('tests if the pokedex has a button to reset the filter',
      () => {
        renderWithRouter(<App />);
        const all = screen.getByRole('button', { name: /all/i });
        const btnNext = screen.getByRole('button', { name: /Próximo pokémon/i });

        expect(all).toBeDefined();

        userEvent.click(all);
        const pikachu = screen.getByAltText('Pikachu sprite');
        expect(pikachu).toBeDefined();

        userEvent.click(btnNext);
        const charmander = screen.getByAltText(Charmander);
        expect(charmander).toBeDefined();
      });
  });
