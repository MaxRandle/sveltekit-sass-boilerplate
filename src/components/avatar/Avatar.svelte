<script lang="ts">
  import { getResponsiveClasses, type ResponsiveProp } from '@helpers/components';
  import clsx from 'clsx';
  import { getAvatarContainerContext, getAvatarGroupContext } from './@types';

  const group = getAvatarGroupContext();
  const container = getAvatarContainerContext();

  /**
   * @summary Image url.
   */
  export let src: string | undefined = undefined;

  /**
   * @summary Alt text for the image. Required if `src` is supplied.
   */
  export let alt: string | undefined = undefined;

  /**
   * @summary Determines the size of the avatar, and text/icon children. Defaults to `md`.
   */
  export let size: ResponsiveProp<'sm' | 'md' | 'lg'> = 'md';
  const sizeClasses = getResponsiveClasses('size', size);

  const classes = clsx(
    'avatar',
    container && 'has-container',
    group && 'has-group',
    sizeClasses,
    $$props.class
  );
</script>

<div class={classes}>
  {#if src}
    <img {src} {alt} />
  {/if}
  <slot />
</div>

<style lang="scss">
  .avatar {
    --avatar-size--sm: 2.5rem;
    --avatar-icon-size--sm: 1.5rem;
    --avatar-font-size--sm: var(--font-size--md);
    --avatar-container-margin--sm: 0.75rem;

    --avatar-size--md: 3rem;
    --avatar-icon-size--md: 1.75rem;
    --avatar-font-size--md: var(--font-size--lg);
    --avatar-container-margin--md: 0.75rem;

    --avatar-size--lg: 3.5rem;
    --avatar-icon-size--lg: 2rem;
    --avatar-font-size--lg: var(--font-size--xl);
    --avatar-container-margin--lg: 1rem;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99999px;
    overflow: hidden;
    flex-shrink: 0;

    color: var(--primary-600);
    background-color: var(--primary-50);
    letter-spacing: 0.025em;
    font-weight: (--font-weight--medium);

    font-size: var(--avatar-font-size);
    width: var(--avatar-size);
    height: var(--avatar-size);

    & > img {
      object-fit: cover;
    }

    &.has-container {
      margin-right: var(--avatar-container-margin);
    }

    &.has-group {
      margin-left: -1rem;
      border: 2px solid var(--surface-bg--base);

      &:first-child {
        margin-left: 0;
      }
    }
  }

  .avatar :global(svg) {
    display: block;
    width: var(--avatar-icon-size);
    height: var(--avatar-icon-size);
  }

  $avatar-size-map: ('sm', 'md', 'lg');
  @include make-responsive-classes('size', $avatar-size-map) using ($avatar-size) {
    --avatar-size: var(--avatar-size--#{$avatar-size});
    --avatar-icon-size: var(--avatar-icon-size--#{$avatar-size});
    --avatar-font-size: var(--avatar-font-size--#{$avatar-size});
    --avatar-container-margin: var(--avatar-container-margin--#{$avatar-size});
  }
</style>
