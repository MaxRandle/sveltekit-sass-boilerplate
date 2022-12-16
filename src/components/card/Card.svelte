<script lang="ts">
  /**
   * @summary specifies the background color, defaults to `raised`
   */
  export let palette: 'base' | 'base-raised' | 'primary-raised' = 'base-raised';
  const cardClass = `card--bg-${palette}`;
</script>

<div class="card {cardClass}"><slot /></div>

<style lang="scss">
  .card {
    border-radius: var(--border-radius--md);
    position: relative;
    overflow: hidden;

    &--bg-base {
      background-color: var(--surface-bg--base);
    }
    &--bg-base-raised {
      background-color: var(--surface-bg--base-raised);
    }
    &--bg-primary-raised {
      background-color: var(--surface-bg--primary-raised);
    }

    & > .texture {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
