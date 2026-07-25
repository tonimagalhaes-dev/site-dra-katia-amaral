import { beforeEach, describe, expect, it } from 'vitest';
import { captureCampaignAttribution, getCampaignAttribution } from './attribution';

describe('campaign attribution', () => {
  beforeEach(() => sessionStorage.clear());

  it('keeps only allowlisted first-touch values', () => {
    expect(captureCampaignAttribution('?utm_source=meta&private=health&utm_campaign=test')).toEqual({
      utm_source: 'meta',
      utm_campaign: 'test',
    });
    expect(captureCampaignAttribution('?utm_source=other')).toEqual({
      utm_source: 'meta',
      utm_campaign: 'test',
    });
    expect(getCampaignAttribution()).not.toHaveProperty('private');
  });

  it('caps and strips control characters', () => {
    const value = `${'a'.repeat(120)}%0A`;
    expect(captureCampaignAttribution(`?utm_content=${value}`)?.utm_content).toHaveLength(100);
  });
});
