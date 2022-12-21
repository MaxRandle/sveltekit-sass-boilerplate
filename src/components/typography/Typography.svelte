<script lang="ts">
  import cn from 'classnames';

  /**
   * @summary the visual size of the text, defaults to 'body'
   */
  export let level: 'body' | 'caption' = 'body';
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

    // size
    &--caption {
      font-size: var(--typography-size--caption);
      font-weight: var(--typography-weight--caption);
    }
    &--body {
      font-size: var(--typography-size--body);
      font-weight: var(--typography-weight--body);
    }
  }
</style>
