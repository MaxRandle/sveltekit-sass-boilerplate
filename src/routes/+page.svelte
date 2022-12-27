<script>
  import Card from '@components/card/Card.svelte';
  import CardSection from '@components/card/CardSection.svelte';
  import Heading from '@components/heading/Heading.svelte';
  import Typography from '@components/typography/Typography.svelte';
  import Container from '@layouts/Container.svelte';
  import Section from '@layouts/Section.svelte';
  import { formatNumberAsCurrency } from '@helpers/formatNumber';
  import Button from '@components/button/Button.svelte';
  import ButtonPrimary from '@components/button/ButtonPrimary.svelte';
  import ButtonDanger from '@components/button/ButtonDanger.svelte';
  import ButtonGroup from '@components/button/ButtonGroup.svelte';
  import Avatar from '@components/avatar/Avatar.svelte';
  import { UserIcon } from 'svelte-feather-icons';
  import AvatarContainer from '@components/avatar/AvatarContainer.svelte';
  import AvatarGroup from '@components/avatar/AvatarGroup.svelte';
</script>

<svelte:head>
  <title>Playground</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Section>
  <Container class="space-y-4">
    <Heading color="primary" level={{ base: 'md', md: '2xl' }}>Okay bro.</Heading>
    <!-- <Heading color="base" level={2}>Okay bro.</Heading> -->
    <!-- <Heading color="primary" level={3}>Okay bro.</Heading> -->

    <Typography color="weak" level="lg">Okay bro.</Typography>
    <Typography color="weak" level="md">Okay bro.</Typography>
    <Typography color="weak" level="sm">Okay bro.</Typography>
  </Container>
</Section>

<Section>
  <Container>
    <Card texture="Bubbles">
      <CardSection>
        <Typography color="weak">Wallet balance</Typography>
        <!-- <Heading class="mt-2" level={3}>
          {formatNumberAsCurrency(5684.6)}
        </Heading> -->
      </CardSection>

      <CardSection class="pt-0">
        <Button>Withdraw</Button>
        <ButtonPrimary>Deposit</ButtonPrimary>
        <ButtonDanger>Delete</ButtonDanger>
      </CardSection>

      <CardSection class="pt-0">
        <ButtonGroup>
          <Button>ABC</Button>
          <Button>ABC</Button>
          <Button>ABC</Button>
        </ButtonGroup>
      </CardSection>
    </Card>
  </Container>
</Section>

<Section>
  <Container class="space-y-4">
    <AvatarContainer>
      <Avatar size="sm">OR</Avatar>
      <div>
        <Typography class="font-semibold">Olivia Rhye</Typography>
        <Typography color="weak">olivia@untitledui.com</Typography>
      </div>
    </AvatarContainer>
    <AvatarContainer>
      <Avatar size="md"><UserIcon /></Avatar>
      <div>
        <Typography class="font-semibold">Olivia Rhye</Typography>
        <Typography color="weak">olivia@untitledui.com</Typography>
      </div>
    </AvatarContainer>
    <AvatarContainer>
      <Avatar size="lg" src="http://placekitten.com/300/500/" />
      <div>
        <Typography class="font-semibold">Olivia Rhye</Typography>
        <Typography color="weak">olivia@untitledui.com</Typography>
      </div>
    </AvatarContainer>

    <AvatarGroup>
      <Avatar>OR</Avatar>
      <Avatar><UserIcon /></Avatar>
      <Avatar src="http://placekitten.com/96/96/" />
      <Avatar>+5</Avatar>
    </AvatarGroup>
  </Container>
</Section>
