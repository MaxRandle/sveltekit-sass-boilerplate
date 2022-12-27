<script lang="ts">
  import ButtonUnstyled from './ButtonUnstyled.svelte';
</script>

<ButtonUnstyled {...$$props} class="button-base">
  <slot />
</ButtonUnstyled>

<style lang="scss" global>
  .button-base {
    --color: var(--base-700);
    --color--hover: var(--base-800);
    --bg: var(--base-50);
    --bg--hover: var(--base-100);

    @include dark {
      --color: var(--base-200);
      --color--hover: var(--base-100);
      --bg: var(--base-900);
      --bg--hover: var(--base-800);
    }

    --border-color: var(--border-color--base);
    --border-color--hover: var(--border-color--base-hover);
  }
</style>
