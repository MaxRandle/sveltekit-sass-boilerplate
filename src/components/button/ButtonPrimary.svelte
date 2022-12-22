<script lang="ts">
  import Button from './Button.svelte';

  Button.name;
</script>

<Button {...$$props} --bg="var(--button-primary-bg)" --bg--hover="var(--button-primary-bg--hover)">
  <slot />
</Button>
