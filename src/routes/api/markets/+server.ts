import type { RequestHandler } from './$types';

export type MarketIndicator = {
  id: string;
  name: string;
  change24h: number;
};

const MARKET_INDICATORS: MarketIndicator[] = [
  {
    id: '1',
    name: 'Dow Jones',
    change24h: -0.32
  },
  {
    id: '2',
    name: 'S&P 500',
    change24h: 4.81
  }
];

export type MarketsResponse = { marketIndicators: MarketIndicator[] };

export const GET = (() => {
  const payload: MarketsResponse = { marketIndicators: MARKET_INDICATORS };

  return new Response(JSON.stringify(payload));
}) satisfies RequestHandler;
