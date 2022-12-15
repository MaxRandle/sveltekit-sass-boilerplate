<script>
  import '@styles/reset.scss';
  import '@styles/tailwind.scss';
  import '@styles/theme.scss';
</script>

<main class="pt-10 pb-20 min-h-screen overflow-hidden">
  <slot />
</main>

<style lang="scss">
  main {
    font-family: var(--font-family);
    color: var(--text-color--base);
    background: var(--surface-bg--base);
  }
</style>
