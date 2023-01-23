import { redirect } from '@sveltejs/kit';
import type { MarketsResponse } from '../api/markets/+server';
import type { PortfolioResponse } from '../api/portfolio/+server';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, locals }) => {
  const session = await locals.getSession();
  if (!session?.user) {
    throw redirect(303, '/');
  }

  const fetchPortfolio = async () => {
    const portfolioRes = await fetch('/api/portfolio');
    const portfolioData: PortfolioResponse = await portfolioRes.json();

    return portfolioData;
  };

  const fetchMarkets = async () => {
    const marketsRes = await fetch('/api/markets');
    const marketsData: MarketsResponse = await marketsRes.json();

    return marketsData;
  };

  const [portfolio, markets] = await Promise.all([fetchPortfolio(), fetchMarkets()]);

  return {
    portfolio,
    markets,
    session
  };
}) satisfies PageServerLoad;
