import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  return {
    positions: [{ ticker: 'TSLA', amount: 545.41 }]
  };
}) satisfies PageLoad;
