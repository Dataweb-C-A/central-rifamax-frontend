import { IconReload } from '@tabler/icons-react';
import { Text, Group, Badge, Center } from '@mantine/core';
import { ITitlesRafflesAccordion } from '@interfaces/index';

export function TitlesRafflesAccordion({ id, numbers }: ITitlesRafflesAccordion) {
  return (
    <div>
      <Group justify="space-between" mb={5} mr={15}>
        <Text size="lg">Serie</Text>
        <Text size="lg">Numero</Text>
        <Text size="lg">Repetir</Text>
      </Group>
      <Group justify="space-between" ml={-1} mb={5} mr={15}>
        <Badge variant="light" size='xl' color="gray">{id}</Badge>
        <Badge variant="light" size='xl' color="gray">{numbers}</Badge>
        <Badge variant="light" size='xl' color="gray">
          <Center>
            <IconReload stroke={1.5} size='1.3rem' />
          </Center>
        </Badge>
      </Group>
    </div>
  );
}
