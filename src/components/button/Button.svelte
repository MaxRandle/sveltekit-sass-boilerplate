<script lang="ts">
  import ButtonUnstyled from './ButtonUnstyled.svelte';
  export let disabled: boolean | null | undefined = undefined;
</script>

<ButtonUnstyled {...$$props} class="button-base" on:click {disabled}>
  <slot />
</ButtonUnstyled>

<style lang="scss" global>
  .button-base {
    --color: var(--base-700);
    --color--hover: var(--base-800);
    --color--disabled: var(--base-300);
    --bg: var(--base-50);
    --bg--hover: var(--base-100);
    --bg--disabled: var(--base-50);

    @include dark {
      --color: var(--base-200);
      --color--hover: var(--base-100);
      --color--disabled: var(--base-600);
      --bg: var(--base-900);
      --bg--hover: var(--base-800);
      --bg--disabled: var(--base-900);
    }

    --border-color: var(--border-color--base);
    --border-color--hover: var(--border-color--base-hover);
    --border-color--disabled: var(--border-color--base-disabled);
  }
</style>
