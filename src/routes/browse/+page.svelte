<script lang="ts">
  import type { PageData } from './$types';
  import Typography from '@components/typography/Typography.svelte';
  import Section from '@layouts/Section.svelte';
  import Container from '@layouts/Container.svelte';
  import Card from '@components/card/Card.svelte';
  import CardSection from '@components/card/CardSection.svelte';
  import AvatarContainer from '@components/avatar/AvatarContainer.svelte';
  import Avatar from '@components/avatar/Avatar.svelte';
  import { formatLargeNumberAsCurrency, formatNumberAsCurrency } from '@helpers/formatNumber';
  import Badge from '@components/badge/Badge.svelte';

  export let data: PageData;
  const { securities } = data;
</script>

<Section>
  <Container class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
    {#each securities as security}
      <Card>
        <CardSection class="p-4 sm:p-6">
          <AvatarContainer>
            <Avatar
              size={{ base: 'sm', sm: 'md' }}
              src={security.logoUrl}
              alt={`${security.name} logo`}
            />
            <div>
              <Typography level={{ base: 'sm', sm: 'md' }} weight="medium">
                {security.name}
              </Typography>
              <Typography level={{ base: 'sm', sm: 'md' }} color="weak">
                {security.ticker} • {security.exchange} • {formatLargeNumberAsCurrency(
                  security.marketCap
                )}
              </Typography>
            </div>
          </AvatarContainer>
          <div class="mt-3 flex grow items-center gap-2">
            <Badge
              palette={security.change24h > 0 ? 'success' : 'danger'}
              indicator={security.change24h > 0 ? 'up' : 'down'}
            >
              {security.change24h}%
            </Badge>
            <Typography weight="medium" level={{ base: 'sm', sm: 'md' }}>
              {formatNumberAsCurrency(security.sharePriceInCents / 100)}
            </Typography>
          </div>
        </CardSection>
      </Card>
    {/each}
  </Container>
</Section>
