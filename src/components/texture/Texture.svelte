<script lang="ts">
  import CreditCard from './svgs/CreditCard.svelte';
  import SmoothWaves from './svgs/SmoothWaves.svelte';

  const Pattern = {
    SmoothWaves: 'SmoothWaves',
    CreditCard: 'CreditCard'
  } as const;

  type Pattern = typeof Pattern[keyof typeof Pattern];

  /**
   * @summary Determines which pattern should be used for the texture.
   */
  export let pattern: Pattern;
</script>

{#if pattern === 'SmoothWaves'}
  <SmoothWaves />
{:else if pattern === 'CreditCard'}
  <CreditCard />
{/if}

<style lang="scss">
  :global svg {
    --svg-path-fill: #00000010;
    --filter: brightness(90%);

    @include dark {
      --svg-path-fill: #ffffff10;
      --filter: brightness(150%);
    }

    --texture-bg: var(--current-bg, --svg-path-fill);

    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;

    & > path {
      fill: var(--texture-bg);
      filter: var(--filter);
      fill-opacity: 0.3;
    }
  }
</style>
