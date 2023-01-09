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
    logoUrl: 'https://www.example.com/logos/apple.png',
    change24h: 2.5
  },
  {
    name: 'Microsoft Corporation',
    sharePrice: 231.77,
    ticker: 'MSFT',
    marketCap: 2.375e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://www.example.com/logos/microsoft.png',
    change24h: -1.3
  },
  {
    name: 'Alphabet Inc.',
    sharePrice: 2103.1,
    ticker: 'GOOGL',
    marketCap: 2.064e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://www.example.com/logos/alphabet.png',
    change24h: 3.8
  },
  {
    name: 'Amazon.com, Inc.',
    sharePrice: 3276.87,
    ticker: 'AMZN',
    marketCap: 2.016e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://www.example.com/logos/amazon.png',
    change24h: 1.9
  },
  {
    name: 'Berkshire Hathaway Inc.',
    sharePrice: 565259.87,
    ticker: 'BRK.A',
    marketCap: 1.9e12,
    exchange: 'NYSE',
    logoUrl: 'https://www.example.com/logos/berkshire-hathaway.png',
    change24h: -2.4
  },
  {
    name: 'Facebook, Inc.',
    sharePrice: 307.91,
    ticker: 'FB',
    marketCap: 1.376e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://www.example.com/logos/facebook.png',
    change24h: -1.7
  },
  {
    name: 'Tesla, Inc.',
    sharePrice: 744.92,
    ticker: 'TSLA',
    marketCap: 1.259e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://www.example.com/logos/tesla.png',
    change24h: 3.4
  },
  {
    name: 'Alibaba Group Holding Limited',
    sharePrice: 287.29,
    ticker: 'BABA',
    marketCap: 1.162e12,
    exchange: 'NYSE',
    logoUrl: 'https://www.example.com/logos/alibaba.png',
    change24h: -1.2
  },
  {
    name: 'Johnson & Johnson',
    sharePrice: 170.01,
    ticker: 'JNJ',
    marketCap: 4.154e11,
    exchange: 'NYSE',
    logoUrl: 'https://www.example.com/logos/johnson-and-johnson.png',
    change24h: 0.9
  },
  {
    name: 'Procter & Gamble Co.',
    sharePrice: 119.8,
    ticker: 'PG',
    marketCap: 330.9e11,
    exchange: 'NYSE',
    logoUrl: 'https://www.example.com/logos/procter-and-gamble.png',
    change24h: -0.6
  }
];

export const GET = (() => {
  const payload = { securities: SECURITIES };

  return new Response(JSON.stringify(payload));
}) satisfies RequestHandler;
