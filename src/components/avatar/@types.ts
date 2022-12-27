import { getContext, setContext } from 'svelte';

export const setAvatarGroupContext = () => setContext<boolean>('group', true);
export const getAvatarGroupContext = () => getContext<boolean>('group');

export const setAvatarContainerContext = () => setContext<boolean>('container', true);
export const getAvatarContainerContext = () => getContext<boolean>('container');

/**
 * @summary Determines the width and height. Defaults to `md`.
 *
 * `sm` = `2rem`.
 *
 * `md` = `3rem`.
 *
 * `lg` = `4rem`.
 */
export type Size = 'sm' | 'md' | 'lg';
