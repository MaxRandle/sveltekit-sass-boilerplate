<script lang="ts">
  import clsx from 'clsx';
  import { setAvatarGroupContext } from './@types';

  setAvatarGroupContext();

  const classes = clsx('avatar-group', $$props.class);
</script>

<div class={classes}><slot /></div>

<style lang="scss">
  .avatar-group {
    display: inline-flex;
    align-items: center;
  }
</style>
