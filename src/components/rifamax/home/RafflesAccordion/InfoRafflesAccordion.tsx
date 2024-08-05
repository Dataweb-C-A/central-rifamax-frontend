import { Text, Title } from '@mantine/core';

export function InfoRafflesAccordion() {
  return (
    <div>
      <Text fs='italic'>
        05/08/2024
      </Text>
      <Title mr={30} order={3} fw={500}>
        500$
      </Title>
      <Text
        size="md"
        fw={700}
        variant="gradient"
        gradient={{ from: 'cyan', to: 'blue', deg: 49 }}
      >
        Alfredo Serrano
      </Text>
    </div>
  );
}