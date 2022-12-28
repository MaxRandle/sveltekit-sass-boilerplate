<script lang="ts">
  import clsx from 'clsx';
  import { getButtonGroupContext } from './@types';

  const group = getButtonGroupContext();

  /**
   * @summary specifies the size of the button. Defaults to `md`
   */
  export let size: 'sm' | 'md' | 'lg' = 'md';

  const classes = clsx(
    'button',
    group && 'group',
    {
      [`button--${size}`]: size
    },
    $$props.class
  );
</script>

<button class={classes} on:click>
  <slot />
</button>

<style lang="scss">
  .button {
    --button-color: var(--color);
    --button-color--hover: var(--color--hover);
    --button-bg: var(--bg);
    --button-bg--hover: var(--bg--hover);
    --button-border-color: var(--border-color);
    --button-border-color--hover: var(--border-color--hover);

    --button-padding--sm: 0.5rem 0.875rem;
    --button-padding--md: 0.625rem 1rem;
    --button-padding--lg: 0.625rem 1.125rem;

    padding: var(--button-padding);
    font-weight: var(--font-weight--semibold);

    color: var(--button-color);
    background-color: var(--button-bg);
    border-color: var(--button-border-color);
    letter-spacing: 0.04em;
    border-width: 1px;
    border-style: solid;
    border-radius: 0.5rem;

    &:hover {
      --button-color: var(--button-color--hover);
      --button-bg: var(--button-bg--hover);
      --button-border-color: var(--button-border-color--hover);
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
