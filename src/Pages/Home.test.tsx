import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Home from './Home';
import Contactme from './Contactme';

test('provides a native project CTA from the introduction to contact details', () => {
  render(
    <>
      <Home isScreenSupported={false} />
      <Contactme />
    </>,
  );

  expect(screen.getByRole('link', { name: /let's build something/i })).toHaveAttribute('href', '#contact');
  expect(document.querySelector('#contact')).toBeInTheDocument();
});
