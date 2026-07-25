import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { usePageView } from './usePageView';

function Probe() {
  usePageView();
  return null;
}

describe('usePageView', () => {
  it('emits pathname without arbitrary query parameters', async () => {
    window.dataLayer = [];
    render(<MemoryRouter initialEntries={['/otomodelacao?health=private']}><Probe /></MemoryRouter>);
    await waitFor(() => expect(window.dataLayer).toHaveLength(1));
    expect(window.dataLayer?.[0]).toMatchObject({
      event: 'virtual_page_view',
      page_path: '/otomodelacao',
    });
    expect(JSON.stringify(window.dataLayer)).not.toContain('health');
  });
});
