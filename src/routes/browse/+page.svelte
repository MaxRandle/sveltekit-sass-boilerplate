<script lang="ts">
  import type { PageData } from './$types';
  import Typography from '@components/typography/Typography.svelte';
  import Section from '@layouts/Section.svelte';
  import Container from '@layouts/Container.svelte';
  import Card from '@components/card/Card.svelte';
  import CardSection from '@components/card/CardSection.svelte';
  import AvatarContainer from '@components/avatar/AvatarContainer.svelte';
  import Avatar from '@components/avatar/Avatar.svelte';
  import {
    formatLargeNumber,
    formatLargeNumberAsCurrency,
    formatNumberAsCurrency,
    formatNumberAsPercentage
  } from '@helpers/formatNumber';
  import Badge from '@components/badge/Badge.svelte';
  import Modal from '@components/modal/Modal.svelte';
  import type { Security } from '../api/securities/+server';
  import Table from '@components/table/Table.svelte';
  import Tr from '@components/table/Tr.svelte';
  import Td from '@components/table/Td.svelte';

  export let data: PageData;
  const { securities } = data;

  let modalOpen = false;
  const closeModal = () => {
    modalOpen = false;
  };
  const openModal = () => {
    modalOpen = true;
  };

  let currentSecurity: Security | undefined = undefined;
  const setCurrentSecurity = (security: Security) => {
    currentSecurity = security;
  };

  $: securityData = currentSecurity
    ? [
        {
          label: 'market cap',
          value: formatLargeNumberAsCurrency(currentSecurity?.marketCap),
          type: 'text'
        },
        {
          label: 'share price',
          value: formatNumberAsCurrency(currentSecurity?.sharePriceInCents / 100),
          type: 'text'
        },
        {
          label: '24hr change',
          value: currentSecurity?.change24h,
          type: 'badge'
        },
        {
          label: 'exchange',
          value: currentSecurity?.exchange,
          type: 'text'
        },
        {
          label: '52 week high',
          value: formatNumberAsCurrency(currentSecurity?.high52WeekInCents / 100),
          type: 'text'
        },
        {
          label: '52 week low',
          value: formatNumberAsCurrency(currentSecurity?.low52WeekInCents / 100),
          type: 'text'
        },
        {
          label: 'p/e ratio',
          value: currentSecurity?.peRatio,
          type: 'text'
        },
        {
          label: '24hr volume',
          value: formatLargeNumber(currentSecurity?.volume24h),
          type: 'text'
        },
        {
          label: 'dividend yield',
          value: formatNumberAsPercentage(currentSecurity?.dividendYield),
          type: 'text'
        }
      ]
    : [];
</script>

<Modal open={modalOpen} onClose={closeModal}>
  {#if currentSecurity}
    <Card class="min-w-[20rem]">
      <CardSection class="p-4 sm:p-6">
        <AvatarContainer>
          <Avatar
            size={{ base: 'sm', sm: 'md' }}
            src={currentSecurity.logoUrl}
            alt={`${currentSecurity.name} logo`}
          />
          <div>
            <Typography level={{ base: 'sm', sm: 'md' }} weight="medium">
              {currentSecurity.name}
            </Typography>
            <Typography level={{ base: 'sm', sm: 'md' }} color="weak">
              {currentSecurity.ticker} • {formatLargeNumberAsCurrency(currentSecurity.marketCap)}
            </Typography>
          </div>
        </AvatarContainer>

        <Table class="mt-4">
          {#each securityData as row}
            <Tr>
              <Td>
                <Typography level={{ base: 'sm', sm: 'md' }}>{row.label}</Typography>
              </Td>
              <Td class="text-right">
                {#if row.type === 'text'}
                  <Typography level={{ base: 'sm', sm: 'md' }}>
                    {row.value}
                  </Typography>
                {:else if row.type === 'badge'}
                  <Badge
                    palette={row.value > 0 ? 'success' : 'danger'}
                    indicator={row.value > 0 ? 'up' : 'down'}
                  >
                    {row.value}%
                  </Badge>
                {/if}
              </Td>
            </Tr>
          {/each}
        </Table>
      </CardSection>
    </Card>
  {/if}
</Modal>

<Section>
  <Container class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
    {#each securities as security}
      <Card
        click={() => {
          setCurrentSecurity(security);
          openModal();
        }}
      >
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
                {security.ticker} • {formatLargeNumberAsCurrency(security.marketCap)}
              </Typography>
            </div>
          </AvatarContainer>
          <div class="mt-4 flex grow items-center justify-between gap-2">
            <Typography weight="medium" level={{ base: 'sm', sm: 'md' }}>
              {formatNumberAsCurrency(security.sharePriceInCents / 100)}
            </Typography>
            <Badge
              palette={security.change24h > 0 ? 'success' : 'danger'}
              indicator={security.change24h > 0 ? 'up' : 'down'}
            >
              {security.change24h}%
            </Badge>
          </div>
        </CardSection>
      </Card>
    {/each}
  </Container>
</Section>
