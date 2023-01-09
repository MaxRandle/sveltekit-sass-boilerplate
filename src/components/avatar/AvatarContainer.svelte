<script lang="ts">
  import clsx from 'clsx';
  import { setAvatarContainerContext } from './@types';

  setAvatarContainerContext();

  const classes = clsx('avatar-container', $$props.class);
</script>

<div class={classes}>
  <slot />
</div>

<style lang="scss">
  .avatar-container {
    display: flex;
  }
</style>
