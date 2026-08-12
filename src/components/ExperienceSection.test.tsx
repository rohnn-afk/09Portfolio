import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import ExperienceSection from './ExperienceSection';

describe('ExperienceSection', () => {
  test('presents the promotion chronology', () => {
    render(
      <MemoryRouter>
        <ExperienceSection />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: 'Technical Lead' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Frontend Developer Intern' })).toBeInTheDocument();
  });

  test('links to the official company site and the internal case study', () => {
    render(
      <MemoryRouter>
        <ExperienceSection />
      </MemoryRouter>,
    );

    const companyLink = screen.getByRole('link', { name: /^ezyr$/i });
    expect(companyLink).toHaveAttribute('href', 'https://ezyr.io/');

    const caseStudyLink = screen.getByRole('link', { name: /explore the ezyr case study/i });
    expect(caseStudyLink).toHaveAttribute('href', '/experience/ezyr');
    expect(within(caseStudyLink).getByText(/explore the ezyr case study/i)).toBeInTheDocument();
  });
});
