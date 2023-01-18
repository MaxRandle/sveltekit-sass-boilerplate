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

export const formatLargeNumber = (number: number): string =>
  new Intl.NumberFormat('en-GB', {
    maximumSignificantDigits: 3,
    notation: 'compact',
    compactDisplay: 'short'
  }).format(number);

export const formatNumberAsPercentage = (number: number) =>
  new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number / 100);
