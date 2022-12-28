<script lang="ts">
  import clsx from 'clsx';

  /**
   * @summary Displays an indicator.
   */
  export let indicator: 'ring' | 'dot' | 'up' | 'down' | undefined = undefined;

  /**
   * @summary Determines the color set. Defaults to `base`.
   */
  export let palette: 'primary' | 'danger' | 'success' | 'base' = 'base';

  /**
   * @summary Specifies the size. Defaults to `md`.
   */
  export let size: 'md' = 'md';

  const classes = clsx('badge', {
    [`badge--${palette}`]: palette,
    [`badge--${size}`]: size
  });

  const indicatorClasses = clsx('indicator', indicator && `indicator-${indicator}`);

  const labelClasses = clsx('label', indicator && 'has-indicator');
</script>

<div class={classes}>
  {#if indicator}
    <span class={indicatorClasses} />
  {/if}
  <span class={labelClasses}>
    <slot />
  </span>
</div>

<style lang="scss">
  .badge {
    display: inline-flex;
    align-items: center;
    font-weight: var(--font-weight--medium);
    border-radius: 99999px;

    font-size: var(--badge-font-size);
    padding: var(--badge-padding);
    color: var(--badge-color);
    background: var(--badge-bg);

    &--md {
      --badge-font-size: var(--font-size--sm);
      --badge-padding: 0.125rem 0.625rem;
    }

    &--base {
      --badge-color: var(--base-700);
      --badge-bg: var(--base-100);
      --badge-indicator-bg: var(--base-500);
    }
    &--primary {
      --badge-color: var(--primary-700);
      --badge-bg: var(--primary-50);
      --badge-indicator-bg: var(--primary-500);
    }
    &--success {
      --badge-color: var(--success-700);
      --badge-bg: var(--success-50);
      --badge-indicator-bg: var(--success-500);
    }
    &--danger {
      --badge-color: var(--danger-700);
      --badge-bg: var(--danger-50);
      --badge-indicator-bg: var(--danger-500);
    }

    .indicator {
      overflow: hidden;
      position: relative;
      width: 0.5rem;
      height: 0.5rem;

      &-ring {
        border-radius: 99999px;
        border: 1px solid var(--badge-indicator-bg);
      }

      &-dot {
        border-radius: 99999px;
        background: var(--badge-indicator-bg);
      }

      &-up {
        translate: 0 25%;
        rotate: 45deg;

        background: linear-gradient(
          135deg,
          var(--badge-indicator-bg) 0%,
          var(--badge-indicator-bg) 50%,
          transparent 50%,
          transparent 100%
        );
      }

      &-down {
        translate: 0 -25%;
        rotate: 45deg;

        background: linear-gradient(
          -45deg,
          var(--badge-indicator-bg) 0%,
          var(--badge-indicator-bg) 50%,
          transparent 50%,
          transparent 100%
        );
      }
    }

    .label {
      margin-left: var(--badge-label-margin-left);
      &.has-indicator {
        --badge-label-margin-left: 0.375rem;
      }
    }
  }
</style>
