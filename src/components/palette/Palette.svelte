<script>
  const hues = ['base', 'primary', 'success', 'info', 'warning', 'danger'];
  const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
</script>

<div class="palette">
  <div class="item red" />
  <div class="item blue" />
</div>

<!-- {#each shades as shade}
  {#each hues as hue}
    <div class="item --{hue}-{shade}" />
  {/each}
{/each} -->

<!-- @each $key, $value in $shades {
    & > .--base-#{$key} {
      background-color: var(--base-#{$key});
    }
  } -->
<style lang="scss">
  /* @import '../../styles/theme'; */

  .palette {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(6, minmax(0, 1fr));

    & > .item {
      height: 2rem;
      border-radius: 0.5rem;
      border: 2px solid white;
    }

    & > .blue {
      background-color: var(--test-var-red);
    }

    $shades: (
      '50': '50',
      '100': '100',
      '200': '200',
      '300': '300',
      '400': '400',
      '500': '500',
      '600': '600',
      '700': '700',
      '800': '800',
      '900': '900'
    );
  }
</style>
