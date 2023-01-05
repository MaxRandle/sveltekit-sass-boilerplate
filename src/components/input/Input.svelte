<script lang="ts">
  import clsx from 'clsx';

  const classes = clsx('input', $$props.class);
</script>

<input class={classes} {...$$restProps} />

<style lang="scss">
  .input {
    width: 100%;
    outline: 0;
    position: relative;
    appearance: none;
    padding: 0.625rem 0.875rem;
    border-radius: 0.5rem;

    color: var(--base-900);
    background: var(--input-bg);
    border: 1px solid var(--input-border-color);

    @include dark {
      color: var(--base-50);
    }

    &:not([aria-invalid='true']) {
      &:focus-visible:not(:disabled),
      &:focus:not(:disabled) {
        outline: var(--focus-outline--primary);
        --input-border-color: var(--input-border-color--focus);
      }
    }
    &[aria-invalid='true'] {
      --input-border-color: var(--input-border-color--invalid);
      &:focus-visible:not(:disabled),
      &:focus:not(:disabled) {
        outline: var(--focus-outline--danger);
      }
    }

    &::placeholder {
      color: var(--base-500);
    }

    &:disabled {
      opacity: 0.6;
      --input-bg: var(--input-bg--disabled);
    }
  }
</style>
