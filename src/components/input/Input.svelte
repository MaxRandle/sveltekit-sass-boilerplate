<script lang="ts">
  import clsx from 'clsx';
  import { getInputGroupContext } from './@types';

  const group = getInputGroupContext();

  const classes = clsx('input', group && 'group', $$props.class);
</script>

<input class={classes} {...$$restProps} />

<style lang="scss">
  .input {
    width: 100%;
    appearance: none;
    padding: 0.625rem 0.875rem;
    border-radius: 0.5rem;

    color: var(--input-color);
    background: var(--input-bg);
    border: 1px solid var(--input-border-color);

    &:not(:disabled) {
      &:not([aria-invalid='true']) {
        &:focus-visible,
        &:focus {
          outline: var(--focus-outline--primary);
          border: 1px solid var(--input-border-color--focus);
        }
      }

      &[aria-invalid='true'] {
        border: 1px solid var(--input-border-color--invalid);
        &:focus-visible,
        &:focus {
          outline: var(--focus-outline--danger);
        }
      }
    }

    &:read-only {
      pointer-events: none;
    }

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &:disabled {
      opacity: 0.6;
      --input-bg: var(--input-bg--disabled);
    }
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
    &:focus-visible {
      position: relative;
    }
  }
</style>
