<script lang="ts">
  import ButtonUnstyled from './ButtonUnstyled.svelte';
</script>

<ButtonUnstyled {...$$props} class="button-base">
  <slot />
</ButtonUnstyled>

<style lang="scss" global>
  .button-base {
    --color: inherit;
    --bg: var(--base-50);
    --bg--hover: var(--base-100);
    --border-color: var(--border-color--base);
    --border-color--hover: var(--border-color--base-hover);

    @include dark {
      --bg: var(--base-900);
      --bg--hover: var(--base-800);
    }
  }
</style>
