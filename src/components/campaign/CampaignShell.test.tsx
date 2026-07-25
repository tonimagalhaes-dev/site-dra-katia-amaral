import { screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithProviders } from '@/test/render';
import { CampaignShell } from './CampaignShell';

describe('CampaignShell', () => {
  it('uses campaign chrome with only the address link in the footer', () => {
    renderWithProviders(<CampaignShell><div>conteúdo</div></CampaignShell>);
    expect(screen.getByRole('banner')).toHaveTextContent('Dra. Katia Amaral');
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    const footer = within(screen.getByRole('contentinfo'));
    expect(footer.getByText(/Rua Santa Cruz, 2105/)).toBeVisible();
    expect(footer.getAllByRole('link')).toHaveLength(1);
    expect(footer.getByRole('link', { name: /abrir endereço no google maps/i })).toHaveAttribute(
      'href',
      expect.stringContaining('google.com/maps'),
    );
  });
});
