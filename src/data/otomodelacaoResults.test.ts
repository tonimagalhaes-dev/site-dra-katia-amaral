import { describe, expect, it } from 'vitest';
import { otomodelacaoResults } from './otomodelacaoResults';

describe('otomodelacao results', () => {
  it('groups two stable views per case', () => {
    expect(otomodelacaoResults).toHaveLength(9);
    expect(otomodelacaoResults.every((item) => item.views.length === 2)).toBe(true);
    expect(new Set(otomodelacaoResults.map((item) => item.id)).size).toBe(9);
  });
});
