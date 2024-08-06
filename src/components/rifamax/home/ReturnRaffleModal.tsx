import WoodTitle from "@/components/shared/WoodTitle";
import { modals } from "@mantine/modals";
import { IconMailForward } from "@tabler/icons-react";
import { TextInput, Text, Title, Button } from "@mantine/core";

function ReturnRaffleModal() {
  const openRepeatModal = () => modals.open({
    title: <Title order={3}>Devolver rifa</Title>,
    centered: true,
    children: (
      <>
        <WoodTitle title="¿Desea devolver esta rifa?" variant="dashed" />
        <Text>
          Desea devolver el dinero pagado al rifero? Esta acción no tiene vuelta atrás una vez realizada.
        </Text>
        <TextInput
          mt={35}
          label="Ingrese el serial del signo :"
          placeholder="Verificar serial "
        />
      </>
    )
  })

  return (
     
    <Button variant="light" leftSection={<IconMailForward />} onClick={openRepeatModal}>
      Devolver rifa
    </Button>
  );
}

export default ReturnRaffleModal