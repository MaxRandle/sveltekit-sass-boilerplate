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

    --input-bg: white;
    --input-border-color: var(--base-300);
    --input-border-color--focus: var(--primary-300);
    --input-border-color--invalid: var(--danger-300);

    --input-dark-bg: var(--base-900);
    --input-dark-border-color: var(--base-600);
    --input-dark-border-color--focus: var(--primary-600);
    --input-dark-border-color--invalid: var(--danger-600);

    @include dark {
      color: var(--base-50);

      --input-bg: var(--input-dark-bg);
      --input-border-color: var(--input-dark-border-color);
      --input-border-color--invalid: var(--input-dark-border-color--invalid);
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
      --input-bg: var(--base-100);
      --input-dark-bg: var(--base-800);
    }
  }
</style>
