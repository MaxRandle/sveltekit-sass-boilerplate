<script lang="ts">
  const hues = ['base', 'primary', 'success', 'info', 'warning', 'danger'];
  const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

  let className: string | undefined;
  export { className as class };
</script>

<div class={`palette ${className ?? ''}`}>
  {#each shades as shade}
    {#each hues as hue}
      <div class="item --{hue}-{shade}" />
    {/each}
  {/each}
</div>

<style lang="scss">
  .palette {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(6, minmax(0, 1fr));

    & > .item {
      height: 2rem;
      border-radius: 0.5rem;
    }

    @each $shadeKey, $shadeValue in $shades {
      @each $hueKey, $hueValue in $hues {
        & > .--#{$hueKey}-#{$shadeKey} {
          background-color: var(--#{$hueKey}-#{$shadeKey});
        }
      }
    }
  }
</style>
