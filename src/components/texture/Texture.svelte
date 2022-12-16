<script lang="ts">
  const Pattern = {
    SmoothWaves: 'SmoothWaves',
    CreditCard: 'CreditCard'
  } as const;

  type Pattern = typeof Pattern[keyof typeof Pattern];

  export let pattern: Pattern;
</script>

{#if pattern === 'SmoothWaves'}{/if}
{#if pattern === 'CreditCard'}{/if}
