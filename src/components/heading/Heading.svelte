<script lang="ts">
  /**
   * @summary the size of the heading. This property informs the DOM node type
   */
  export let level: 1 | 2 | 3;
  /**
   * @summary explicitly sets the DOM node type irrespective of 'level'
   */
  export let as: 'h1' | 'h2' | 'h3' | undefined = undefined;
  /**
   * @summary specifies the font-color, defaults to 'inherit'
   */
  export let color: 'base' | 'weak' | 'primary' | undefined = undefined;

  const tag = as ?? level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3';

  const className = `${color ? `heading--${color}` : ''} ${level ? `heading--${level}` : ''}`;
</script>

<svelte:element this={tag} class="heading {className}"><slot /></svelte:element>

<style lang="scss">
  .heading {
    display: block;
    color: inherit;

    // color
    &--base {
      color: var(--text-color--base);
    }
    &--weak {
      color: var(--text-color--weak);
    }
    &--primary {
      color: var(--text-color--primary);
    }

    // size
    &--3 {
      font-size: var(--heading-size--h3);
      line-height: var(--heading-line-height--h3);
      font-weight: var(--heading-weight--h3);
    }
    &--2 {
      font-size: var(--heading-size--h2);
      line-height: var(--heading-line-height--h2);
      font-weight: var(--heading-weight--h2);
    }
    &--1 {
      font-size: var(--heading-size--h1);
      line-height: var(--heading-line-height--h1);
      font-weight: var(--heading-weight--h1);
    }
  }
</style>
