import type { RequestHandler } from './$types';

export type Security = {
  name: string;
  sharePrice: number;
  ticker: string;
  marketCap: number;
  exchange: string;
  logoUrl: string;
  change24h: number;
};

const SECURITIES: Security[] = [
  {
    name: 'Apple Inc.',
    sharePrice: 107.42,
    ticker: 'AAPL',
    marketCap: 2.208e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/apple.com',
    change24h: 2.5
  },
  {
    name: 'Microsoft Corporation',
    sharePrice: 231.77,
    ticker: 'MSFT',
    marketCap: 2.375e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/microsoft.com',
    change24h: -1.3
  },
  {
    name: 'Alphabet Inc.',
    sharePrice: 2103.1,
    ticker: 'GOOGL',
    marketCap: 2.064e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/alphabet.com',
    change24h: 3.8
  },
  {
    name: 'Amazon.com, Inc.',
    sharePrice: 3276.87,
    ticker: 'AMZN',
    marketCap: 2.016e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/amazon.com',
    change24h: 1.9
  },
  {
    name: 'Facebook, Inc.',
    sharePrice: 307.91,
    ticker: 'FB',
    marketCap: 1.376e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/facebook.com',
    change24h: -1.7
  },
  {
    name: 'Tesla, Inc.',
    sharePrice: 744.92,
    ticker: 'TSLA',
    marketCap: 1.259e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/tesla.com',
    change24h: 3.4
  },
  {
    name: 'Alibaba Group Holding Limited',
    sharePrice: 287.29,
    ticker: 'BABA',
    marketCap: 1.162e12,
    exchange: 'NYSE',
    logoUrl: 'https://logo.clearbit.com/alibaba.com',
    change24h: -1.2
  },
  {
    name: 'Johnson & Johnson',
    sharePrice: 170.01,
    ticker: 'JNJ',
    marketCap: 4.154e11,
    exchange: 'NYSE',
    logoUrl: 'https://logo.clearbit.com/johnson-and-johnson.com',
    change24h: 0.9
  },
  {
    name: 'Procter & Gamble Co.',
    sharePrice: 119.8,
    ticker: 'PG',
    marketCap: 330.9e11,
    exchange: 'NYSE',
    logoUrl: 'https://logo.clearbit.com/pg.com',
    change24h: -0.6
  },
  {
    name: 'Coca-Cola Co.',
    sharePrice: 53.04,
    ticker: 'KO',
    marketCap: 236.3e11,
    exchange: 'NYSE',
    logoUrl: 'https://logo.clearbit.com/coca-cola.com',
    change24h: -0.4
  }
];

export const GET = (() => {
  const payload = { securities: SECURITIES };

  return new Response(JSON.stringify(payload));
}) satisfies RequestHandler;
