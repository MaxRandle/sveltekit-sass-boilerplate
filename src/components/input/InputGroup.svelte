<script lang="ts">
  import clsx from 'clsx';
  import { setInputGroupContext } from './@types';
  setInputGroupContext();

  const classes = clsx('input-group', $$props.class);
</script>

<div class={classes} role="group">
  <slot />
</div>

<style lang="scss">
  .input-group {
    display: flex;
    &:global(> * + *) {
      margin-left: -1px;
    }
  }
</style>
