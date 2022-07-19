import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helper/renderWithRouter';
import { NotFound } from '../pages';

describe('Testing component NotFound',
  () => {
    it(`tests if the page contains an h2 heading
    with the text "Page requested not found`,
    () => {
      renderWithRouter(<NotFound />);

      const h2 = screen.getByRole('heading', { name: /Page requested not found/i });
      expect(h2).toBeDefined();
    });

    it('tests if the page contains the following image of a Pokédex',
      () => {
        renderWithRouter(<NotFound />);

        const imgSrc = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
        const img = screen
          .getByAltText('Pikachu crying because the page requested was not found').src;
        expect(img).toBe(imgSrc);
      });
  });
