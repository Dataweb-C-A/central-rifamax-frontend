import RepeatRaffleModal from '../RepeatRaffleModal';
import { Text, Group, Chip } from '@mantine/core';
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
        <Chip checked={false} variant="light" size='md' color="gray">{id}</Chip>
        <Chip checked={false} variant="light" size='md' color="gray">{numbers}</Chip>
        <RepeatRaffleModal />
      </Group>
    </div>
  );
}
