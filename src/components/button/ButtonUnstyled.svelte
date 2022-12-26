<script lang="ts">
  import classNames from 'classnames';

  /**
   * @summary specifies the size of the button. Defaults to `md`
   */
  export let size: 'sm' | 'md' | 'lg' = 'md';

  const classes = classNames(
    'button',
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
      --button-bg: var(--button-bg--hover);
      --button-border-color: var(--button-border-color--hover);
    }

    @each $size in ('sm', 'md', 'lg') {
      &--#{$size} {
        --button-padding: var(--button-padding--#{$size});
      }
    }
  }
</style>
