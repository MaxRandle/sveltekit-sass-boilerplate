<script lang="ts">
  import classNames from 'classnames';

  let className: string | undefined = undefined;
  export { className as class };

  /**
   * @summary specifies if the element has top padding, defaults to `true`
   */
  export let hasTopPadding: boolean = true;

  const classes = classNames('relative p-6', className, { 'pt-0': !hasTopPadding });
</script>

<div class={classes}><slot /></div>
