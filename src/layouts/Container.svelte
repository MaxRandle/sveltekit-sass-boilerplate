<script lang="ts">
  let className: string | undefined = undefined;
  export { className as class };
</script>

<div class="container {className}">
  <slot />
</div>
