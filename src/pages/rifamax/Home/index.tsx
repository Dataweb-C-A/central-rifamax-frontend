import Titles from '@components/shared/Titles';
import useAuth from '@hooks/useAuth';
import classes from './index.module.css';
import LoaderBlur from '@/components/shared/Loaders/LoaderBlur';
import StacksRaffle from '@/components/rifamax/home/StacksRaffle';
import ActionButtons from '@components/rifamax/home/ActionButtons';
import RafflesAccordion from '@components/rifamax/home/RafflesAccordion';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Pagination, ScrollArea, Group, Stack } from '@mantine/core';
import { getRaffles } from '@api/rifamax/Raffles.request';
import { AxiosResponse } from 'axios';
import { IRafflesResponse } from '@interfaces/requests.interfaces';
import { Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface IWrapper {
  children?: React.ReactNode;
}

function Index() {
  const items = 7;

  const [page, setPage] = useState<number>(1);
  const [queryType, setQueryType] = useState<'newest' | 'initialized'>('newest');

  const { token } = useAuth();

  const { data: rafflesData, isLoading, isError, refetch } = useQuery<AxiosResponse<IRafflesResponse>>({
    queryKey: ['raffles', token],
    queryFn: () => getRaffles({ token, queryType, page, items }),
    retry: 2,
  });

  const isSmallScreen = useMediaQuery('(max-width: 1200px)');

  const Wrapper = ({ children }: IWrapper) => (
    <>
      <Grid>
        <Grid.Col span={{ base: 6, sm: 6, md: 4 }}>
          <StacksRaffle color={'blue'} number={130} title={'Total de Rifas'} />
        </Grid.Col>

        <Grid.Col span={{ base: 6, sm: 6, md: 4 }}>
          <StacksRaffle color={'green'} number={75} title={'Rifas activas'} />
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 12, md: 4 }}>
          <StacksRaffle color={'red'} number={45} title={'Rifas expiradas'} />
        </Grid.Col>
      </Grid>

      <section className={classes.home}>
        {isSmallScreen ? (
          <Stack align="center">
            <Titles
              ta='center'
              title='Dashboard de Rifas'
              desc='Aquí podrás gestionar y ver todas tus rifas.'
            />
            <ActionButtons />
            <Pagination
              total={rafflesData?.data.metadata.pages || 0}
              mt={10}
              siblings={0}
              onChange={(value: number) => {
                setPage(value);
                refetch();
              }}
            />
          </Stack>
        ) : (
          <>
          <Group justify="space-between">
            <Titles
              title='Dashboard de Rifas'
              desc='Aquí podrás gestionar y ver todas tus rifas.'
            />
            <ActionButtons />
          </Group>
          <Pagination
          total={rafflesData?.data.metadata.pages || 0}
          mt={10}
          siblings={0}
          onChange={(value: number) => {
            setPage(value);
            refetch();
          }}
        />
          </>
        )}

      
        {children}
      </section>
    </>
  );

  if (isError) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <LoaderBlur label='Cargando rifas...' />;
  }

  return (
    <>
      <Wrapper>
        <ScrollArea.Autosize h='calc(100vh - 275px)' type='never' scrollbars="y">
          <RafflesAccordion step={2} data={rafflesData?.data.raffles || []} />
        </ScrollArea.Autosize>
      </Wrapper>
    </>
  );
}

export default Index;
