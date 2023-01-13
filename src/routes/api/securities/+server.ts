import type { RequestHandler } from './$types';

export type Security = {
  id: string;
  name: string;
  sharePriceInCents: number;
  ticker: string;
  marketCap: number;
  exchange: string;
  logoUrl: string;
  change24h: number;
};

const SECURITIES: Security[] = [
  {
    id: '1',
    name: 'Apple Inc.',
    sharePriceInCents: 10742,
    ticker: 'AAPL',
    marketCap: 2.208e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/apple.com',
    change24h: 2.5
  },
  {
    id: '2',
    name: 'Microsoft Corporation',
    sharePriceInCents: 23177,
    ticker: 'MSFT',
    marketCap: 2.375e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/microsoft.com',
    change24h: -1.3
  },
  {
    id: '3',
    name: 'Alphabet Inc.',
    sharePriceInCents: 210310,
    ticker: 'GOOGL',
    marketCap: 2.064e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/alphabet.com',
    change24h: 3.8
  },
  {
    id: '4',
    name: 'Amazon.com, Inc.',
    sharePriceInCents: 327687,
    ticker: 'AMZN',
    marketCap: 2.016e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/amazon.com',
    change24h: 1.9
  },
  {
    id: '5',
    name: 'Facebook, Inc.',
    sharePriceInCents: 30791,
    ticker: 'FB',
    marketCap: 1.376e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/facebook.com',
    change24h: -1.7
  },
  {
    id: '6',
    name: 'Tesla, Inc.',
    sharePriceInCents: 74492,
    ticker: 'TSLA',
    marketCap: 1.259e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/tesla.com',
    change24h: 3.4
  },
  {
    id: '7',
    name: 'Alibaba Group Holding Limited',
    sharePriceInCents: 28729,
    ticker: 'BABA',
    marketCap: 1.162e12,
    exchange: 'NYSE',
    logoUrl: 'https://logo.clearbit.com/alibaba.com',
    change24h: -1.2
  },
  {
    id: '8',
    name: 'Johnson & Johnson',
    sharePriceInCents: 17001,
    ticker: 'JNJ',
    marketCap: 4.154e11,
    exchange: 'NYSE',
    logoUrl: 'https://logo.clearbit.com/johnson-and-johnson.com',
    change24h: 0.9
  },
  {
    id: '9',
    name: 'Procter & Gamble Co.',
    sharePriceInCents: 11980,
    ticker: 'PG',
    marketCap: 330.9e11,
    exchange: 'NYSE',
    logoUrl: 'https://logo.clearbit.com/pg.com',
    change24h: -0.6
  },
  {
    id: '10',
    name: 'Coca-Cola Co.',
    sharePriceInCents: 5304,
    ticker: 'KO',
    marketCap: 236.3e11,
    exchange: 'NYSE',
    logoUrl: 'https://logo.clearbit.com/coca-cola.com',
    change24h: -0.4
  }
];

export type SecuritiesResponse = {
  securities: Security[];
};

export const GET = (() => {
  const payload: SecuritiesResponse = { securities: SECURITIES };

  return new Response(JSON.stringify(payload));
}) satisfies RequestHandler;
