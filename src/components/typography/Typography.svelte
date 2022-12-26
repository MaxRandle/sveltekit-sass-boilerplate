<script lang="ts">
  import cn from 'classnames';

  /**
   * @summary Informs the size, spacing, and line-height of the text, defaults to 'md'
   */
  export let level: 'sm' | 'md' | 'lg' = 'md';

  /**
   * @summary specifies the text color, defaults to 'inherit'
   */
  export let color: 'base' | 'weak' | 'primary' | undefined = undefined;

  const classes = cn({
    [`typography`]: true,
    [`typography--${level}`]: level,
    [`typography--${color}`]: color
  });
</script>

<p class={classes}>
  <slot />
</p>

<style lang="scss">
  .typography {
    display: block;
    color: inherit;

    // color
    &--base {
      color: var(--text-color--base);
    }
    &--weak {
      color: var(--text-color--weak);
    }
    &--primary {
      color: var(--text-color--primary);
    }

    $levels: ('sm', 'md', 'lg');

    @each $level in $levels {
      font-size: var(--typography-letter-spacing--#{$level});
      line-height: var(--typography-letter-spacing--#{$level});
      letter-spacing: var(--typography-letter-spacing--#{$level});
    }
  }
</style>
