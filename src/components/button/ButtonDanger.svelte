<script lang="ts">
  import ButtonUnstyled from './ButtonUnstyled.svelte';
</script>

<ButtonUnstyled {...$$props} class="button-danger">
  <slot />
</ButtonUnstyled>

<style lang="scss" global>
  .button-danger {
    --color: white;
    --color--hover: white;
    --bg: var(--danger-600);
    --bg--hover: var(--danger-700);
    --border-color: var(--danger-600);
    --border-color--hover: var(--danger-700);
  }
</style>
