import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helper/renderWithRouter';
import { About } from '../pages';

describe('Testing component About', () => {
  it('tests if the page contains informations about Pokédex', () => {
    renderWithRouter(<About />);

    const text = screen.getByText(/This application simulates/i);
    expect(text).toBeDefined();
  });

  it('tests if the page contains a h2 heading with the text "About Pokédex"', () => {
    renderWithRouter(<About />);

    const h2 = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(h2).toBeDefined();
  });

  it('tests if the page contains 2 paragraphs with the text about Pokédex', () => {
    renderWithRouter(<About />);

    const paragraphs = screen.getAllByText(/Pokémons/i);
    expect(paragraphs).toHaveLength(2);
  });

  it('tests if the page contains the following image of a Pokédex', () => {
    renderWithRouter(<About />);

    const imgSrc = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const img = screen.getByAltText('Pokédex').src;
    expect(img).toBe(imgSrc);
  });
});
