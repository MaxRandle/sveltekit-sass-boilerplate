<script lang="ts">
  import { getResponsiveClasses, type ResponsiveProp } from '@helpers/components';
  import cn from 'clsx';

  type HeadingLevel = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /**
   * @summary Determines the `font-size`, `line-height`, `letter-spacing` and `font-weight`. Defaults to `md`.
   */
  export let level: ResponsiveProp<HeadingLevel> = 'md';

  const levelClasses = getResponsiveClasses('level', level);

  /**
   * @summary Sets the DOM node type. Default to `h3`.
   */
  export let as: 'h1' | 'h2' | 'h3' = 'h3';

  /**
   * @summary specifies the font-color, defaults to 'inherit'
   */
  export let color: 'base' | 'weak' | 'primary' | undefined = undefined;

  const classes = cn(
    'heading',
    {
      [`heading--${color}`]: color
    },
    levelClasses,
    $$props.class
  );
</script>

<svelte:element this={as} class={classes}><slot /></svelte:element>

<style lang="scss">
  .heading {
    --heading-font-size--xs: var(--font-size--2xl);
    --heading-line-height--xs: var(--line-height--2xl);
    --heading-letter-spacing--xs: var(--letter-spacing--2xl);
    --heading-font-weight--xs: var(--font-weight--semibold);

    --heading-font-size--sm: var(--font-size--3xl);
    --heading-line-height--sm: var(--line-height--3xl);
    --heading-letter-spacing--sm: var(--letter-spacing--3xl);
    --heading-font-weight--sm: var(--font-weight--semibold);

    --heading-font-size--md: var(--font-size--4xl);
    --heading-line-height--md: var(--line-height--4xl);
    --heading-letter-spacing--md: var(--letter-spacing--4xl);
    --heading-font-weight--md: var(--font-weight--medium);

    --heading-font-size--lg: var(--font-size--5xl);
    --heading-line-height--lg: var(--line-height--5xl);
    --heading-letter-spacing--lg: var(--letter-spacing--5xl);
    --heading-font-weight--lg: var(--font-weight--medium);

    --heading-font-size--xl: var(--font-size--6xl);
    --heading-line-height--xl: var(--line-height--6xl);
    --heading-letter-spacing--xl: var(--letter-spacing--6xl);
    --heading-font-weight--xl: var(--font-weight--normal);

    --heading-font-size--2xl: var(--font-size--7xl);
    --heading-line-height--2xl: var(--line-height--7xl);
    --heading-letter-spacing--2xl: var(--letter-spacing--7xl);
    --heading-font-weight--2xl: var(--font-weight--normal);

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

    font-size: var(--heading-font-size);
    line-height: var(--heading-line-height);
    letter-spacing: var(--heading-letter-spacing);
    font-weight: var(--heading-font-weight);
  }

  $heading-level-map: ('xs', 'sm', 'md', 'lg', 'xl', '2xl');

  @include make-responsive-classes('level', $heading-level-map) using ($heading-level) {
    --heading-font-size: var(--heading-font-size--#{$heading-level});
    --heading-line-height: var(--heading-line-height--#{$heading-level});
    --heading-letter-spacing: var(--heading-letter-spacing--#{$heading-level});
    --heading-font-weight: var(--heading-font-weight--#{$heading-level});
  }
</style>
