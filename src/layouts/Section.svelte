<script lang="ts">
  import cn from 'classnames';

  let className: string | undefined = undefined;
  export { className as class };

  /**
   * @summary specifies the background color
   */
  export let palette: 'primary' | undefined = undefined;

  /**
   * @summary removes the top margin
   */
  export let isFirstSection: boolean | undefined = undefined;

  const classes = {
    ['mt-0 sm:mt-0']: isFirstSection,
    [palette ?? '']: palette,
    ['py-20 sm:py-32']: palette,
    [className ?? '']: className
  };
</script>

<section class="my-20 sm:my-32 {cn(classes)}">
  <slot />
</section>

<style lang="scss">
  .primary {
    background-color: var(--surface-bg--primary);
  }
</style>
