import type { Security } from '../securities/+server';
import type { RequestHandler } from './$types';

export type Position = {
  security: Pick<Security, 'ticker' | 'sharePriceInCents'>;
  valueInvestedInCents: number;
  sharesOwned: number;
};

const POSITIONS: Position[] = [
  {
    security: {
      ticker: 'AAPL',
      sharePriceInCents: 10742
    },
    valueInvestedInCents: 617400,
    sharesOwned: 60
  },
  {
    security: {
      sharePriceInCents: 327687,
      ticker: 'AMZN'
    },
    valueInvestedInCents: 495327,
    sharesOwned: 1.5
  },
  {
    security: {
      sharePriceInCents: 30791,
      ticker: 'FB'
    },
    valueInvestedInCents: 195264,
    sharesOwned: 8
  }
];

export type PortfolioResponse = { positions: Position[] };

export const GET = (() => {
  const payload: PortfolioResponse = { positions: POSITIONS };

  return new Response(JSON.stringify(payload));
}) satisfies RequestHandler;
