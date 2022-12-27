<script lang="ts">
  import cn from 'clsx';

  type HeadingLevel = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /**
   * @summary the size of the heading. This property informs the DOM node type
   */
  export let level:
    | HeadingLevel
    | {
        base?: HeadingLevel;
        sm?: HeadingLevel;
        md?: HeadingLevel;
        lg?: HeadingLevel;
      } = 'md';

  const levelClasses =
    level instanceof Object
      ? Object.entries(level).map(([key, val]) => `heading--breakpoint-${key}--level-${val}`)
      : `heading--breakpoint-base--level-${level}`;

  /**
   * @summary explicitly sets the DOM node type irrespective of 'level'. Default to `h3`.
   */
  export let as: 'h1' | 'h2' | 'h3' = 'h3';

  /**
   * @summary specifies the font-color, defaults to 'inherit'
   */
  export let color: 'base' | 'weak' | 'primary' | undefined = undefined;

  const tag = as;

  let className: string | undefined = undefined;
  export { className as class };

  const classes = cn(
    {
      [`heading`]: true,
      [`heading--${color}`]: color,
      // [`heading--${level}`]: level,
      [className ?? '']: className
    },
    levelClasses
    // 'heading--breakpoint-sm--level-lg'
  );

  const testProperty = 'red';
</script>

<svelte:element this={tag} class={classes}><slot /></svelte:element>

<style lang="scss">
  .heading {
    --heading-font-size--xs: var(--font-size--2xl);
    --heading-line-height--xs: var(--line-height--2xl);
    --heading-letter-spacing--xs: var(--letter-spacing--2xl);
    --heading-font-weight--xs: var(--font-weight-semibold);

    --heading-font-size--sm: var(--font-size--3xl);
    --heading-line-height--sm: var(--line-height--3xl);
    --heading-letter-spacing--sm: var(--letter-spacing--3xl);
    --heading-font-weight--sm: var(--font-weight-semibold);

    --heading-font-size--md: var(--font-size--4xl);
    --heading-line-height--md: var(--line-height--4xl);
    --heading-letter-spacing--md: var(--letter-spacing--4xl);
    --heading-font-weight--md: var(--font-weight-medium);

    --heading-font-size--lg: var(--font-size--5xl);
    --heading-line-height--lg: var(--line-height--5xl);
    --heading-letter-spacing--lg: var(--letter-spacing--5xl);
    --heading-font-weight--lg: var(--font-weight-medium);

    --heading-font-size--xl: var(--font-size--6xl);
    --heading-line-height--xl: var(--line-height--6xl);
    --heading-letter-spacing--xl: var(--letter-spacing--6xl);
    --heading-font-weight--xl: var(--font-weight-normal);

    --heading-font-size--2xl: var(--font-size--7xl);
    --heading-line-height--2xl: var(--line-height--7xl);
    --heading-letter-spacing--2xl: var(--letter-spacing--7xl);
    --heading-font-weight--2xl: var(--font-weight-normal);

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

    $screen-size-map: (
      'base': 0rem,
      'sm': 40rem,
      'md': 48rem,
      'lg': 64rem,
      'xl': 80rem
    );

    $heading-level-map: ('xs', 'sm', 'md', 'lg', 'xl', '2xl');

    @each $breakpoint-label, $breakpoint-value in $screen-size-map {
      @each $heading-level in $heading-level-map {
        &--breakpoint-#{$breakpoint-label}--level-#{$heading-level} {
          @media (min-width: $breakpoint-value) {
            --heading-font-size: var(--heading-font-size--#{$heading-level});
            --heading-line-height: var(--heading-line-height--#{$heading-level});
            --heading-letter-spacing: var(--heading-letter-spacing--#{$heading-level});
            --heading-font-weight: var(--heading-font-weight--#{$heading-level});
          }
        }
      }
    }
  }
</style>
