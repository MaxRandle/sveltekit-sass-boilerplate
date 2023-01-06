<script lang="ts">
  import { getResponsiveClasses, type ResponsiveProp } from '@helpers/components';
  import clsx from 'clsx';

  /**
   * @summary Informs the `font-size` and `line-height` of the text. Defaults to `md`.
   */
  export let level: ResponsiveProp<'xs' | 'sm' | 'md' | 'lg' | 'xl'> = 'md';
  const levelClasses = getResponsiveClasses('level', level);

  /**
   * @summary Specifies the font-weight. Defaults to `normal`.
   */
  export let weight: 'normal' | 'medium' | 'semibold' | 'bold' = 'normal';

  /**
   * @summary Specifies the text color. Defaults to `inherit`.
   */
  export let color: 'base' | 'weak' | 'primary' | 'danger' | undefined = undefined;

  const classes = clsx(
    'typography',
    {
      [`typography--${color}`]: color,
      [`typography--${weight}`]: weight
    },
    levelClasses,
    $$props.class
  );
</script>

<p class={classes}>
  <slot />
</p>

<style lang="scss">
  .typography {
    --typography-font-size--xs: var(--font-size--xs);
    --typography-line-height--xs: var(--line-height--xs);
    --typography-font-size--sm: var(--font-size--sm);
    --typography-line-height--sm: var(--line-height--sm);
    --typography-font-size--md: var(--font-size--md);
    --typography-line-height--md: var(--line-height--md);
    --typography-font-size--lg: var(--font-size--lg);
    --typography-line-height--lg: var(--line-height--lg);
    --typography-font-size--xl: var(--font-size--xl);
    --typography-line-height--xl: var(--line-height--xl);

    display: block;
    color: inherit;
    font-size: var(--typography-font-size);
    line-height: var(--typography-line-height);
    color: var(--typography-color);
    font-weight: var(--typography-font-weight);

    // color
    &--base {
      --typography-color: var(--text-color--base);
    }
    &--weak {
      --typography-color: var(--text-color--weak);
    }
    &--primary {
      --typography-color: var(--text-color--primary);
    }
    &--danger {
      --typography-color: var(--text-color--danger);
    }

    @each $weight in ('normal', 'medium', 'semibold', 'bold') {
      &--#{$weight} {
        --typography-font-weight: var(--font-weight--#{$weight});
      }
    }
  }

  $typography-level-map: ('xs', 'sm', 'md', 'lg', 'xl', '2xl');
  @include make-responsive-classes('level', $typography-level-map) using ($typography-level) {
    --typography-font-size: var(--typography-font-size--#{$typography-level});
    --typography-line-height: var(--typography-line-height--#{$typography-level});
  }
</style>
