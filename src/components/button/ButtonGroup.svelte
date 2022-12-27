<script lang="ts">
  import clsx from 'clsx';
  import { setButtonGroupContext } from './@types';
  setButtonGroupContext();

  const classes = clsx('button-group', $$props.class);
</script>

<div class={classes} role="group">
  <slot />
</div>

<style lang="scss">
  .button-group {
    display: inline-flex;
    &:global(> * + *) {
      margin-left: -1px;
    }
  }
</style>
