import { getContext, setContext } from 'svelte';

export const setInputGroupContext = () => setContext<boolean>('input-group', true);
export const getInputGroupContext = () => getContext<boolean>('input-group');
