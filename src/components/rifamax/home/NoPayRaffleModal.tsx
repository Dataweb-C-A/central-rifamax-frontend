import WoodTitle from "@/components/shared/WoodTitle";
import { modals } from "@mantine/modals";
import { IconMailX, IconSkull } from "@tabler/icons-react";
import { Text, Title, Button } from "@mantine/core";

function NoPayRaffleModal() {
  const openRepeatModal = () => modals.open({
    title: <Title order={3}>Rechazar rifa</Title>,
    centered: true,
    children: (
      <>
        <WoodTitle title="Desea rechazar la rifa?" variant="dashed" />
        <Text>
          Una vez realizada el rifero será bloqueado y no podrá crear nuevas rifas hasta nuevo aviso.
        </Text>
        <Button mt={15} variant="light" color="red" fullWidth leftSection={<IconSkull />} rightSection={<IconSkull />} >
          Rechazar pago y bloquear rifero
        </Button>
      </>
    )
  })

  return (
    <Button variant="light" color="red" leftSection={<IconMailX />} onClick={openRepeatModal}>
      Rifa no pagada
    </Button>
  );
}

export default NoPayRaffleModal