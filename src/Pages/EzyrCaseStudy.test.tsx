import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, test } from 'vitest';
import EzyrCaseStudy from './EzyrCaseStudy';

test('keeps case-study navigation fixed and exposes both primary actions', () => {
  render(
    <MemoryRouter>
      <EzyrCaseStudy />
    </MemoryRouter>,
  );

  const navigation = screen.getByRole('navigation', { name: 'Case study navigation' });
  const backLink = screen.getByRole('link', { name: /back to portfolio/i });
  const companyLink = screen.getByRole('link', { name: /visit ezyr/i });

  expect(navigation).toHaveClass('fixed', 'inset-x-0', 'top-0');
  expect(backLink).toHaveAttribute('href', '/');
  expect(backLink).toHaveClass('bg-white/90', 'dark:bg-zinc-900/[0.88]');
  expect(companyLink).toHaveAttribute('href', 'https://ezyr.io/');
  expect(companyLink).toHaveAttribute('target', '_blank');
  expect(companyLink).toHaveAttribute('rel', 'noopener noreferrer');
  expect(companyLink).toHaveClass('bg-[#16C47F]', 'dark:bg-[#22cf8a]');
});
