export const formatNumberAsCurrency = (number: number): string =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'NZD',
    currencyDisplay: 'narrowSymbol'
  }).format(number);

export const formatLargeNumberAsCurrency = (number: number): string =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'NZD',
    currencyDisplay: 'narrowSymbol',
    maximumSignificantDigits: 3,
    notation: 'compact',
    compactDisplay: 'long'
  }).format(number);
