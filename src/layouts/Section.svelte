<script lang="ts">
  let className: string | undefined = undefined;
  export { className as class };
</script>

<section class="my-12 sm:my-20 {className ?? ''}">
  <slot />
</section>
