import { getContext, setContext } from 'svelte';

export const setButtonGroupContext = () => setContext<boolean>('group', true);
export const getButtonGroupContext = () => getContext<boolean>('group');
