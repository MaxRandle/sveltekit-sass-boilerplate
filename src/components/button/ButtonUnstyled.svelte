<script lang="ts">
  import clsx from 'clsx';
  import type { ComponentProps } from 'svelte';
  import { getButtonGroupContext } from './@types';

  const group = getButtonGroupContext();

  /**
   * @summary specifies the size of the button. Defaults to `md`
   */
  export let size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * @summary Internal or external link. This causes the button to be an anchor tag.
   */
  export let href: string | undefined = undefined;

  export let disabled: boolean | null | undefined = undefined;

  const classes = clsx(
    'button',
    group && 'group',
    {
      [`button--${size}`]: size
    },
    $$props.class
  );

  const elementType = href ? 'a' : 'button';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<svelte:element
  this={elementType}
  class={classes}
  {href}
  on:click
  disabled={elementType === 'button' && disabled}
  aria-disabled={elementType === 'a' && disabled ? 'true' : 'false'}
>
  <slot />
</svelte:element>

<style lang="scss">
  .button {
    --button-color: var(--color, currentColor);
    --button-color--hover: var(--color--hover);
    --button-color--disabled: var(--color--disabled);

    --button-bg: var(--bg);
    --button-bg--hover: var(--bg--hover);
    --button-bg--disabled: var(--bg--disabled);

    --button-border-color: var(--border-color, transparent);
    --button-border-color--hover: var(--border-color--hover, transparent);
    --button-border-color--disabled: var(--border-color--disabled, transparent);

    --button-padding--sm: 0.5rem 0.875rem;
    --button-padding--md: 0.625rem 1rem;
    --button-padding--lg: 0.625rem 1.125rem;

    padding: var(--button-padding);
    font-weight: var(--font-weight--semibold);

    color: var(--button-color);
    background-color: var(--button-bg);
    border-color: var(--button-border-color);
    display: flex;
    gap: 0.625rem;
    align-items: center;
    letter-spacing: 0.04em;
    border-width: 1px;
    border-style: solid;
    border-radius: 0.5rem;

    &:not(:disabled):not([disabled='true']):not([aria-disabled='true']) {
      &:hover {
        --button-color: var(--button-color--hover);
        --button-bg: var(--button-bg--hover);
        --button-border-color: var(--button-border-color--hover);
      }
    }

    &:disabled,
    &[disabled='true'],
    &[aria-disabled='true'] {
      --button-color: var(--button-color--disabled);
      --button-bg: var(--button-bg--disabled);
      --button-border-color: var(--button-border-color--disabled);
      pointer-events: none;
    }

    @each $size in ('sm', 'md', 'lg') {
      &--#{$size} {
        --button-padding: var(--button-padding--#{$size});
      }
    }
  }

  .group {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
    &:last-child {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
    &:hover,
    &:focus-visible {
      position: relative;
    }
  }
</style>
