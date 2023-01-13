<script lang="ts">
  import Section from '@layouts/Section.svelte';
  import Container from '@layouts/Container.svelte';
  import Card from '@components/card/Card.svelte';
  import CardSection from '@components/card/CardSection.svelte';
  import Typography from '@components/typography/Typography.svelte';
  import Heading from '@components/heading/Heading.svelte';
  import { formatNumberAsCurrency, formatNumberAsPercentage } from '@helpers/formatNumber';
  import Button from '@components/button/Button.svelte';
  import ButtonPrimary from '@components/button/ButtonPrimary.svelte';
  import Divider from '@components/divider/Divider.svelte';
  import Badge from '@components/badge/Badge.svelte';
  import Table from '@components/table/Table.svelte';
  import Tr from '@components/table/Tr.svelte';
  import Td from '@components/table/Td.svelte';
  import Th from '@components/table/Th.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  const { portfolio, markets } = data;

  const totalAmountInvestedInCents = portfolio.positions.reduce(
    (total, position) => total + position.valueInvestedInCents,
    0
  );
  const totalCurrentValueInCents = portfolio.positions.reduce(
    (total, position) => total + position.sharesOwned * position.security.sharePriceInCents,
    0
  );

  const totalReturn = totalCurrentValueInCents / totalAmountInvestedInCents - 1;
</script>

<Section>
  <Container class="space-y-4 md:columns-2">
    <Card>
      <CardSection>
        <Heading level="xs">Portfolio overview</Heading>
      </CardSection>
      <CardSection hasTopPadding={false}>
        <Typography color="weak">Current value</Typography>
        <div class="mt-2 flex items-center justify-between gap-2">
          <div class="flex items-end gap-2">
            <Heading level="xs">
              {formatNumberAsCurrency(totalCurrentValueInCents / 100)}
            </Heading>
            <Typography color="weak" level="xs">NZD</Typography>
          </div>
          <Badge
            palette={totalReturn > 0 ? 'success' : 'danger'}
            indicator={totalReturn > 0 ? 'up' : 'down'}
          >
            {formatNumberAsPercentage(totalReturn * 100)}
          </Badge>
        </div>
      </CardSection>
      <CardSection hasTopPadding={false}>
        <Typography color="weak">Assets</Typography>
        <Table class="mt-2">
          <Tr>
            <Th>Ticker</Th>
            <Th>Value</Th>
            <Th>Return</Th>
          </Tr>

          {#each portfolio.positions as position}
            {@const currentValueInCents =
              position.sharesOwned * position.security.sharePriceInCents}

            <Tr>
              <Td>{position.security.ticker}</Td>
              <Td>{formatNumberAsCurrency(currentValueInCents / 100)}</Td>
              <Td>
                <Badge
                  palette={currentValueInCents - position.valueInvestedInCents > 0
                    ? 'success'
                    : 'danger'}
                  indicator={currentValueInCents - position.valueInvestedInCents > 0
                    ? 'up'
                    : 'down'}
                >
                  {formatNumberAsPercentage(
                    (currentValueInCents / position.valueInvestedInCents - 1) * 100
                  )}
                </Badge>
              </Td>
            </Tr>
          {/each}
        </Table>
      </CardSection>
    </Card>

    <Card>
      <CardSection>
        <Typography color="weak">Market watch</Typography>
        <Table class="mt-2">
          <Tr>
            <Th>Indicator</Th>
            <Th>24h change</Th>
          </Tr>

          {#each markets.marketIndicators as marketIndicator}
            <Tr>
              <Td>{marketIndicator.name}</Td>
              <Td>
                <Badge
                  palette={marketIndicator.change24h > 0 ? 'success' : 'danger'}
                  indicator={marketIndicator.change24h > 0 ? 'up' : 'down'}
                >
                  {formatNumberAsPercentage(marketIndicator.change24h)}
                </Badge>
              </Td>
            </Tr>
          {/each}
        </Table>
      </CardSection>
    </Card>

    <Card texture="CurvedStripes">
      <CardSection>
        <Typography color="weak">Wallet balance</Typography>
        <div class="flex items-end gap-2">
          <Heading class="mt-2" level="sm">
            {formatNumberAsCurrency(684.6)}
          </Heading>
          <Typography color="weak" level="xs">NZD</Typography>
        </div>
      </CardSection>

      <CardSection class="flex gap-2" hasTopPadding={false}>
        <Button>Withdraw</Button>
        <ButtonPrimary>Deposit</ButtonPrimary>
      </CardSection>
    </Card>
  </Container>
</Section>
