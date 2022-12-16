<script>
  import Card from '@components/card/Card.svelte';
  import CardBody from '@components/card/CardBody.svelte';
  import Palette from '@components/palette/Palette.svelte';
  import Section from '@layouts/Section.svelte';
</script>

<svelte:head>
  <title>Playground</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Section class="container">
  <h1>YoOoOooOOOOOza</h1>
</Section>

<Section class="container">
  <Palette />
</Section>

<Section class="container">
  <Card palette="primary-raised">
    <CardBody>Ayo Asuh</CardBody>
  </Card>
</Section>
