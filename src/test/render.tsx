import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';

export function renderWithProviders(ui: ReactElement, route = '/otomodelacao') {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
    </HelmetProvider>,
  );
}
