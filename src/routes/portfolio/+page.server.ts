import type { Session } from '@auth/core/types';
import { redirect } from '@sveltejs/kit';
import type { MarketsResponse } from '../api/markets/+server';
import type { PortfolioResponse } from '../api/portfolio/+server';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, locals }) => {
  const portfolioRes = await fetch('/api/portfolio');
  const marketsRes = await fetch('/api/markets');

  const session = await locals.getSession();

  if (!session?.user) {
    throw redirect(303, '/');
  }

  return {
    portfolio: await portfolioRes.json(),
    markets: await marketsRes.json(),
    session
  } satisfies {
    portfolio: PortfolioResponse;
    markets: MarketsResponse;
    session: Session | null;
  };
}) satisfies PageServerLoad;
