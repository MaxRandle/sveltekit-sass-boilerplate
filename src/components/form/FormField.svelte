<script lang="ts">
  import Typography from '@components/typography/Typography.svelte';

  export let label: string | undefined = undefined;
  export let helper: string | undefined = undefined;
  export let error: string | undefined = undefined;

  const classes = 'form-field';
</script>

<div class={classes}>
  {#if label}
    <Typography class="label">{label}</Typography>
  {/if}
  <slot />
  {#if helper}
    <Typography class="helper" level="sm" color="weak">{helper}</Typography>
  {/if}
  {#if error}
    <Typography class="error" level="sm" color="danger">{error}</Typography>
  {/if}
</div>

<style lang="scss">
  .form-field {
    --form-field-margin: 0.375rem;

    &:global(> * + *) {
      margin-top: var(--form-field-margin);
    }
    &:global(> .helper ~ *) {
      --form-field-margin: 0;
    }
  }
</style>
