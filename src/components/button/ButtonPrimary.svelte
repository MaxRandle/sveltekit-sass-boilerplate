<script lang="ts">
  import Button from './Button.svelte';
</script>

<Button {...$$props} --bg="var(--button-primary-bg)" --bg--hover="var(--button-primary-bg--hover)">
  <slot />
</Button>
