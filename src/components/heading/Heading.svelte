<script lang="ts">
  import cn from 'clsx';

  /**
   * @summary the size of the heading. This property informs the DOM node type
   */
  export let level: 1 | 2 | 3;
  /**
   * @summary explicitly sets the DOM node type irrespective of 'level'
   */
  export let as: 'h1' | 'h2' | 'h3' | undefined = undefined;
  /**
   * @summary specifies the font-color, defaults to 'inherit'
   */
  export let color: 'base' | 'weak' | 'primary' | undefined = undefined;

  const tag = as ?? level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3';

  let className: string | undefined = undefined;
  export { className as class };

  const classes = cn({
    [`heading`]: true,
    [`heading--${color}`]: color,
    [`heading--${level}`]: level,
    [className ?? '']: className
  });
</script>

<svelte:element this={tag} class={classes}><slot /></svelte:element>

<style lang="scss">
  .heading {
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

    @each $levelKey, $levelValue in (1: 'lg', 2: 'md', 3: 'sm') {
      &--#{$levelKey} {
        font-size: var(--heading-font-size--#{$levelValue});
        line-height: var(--heading-line-height--#{$levelValue});
        letter-spacing: var(--heading-letter-spacing--#{$levelValue});
        font-weight: var(--heading-font-weight--#{$levelValue});
      }
    }
  }
</style>
