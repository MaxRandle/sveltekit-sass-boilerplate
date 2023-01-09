<script>
  import Button from '@components/button/Button.svelte';
  import Container from '@layouts/Container.svelte';
  import Section from '@layouts/Section.svelte';
  import { ArrowRightIcon } from 'svelte-feather-icons';
</script>

<Section>
  <Container class="flex flex-col gap-4">
    <Button href="/playground">
      Playground
      <ArrowRightIcon />
    </Button>
    <Button href="/browse">
      Browse
      <ArrowRightIcon />
    </Button>
    <Button href="/portfolio">
      Portfolio
      <ArrowRightIcon />
    </Button>
  </Container>
</Section>
