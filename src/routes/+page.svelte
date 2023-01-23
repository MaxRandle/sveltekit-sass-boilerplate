<script>
  import Button from '@components/button/Button.svelte';
  import Container from '@layouts/Container.svelte';
  import Section from '@layouts/Section.svelte';
  import { ArrowRightIcon } from 'svelte-feather-icons';

  import { page } from '$app/stores';
  import Typography from '@components/typography/Typography.svelte';
  import CardSection from '@components/card/CardSection.svelte';
  import Card from '@components/card/Card.svelte';
  import Avatar from '@components/avatar/Avatar.svelte';
  import AvatarContainer from '@components/avatar/AvatarContainer.svelte';

  import { signIn, signOut } from '@auth/sveltekit/client';
</script>

<Section>
  <Container class="grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
    <Card palette="primary-raised">
      <CardSection class="space-y-4">
        {#if $page.data.session}
          <AvatarContainer>
            <Avatar src={$page.data.session?.user?.image ?? ''} />
            <div>
              <Typography weight="semibold">
                {$page.data.session?.user?.name}
              </Typography>
              <Typography>
                {$page.data.session?.user?.email}
              </Typography>
            </div>
          </AvatarContainer>
          <Button on:click={signOut}>
            Sign out
            <ArrowRightIcon />
          </Button>
        {:else}
          <Button on:click={signIn}>
            Sign in
            <ArrowRightIcon />
          </Button>
        {/if}
      </CardSection>
    </Card>

    <div class="space-y-2">
      <Button href="/playground">
        Playground
        <ArrowRightIcon />
      </Button>
      <Button href="/browse">
        Browse
        <ArrowRightIcon />
      </Button>
      <Button disabled={!$page.data.session} href="/portfolio">
        Portfolio
        <ArrowRightIcon />
      </Button>
    </div>
  </Container>
</Section>
