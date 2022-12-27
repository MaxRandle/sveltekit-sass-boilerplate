<script lang="ts">
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
  export let size: 'sm' | 'md' | 'lg' = 'md';

  const classes = clsx(
    'avatar',
    container && 'has-container',
    group && 'has-group',
    {
      [`avatar--${size}`]: true
    },
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99999px;
    overflow: hidden;

    color: var(--primary-600);
    background-color: var(--primary-50);
    letter-spacing: 0.025em;
    font-weight: (--font-weight--medium);

    &--sm {
      font-size: var(--font-size--md);
      --avatar-icon-size: 1.5rem;
      --container-margin: 0.75rem;
      width: 2.5rem;
      height: 2.5rem;
    }
    &--md {
      font-size: var(--font-size--lg);
      --avatar-icon-size: 1.75rem;
      --container-margin: 0.75rem;
      width: 3rem;
      height: 3rem;
    }
    &--lg {
      font-size: var(--font-size--xl);
      --avatar-icon-size: 2rem;
      --container-margin: 1rem;
      width: 3.5rem;
      height: 3.5rem;
    }

    & > img {
      object-fit: cover;
    }

    &.has-container {
      margin-right: var(--container-margin);
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
</style>
