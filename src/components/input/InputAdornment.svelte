<script lang="ts">
  import clsx from 'clsx';
  import { getInputGroupContext } from './@types';

  const group = getInputGroupContext();

  const classes = clsx('input-adornment', group && 'group', $$props.class);
</script>

<div class={classes} {...$$restProps}><slot /></div>

<style lang="scss">
  .input-adornment {
    flex-shrink: 0;
    padding: 0.625rem 0.875rem;
    border-radius: 0.5rem;

    color: var(--input-placeholder-color);
    background: var(--input-bg);
    border: 1px solid var(--input-border-color);
  }

  .group {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
    &:last-child {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
  }
</style>
