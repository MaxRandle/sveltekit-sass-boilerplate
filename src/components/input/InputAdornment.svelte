<script lang="ts">
  import clsx from 'clsx';
  import { getInputGroupContext } from './@types';

  const group = getInputGroupContext();

  const classes = clsx('input-adornment', group && 'group');
</script>

<div class={classes} {...$$restProps}><slot /></div>

<style lang="scss">
  .input-adornment {
    --input-adornment-border: 1px solid var(--input-border-color);

    flex-shrink: 0;
    padding: 0.625rem 0.875rem;
    border-radius: 0.5rem;

    color: var(--input-placeholder-color);
    background: var(--input-bg);
    border: var(--input-adornment-border);
  }

  .group {
    border-radius: 0;
    border-right: none;
    border-left: none;

    &:first-child {
      border-left: var(--input-adornment-border);
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
    &:last-child {
      border-right: var(--input-adornment-border);
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
  }
</style>
