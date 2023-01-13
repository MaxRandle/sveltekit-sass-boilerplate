<script lang="ts">
  import Bubbles from './svgs/Bubbles.svelte';
  import CurvedStripes from './svgs/CurvedStripes.svelte';
  import DiagonalWave from './svgs/DiagonalWave.svelte';

  const Pattern = {
    DiagonalWave: 'DiagonalWave',
    Bubbles: 'Bubbles',
    CurvedStripes: 'CurvedStripes'
  } as const;

  type Pattern = (typeof Pattern)[keyof typeof Pattern];

  /**
   * @summary Determines which pattern should be used for the texture.
   */
  export let pattern: Pattern;
</script>

{#if pattern === 'DiagonalWave'}
  <DiagonalWave class="texture-svg" />
{:else if pattern === 'Bubbles'}
  <Bubbles class="texture-svg" />
{:else if pattern === 'CurvedStripes'}
  <CurvedStripes class="texture-svg" />
{/if}

<style lang="scss" global>
  .texture-svg {
    --texture-svg-path-fill: #00000010;
    --texture-svg-filter: brightness(90%);

    @include dark {
      --texture-svg-path-fill: #ffffff10;
      --texture-svg-filter: brightness(150%);
    }

    --texture-bg: var(--current-bg, --texture-svg-path-fill);

    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;

    path {
      fill: var(--texture-bg);
      filter: var(--texture-svg-filter);
      fill-opacity: 0.3;
    }
  }
</style>
