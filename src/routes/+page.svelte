<script>
  import Card from '@components/card/Card.svelte';
  import CardSection from '@components/card/CardSection.svelte';
  import Heading from '@components/heading/Heading.svelte';
  // import Palette from '@components/palette/Palette.svelte';
  import Typography from '@components/typography/Typography.svelte';
  import Container from '@layouts/Container.svelte';
  import Section from '@layouts/Section.svelte';
  import { formatNumberAsCurrency } from '@helpers/formatNumber';
  import Button from '@components/button/Button.svelte';
  import ButtonPrimary from '@components/button/ButtonPrimary.svelte';
</script>

<svelte:head>
  <title>Playground</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Section>
  <Container class="space-y-4">
    <Heading color="primary" level={1}>Okay bro.</Heading>
    <Heading color="primary" level={2}>Okay bro.</Heading>
    <Heading color="primary" level={3}>Okay bro.</Heading>

    <Typography color="weak" level="lg">Okay bro.</Typography>
    <Typography color="weak" level="md">Okay bro.</Typography>
    <Typography color="weak" level="sm">Okay bro.</Typography>
  </Container>
</Section>

<Section>
  <Container>
    <Card texture="CreditCard">
      <CardSection>
        <Typography color="weak">Wallet balance</Typography>
        <Heading class="mt-2" level={3}>
          {formatNumberAsCurrency(5684.6)}
        </Heading>
      </CardSection>

      <CardSection class="pt-0">
        <Button>Withdraw</Button>
        <ButtonPrimary>Deposit</ButtonPrimary>
      </CardSection>
    </Card>
  </Container>
</Section>
