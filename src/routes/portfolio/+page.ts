import type { MarketsResponse } from '../api/markets/+server';
import type { PortfolioResponse } from '../api/portfolio/+server';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  const portfolioRes = await fetch('/api/portfolio');
  const marketsRes = await fetch('/api/markets');

  const data: {
    portfolio: PortfolioResponse;
    markets: MarketsResponse;
  } = {
    portfolio: await portfolioRes.json(),
    markets: await marketsRes.json()
  };

  return data;
}) satisfies PageLoad;
