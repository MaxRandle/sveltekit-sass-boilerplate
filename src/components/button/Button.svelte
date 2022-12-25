<script lang="ts">
  import classNames from 'classnames';

  let className: string | undefined = undefined;
  export { className as class };

  const classes = classNames({
    [className ?? '']: className
  });
</script>

<button class={classes} on:click>
  <slot />
</button>

<style lang="scss">
  button {
    --button-color: /*        */ var(--color, /*        */ inherit);
    --button-bg: /*           */ var(--bg, /*           */ var(--button-base-bg));
    --button-bg--hover: /*    */ var(--bg--hover, /*    */ var(--button-base-bg--hover));
    --button-border-color: /* */ var(--border-color, /* */ var(--border-color--base));

    --button-border-radius: 0.5rem;

    padding: 0.75rem 1rem;
    font-weight: bold;

    color: var(--button-color);
    background-color: var(--button-bg);
    border-color: var(--button-border-color);
    border-width: 1px;
    border-style: solid;
    border-radius: var(--button-border-radius);

    &:hover {
      --button-bg: var(--button-bg--hover);
    }
  }
</style>
