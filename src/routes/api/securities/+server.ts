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
  peRatio: number;
  high52WeekInCents: number;
  low52WeekInCents: number;
  volume24h: number;
  dividendYield: number;
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
    change24h: 2.5,
    peRatio: 20.5,
    high52WeekInCents: 12000,
    low52WeekInCents: 8000,
    volume24h: 12000000,
    dividendYield: 3
  },
  {
    id: '2',
    name: 'Microsoft Corporation',
    sharePriceInCents: 23177,
    ticker: 'MSFT',
    marketCap: 2.375e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/microsoft.com',
    change24h: -1.3,
    peRatio: 25.2,
    high52WeekInCents: 26000,
    low52WeekInCents: 18000,
    volume24h: 8000000,
    dividendYield: 2
  },
  {
    id: '3',
    name: 'Alphabet Inc.',
    sharePriceInCents: 210310,
    ticker: 'GOOGL',
    marketCap: 2.064e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/alphabet.com',
    change24h: 3.8,
    peRatio: 30.1,
    high52WeekInCents: 230000,
    low52WeekInCents: 170000,
    volume24h: 5000000,
    dividendYield: 1
  },
  {
    id: '4',
    name: 'Amazon.com, Inc.',
    sharePriceInCents: 327687,
    ticker: 'AMZN',
    marketCap: 2.016e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/amazon.com',
    change24h: 1.9,
    peRatio: 40.2,
    high52WeekInCents: 350000,
    low52WeekInCents: 250000,
    volume24h: 9000000,
    dividendYield: 0.5
  },
  {
    id: '5',
    name: 'Facebook, Inc.',
    sharePriceInCents: 30791,
    ticker: 'FB',
    marketCap: 1.376e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/facebook.com',
    change24h: -1.7,
    peRatio: 35.4,
    high52WeekInCents: 34000,
    low52WeekInCents: 24000,
    volume24h: 6000000,
    dividendYield: 1
  },
  {
    id: '6',
    name: 'Tesla, Inc.',
    sharePriceInCents: 74492,
    ticker: 'TSLA',
    marketCap: 1.259e12,
    exchange: 'NASDAQ',
    logoUrl: 'https://logo.clearbit.com/tesla.com',
    change24h: 3.4,
    peRatio: 50.6,
    high52WeekInCents: 80000,
    low52WeekInCents: 60000,
    volume24h: 11000000,
    dividendYield: 0.5
  },
  {
    id: '7',
    name: 'Alibaba Group Holding Limited',
    sharePriceInCents: 28729,
    ticker: 'BABA',
    marketCap: 3.292e11,
    exchange: 'NYSE',
    logoUrl: 'https://logo.clearbit.com/alibaba.com',
    change24h: -1.2,
    peRatio: 30.2,
    high52WeekInCents: 30000,
    low52WeekInCents: 22000,
    volume24h: 7000000,
    dividendYield: 2
  },
  {
    id: '8',
    name: 'Johnson & Johnson',
    sharePriceInCents: 17001,
    ticker: 'JNJ',
    marketCap: 4.154e11,
    exchange: 'NYSE',
    logoUrl: 'https://logo.clearbit.com/johnson-and-johnson.com',
    change24h: 0.9,
    peRatio: 15.1,
    high52WeekInCents: 18000,
    low52WeekInCents: 14000,
    volume24h: 5000000,
    dividendYield: 3
  },
  {
    id: '9',
    name: 'Procter & Gamble Co.',
    sharePriceInCents: 11980,
    ticker: 'PG',
    marketCap: 330.9e9,
    exchange: 'NYSE',
    logoUrl: 'https://logo.clearbit.com/pg.com',
    change24h: -0.6,
    peRatio: 18.5,
    high52WeekInCents: 13000,
    low52WeekInCents: 10000,
    volume24h: 4000000,
    dividendYield: 4
  },
  {
    id: '10',
    name: 'Coca-Cola Co.',
    sharePriceInCents: 5304,
    ticker: 'KO',
    marketCap: 236.3e9,
    exchange: 'NYSE',
    logoUrl: 'https://logo.clearbit.com/coca-cola.com',
    change24h: -0.4,
    peRatio: 20.7,
    high52WeekInCents: 6000,
    low52WeekInCents: 4000,
    volume24h: 3000000,
    dividendYield: 3
  }
];

export type SecuritiesResponse = {
  securities: Security[];
};

export const GET = (() => {
  const payload: SecuritiesResponse = { securities: SECURITIES };

  return new Response(JSON.stringify(payload));
}) satisfies RequestHandler;
