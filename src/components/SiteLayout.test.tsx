import { screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '@/test/render';
import { SiteLayout } from './SiteLayout';

describe('SiteLayout', () => {
  it.each(['/', '/otomodelacao'])('renders the institutional header and footer at %s', (route) => {
    renderWithProviders(
      <SiteLayout>
        <div>conteúdo</div>
      </SiteLayout>,
      route
    );
    const header = within(screen.getByRole('banner'));
    const footer = within(screen.getByRole('contentinfo'));
    expect(header.getByText('Estética avançada')).toBeVisible();
    expect(header.getByRole('link', { name: 'Contato' })).toHaveAttribute('href', '/contato');
    expect(footer.getByText(/COREN-SP 310\.193/)).toBeVisible();
    expect(footer.getByRole('link', { name: 'Otomodelação' })).toHaveAttribute(
      'href',
      '/otomodelacao'
    );
  });
});
