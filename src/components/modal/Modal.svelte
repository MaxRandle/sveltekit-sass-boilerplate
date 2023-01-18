<script lang="ts">
  import clsx from 'clsx';

  /**
   * @summary boolean to dictate whether the modal should display in its open state
   */
  export let open: boolean | undefined = undefined;

  /**
   * @summary callback to close the modal
   */
  export let onClose: (() => void) | undefined = undefined;

  function handleKeydown(e: KeyboardEvent) {
    console.log('escape key press');
    if (e.key === 'Escape') {
      onClose?.();
    }
  }
  const handleClick = (e: MouseEvent) => {
    const target: Element = e.target as Element;
    if (target?.className.includes('modal-container')) {
      onClose?.();
    }
  };

  const backdropClasses = clsx('modal-backdrop', 'fixed');
  const containerClasses = clsx('modal-container', 'fixed');
</script>

{#if open}
  <div class={backdropClasses} />

  <div class={containerClasses} on:keydown={handleKeydown} on:click={handleClick}>
    <slot />
  </div>
{/if}

<style lang="scss">
  * {
    --modal-z-index: 40;
  }

  .fixed {
    position: fixed;
    z-index: var(--modal-z-index);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .modal-backdrop {
    background: var(--base-900);
    opacity: 60%;
  }

  .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
