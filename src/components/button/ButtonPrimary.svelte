<script lang="ts">
  import ButtonUnstyled from './ButtonUnstyled.svelte';
</script>

<ButtonUnstyled {...$$props} class="button-primary">
  <slot />
</ButtonUnstyled>

<style lang="scss" global>
  .button-primary {
    --color: white;
    --bg: var(--primary-600);
    --bg--hover: var(--primary-700);
    --border-color: var(--primary-600);
    --border-color--hover: var(--primary-700);
  }
</style>
