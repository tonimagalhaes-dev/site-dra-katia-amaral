import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '@/test/render';
import { ResultsCarousel } from './ResultsCarousel';

describe('ResultsCarousel', () => {
  it('communicates active case and accessible controls', () => {
    renderWithProviders(<ResultsCarousel />);
    expect(screen.getByText('Caso 1 de 9')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Caso anterior' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Próximo caso' })).toBeInTheDocument();
    expect(screen.getByText(/resultados podem variar/i)).toBeVisible();
  });
});
