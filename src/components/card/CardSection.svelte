<script lang="ts">
  import clsx from 'clsx';

  let className: string | undefined = undefined;
  export { className as class };

  /**
   * @summary specifies if the element has top padding, defaults to `true`
   */
  export let hasTopPadding: boolean = true;

  const classes = clsx('relative p-4 md:p-6', className, { 'pt-0 md:pt-0': !hasTopPadding });
</script>

<div class={classes}><slot /></div>
