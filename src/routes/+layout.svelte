<script>
  import '@styles/theme.scss';
  import '@styles/tailwind.scss';
  import PageLayout from '@layouts/PageLayout.svelte';
</script>

<PageLayout><slot /></PageLayout>

<style global>
  html,
  body {
    font-family: var(--font-family);
    color: var(--text-color--base);
    background: var(--surface-bg--base);
  }
</style>
