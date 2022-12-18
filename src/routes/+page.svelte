<script>
  import Card from '@components/card/Card.svelte';
  import CardBody from '@components/card/CardBody.svelte';
  import Heading from '@components/heading/Heading.svelte';
  import Palette from '@components/palette/Palette.svelte';
  import Typography from '@components/typography/Typography.svelte';
  import Container from '@layouts/Container.svelte';
  import Section from '@layouts/Section.svelte';
</script>

<svelte:head>
  <title>Playground</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Section palette="primary" isFirstSection>
  <Container class="space-y-4">
    <Heading color="primary" level={1}>YoOoOooOOOOOza</Heading>
    <Heading color="primary" level={2}>AyooooOoOo Asuuuuuuuuuuh</Heading>
    <Heading color="primary" level={3}>assuuuh duuud</Heading>
    <Typography color="primary" level="body">suh dud</Typography>
    <Typography color="primary" level="caption">suh</Typography>
  </Container>
</Section>

<Section>
  <Container>
    <Palette />
  </Container>
</Section>

<Section>
  <Container>
    <Card palette="primary-raised">
      <CardBody />
    </Card>
  </Container>
</Section>
