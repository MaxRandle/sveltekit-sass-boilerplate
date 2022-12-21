<script lang="ts">
  import Texture from '@components/texture/Texture.svelte';
  import type { ComponentProps } from 'svelte';
  type Pattern = ComponentProps<Texture>['pattern'];

  /**
   * @summary specifies the background color, defaults to `raised`
   */
  export let palette: 'base' | 'base-raised' | 'primary-raised' = 'base-raised';

  /**
   * @summary specifies the background texture for the w
   */
  let pattern: Pattern | undefined = undefined;
  export { pattern as texture };
  const cardClass = `card--bg-${palette}`;
</script>

<div class="card {cardClass}">
  {#if pattern}
    <Texture {pattern} />
  {/if}
  <slot />
</div>

<style lang="scss">
  .card {
    border-radius: var(--border-radius--md);
    position: relative;
    overflow: hidden;

    background-color: var(--card-bg);

    &--bg-base {
      --card-bg: var(--surface-bg--base);
    }
    &--bg-base-raised {
      --card-bg: var(--surface-bg--base-raised);
    }
    &--bg-primary-raised {
      --card-bg: var(--surface-bg--primary-raised);
    }

    :global & > * {
      --current-bg: var(--card-bg);
    }
  }
</style>
