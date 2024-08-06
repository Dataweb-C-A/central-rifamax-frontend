import WoodTitle from "@/components/shared/WoodTitle";
import { modals } from "@mantine/modals";
import { DatePickerInput } from "@mantine/dates"
import { IconCash, IconNumber, IconReload } from "@tabler/icons-react";
import { Center, Chip, Group, NumberInput, TextInput, Title, Button } from "@mantine/core";

function RepeatRaffleModal() {
  const openRepeatModal = () => modals.open({
    title: <Title order={3}>Repetir rifa</Title>,
    centered: true,
    children: (
      <>
        <WoodTitle title="¿Desea repetir esta rifa?" variant="dashed" />
        <DatePickerInput
          mt="md"
          mb={15}
          label="Fecha de la rifa"
          radius='sm'
          placeholder="Fecha de la rifa"
        />
        <Group justify='center' mb={15}>
          <NumberInput
            radius='sm'
            label="Numeros"
            hideControls
            w='47%'
            withAsterisk
            rightSection={<IconNumber />}
          />
          <TextInput
            w='49%'
            rightSection={<IconCash />}
            radius='sm'
            label="Loteria"
          />
        </Group>
        <Button variant="light" fullWidth>
          Repetir
        </Button>
      </>
    )
  })

  return (
    <Chip variant="light" size='md' checked={false} color="gray" onClick={openRepeatModal}>
      <Center>
        <IconReload stroke={1.5} size='1.3rem' />
      </Center>
    </Chip>
  );
}

export default RepeatRaffleModal