<script lang="ts">
  import classNames from 'classnames';

  export let className: string | undefined = undefined;
  export { className as class };

  export let href: string | undefined = undefined;

  const tag = href ? 'a' : 'button';

  export let palette: 'base' | 'primary' = 'base';

  const baseClasses = 'px-4 py-3 font-bold tracking-wider text-b';
  const borderClasses = 'rounded-lg border border-base-500';
  const backgroundClasses = {
    base: 'bg-base-900 hover:bg-base-800',
    primary: 'bg-primary-900 hover:bg-primary-800'
  }[palette];
  const disabledClasses = 'cursor-not-allowed pointer-events-none opacity-50';

  const classes = classNames(
    className,
    baseClasses,
    borderClasses,
    backgroundClasses,
    $$props.disabled && disabledClasses
  );
</script>

<svelte:element this={tag} class={classes}><slot /></svelte:element>
