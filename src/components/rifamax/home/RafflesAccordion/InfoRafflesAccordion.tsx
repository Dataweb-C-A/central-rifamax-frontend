import { day } from '@utils/time';
import { Text, Title } from '@mantine/core';
import { IInfoRafflesAccordion } from '@interfaces/index';

export function InfoRafflesAccordion({ title, init_date, seller }: IInfoRafflesAccordion) {
  return (
    <div>
      <Text fs='italic'>
        {day(init_date)}
      </Text>
      <Title mr={30} order={3} fw={500}>
        {title}
      </Title>
      <Text
        size="md"
        fw={700}
        variant="gradient"
        gradient={{ from: 'cyan', to: 'blue', deg: 49 }}
      >
        {seller}
      </Text>
    </div>
  );
}