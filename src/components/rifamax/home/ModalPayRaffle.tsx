import WoodTitle from "@components/shared/WoodTitle";
import { modals } from "@mantine/modals";
import { IconMailDollar } from "@tabler/icons-react";
import { Text, Group, NumberInput, Title, Button, Select } from "@mantine/core";

function ModalPayRaffle() {
  const openPayRaffleModal = () => modals.open({
    title: <Title order={3}>Pagar rifa</Title>,
    centered: true,
    children: (
      <>
        <WoodTitle title="¿Desea pagar esta rifa?" variant="dashed" />
        <Text ta="center">
        Una vez realizado el pago de la rifa esta no podrá ser modificada, está seguro de realizar esta acción?
        </Text>
        <Group mt={15} mb={15} gap={10} justify="space-between">
          <NumberInput
            radius='sm'
            hideControls
            w='calc(75% - 5px)'
            withAsterisk
            defaultValue={0}
          />
          <Select
            defaultValue="$"
            ml={-12}
            radius='sm'
            w='calc(25% - 5px)'
            data={['$', 'Bs', 'Cop']}
          />
        </Group>
        <Group mt={10}>
          <Button  w='49%' variant="light" color="teal" >
            Aceptar
          </Button>
          <Button variant="light" w='47%' color="red" >
            Rechazar
          </Button>
        </Group>
      </>
    )
  })

  return (
    <Button variant="light" color="teal" leftSection={<IconMailDollar />} onClick={openPayRaffleModal}>
      Pagada
    </Button>
  );
}

export default ModalPayRaffle