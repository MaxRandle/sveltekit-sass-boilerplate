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

  export let click: ((event: Event) => void) | undefined = undefined;

  let tag = click ? 'button' : 'div';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element this={tag} class="card {cardClass} {$$props.class}" on:click={click}>
  {#if pattern}
    <Texture {pattern} />
  {/if}
  <slot />
</svelte:element>

<style lang="scss">
  .card {
    text-align: left;
    border-radius: var(--border-radius--surface);
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
