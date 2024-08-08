import WoodTitle from "@components/shared/WoodTitle";
import { modals } from "@mantine/modals";
import { Text, Title, Button } from "@mantine/core";
import { IconMailX, IconSkull } from "@tabler/icons-react";

function ModalUnpayRaffle() {
  const openUnpayRaffleModal = () => modals.open({
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
    <Button variant="light" size="xs" color="red" leftSection={<IconMailX size="1.2rem" />} onClick={openUnpayRaffleModal}>
      No pagada
    </Button>
  );
}

export default ModalUnpayRaffle