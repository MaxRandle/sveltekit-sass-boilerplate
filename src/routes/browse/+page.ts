import type { SecuritiesResponse } from '../api/securities/+server';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  const res = await fetch('/api/securities');
  const data: SecuritiesResponse = await res.json();
  return data;
}) satisfies PageLoad;
