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
  import { ArrowLeftIcon, ArrowRightIcon, PlusIcon, UserIcon } from 'svelte-feather-icons';
  import AvatarContainer from '@components/avatar/AvatarContainer.svelte';
  import AvatarGroup from '@components/avatar/AvatarGroup.svelte';
  import Badge from '@components/badge/Badge.svelte';
  import Input from '@components/input/Input.svelte';
  import InputGroup from '@components/input/InputGroup.svelte';
  import InputAdornment from '@components/input/InputAdornment.svelte';
  import FormField from '@components/form/FormField.svelte';
</script>

<svelte:head>
  <title>Playground</title>
</svelte:head>

<Section>
  <Container class="space-y-4">
    <Heading color="primary" level={{ base: 'lg', md: '2xl' }}>Okay bro.</Heading>
    <Heading color="primary" level={{ base: 'md', md: 'xl' }}>Okay bro.</Heading>
    <Heading color="primary" level={{ base: 'sm', md: 'lg' }}>Okay bro.</Heading>

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
        <Heading class="mt-2" level="sm">
          {formatNumberAsCurrency(5684.6)}
        </Heading>
      </CardSection>

      <CardSection class="flex gap-2 pt-0">
        <Button>Withdraw</Button>
        <ButtonPrimary>Deposit</ButtonPrimary>
        <ButtonDanger>Delete</ButtonDanger>
      </CardSection>

      <CardSection class="pt-0">
        <ButtonGroup>
          <Button><ArrowLeftIcon /></Button>
          <Button><PlusIcon /></Button>
          <Button>ABC</Button>
          <Button><ArrowRightIcon /></Button>
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
        <Typography level="sm" weight="semibold">Olivia Rhye</Typography>
        <Typography level="sm" color="weak">olivia@untitledui.com</Typography>
      </div>
    </AvatarContainer>
    <AvatarContainer>
      <Avatar size="md"><UserIcon /></Avatar>
      <div>
        <Typography level="md" weight="semibold">Olivia Rhye</Typography>
        <Typography level="md" color="weak">olivia@untitledui.com</Typography>
      </div>
    </AvatarContainer>
    <AvatarContainer>
      <Avatar size="lg" src="http://placekitten.com/300/500/" />
      <div>
        <Typography level="lg" weight="semibold">Olivia Rhye</Typography>
        <Typography level="lg" color="weak">olivia@untitledui.com</Typography>
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

<Section>
  <Container>
    <Badge indicator="ring" palette="base">Inactive</Badge>
    <Badge indicator="dot" palette="primary">Active</Badge>
    <Badge indicator="up" palette="success">+29.6%</Badge>
    <Badge indicator="down" palette="danger">-18.8%</Badge>
  </Container>
</Section>

<Section palette="primary">
  <Container class="space-y-4">
    <Input placeholder="example@email.com" />
    <Input disabled placeholder="example@email.com" />
    <Input aria-invalid placeholder="example@email.com" />

    <InputGroup>
      <InputAdornment>https://</InputAdornment>
      <Input placeholder="example.com" />
    </InputGroup>

    <FormField label="Height" helper="Enter your height in cm" error="This field is required">
      <InputGroup>
        <Input placeholder="175" aria-invalid />
        <InputAdornment>cm</InputAdornment>
      </InputGroup>
    </FormField>
  </Container>
</Section>
