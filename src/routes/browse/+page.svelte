<script lang="ts">
  import type { PageData } from './$types';
  import Typography from '@components/typography/Typography.svelte';

  export let data: PageData;
  const { securities } = data;
</script>

<Typography>
  <pre>
      {#each securities as security}
      <code>
          {security.ticker}
          {security.name}
          {security.exchange}
          {security.sharePrice}
          {security.change24h}
        
    </code>
    {/each}
  </pre>
</Typography>
