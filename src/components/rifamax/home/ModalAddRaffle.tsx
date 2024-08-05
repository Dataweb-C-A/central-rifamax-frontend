import { day } from '@utils/time'
import { Button, Text, Title } from '@mantine/core'
import { modals } from '@mantine/modals'
import { IconPlus } from '@tabler/icons-react'
import styles from '../home/RafflesAccordion/AccordionStepTwo.module.css';

function AddRaffleModal() {
  const openAddRaffleModal = () => modals.open({
    title: (
      <>
        <Title order={3}>Crear nueva</Title>
        <Text size='sm' c='dimmed' fs='italic'>
          {day()}
        </Text>
      </>
    ),
    size: 'lg',
    centered: true,
    closeOnClickOutside: false,
    children: (
      // TODO: form COMPONENT goes here
      <Text size='sm'>
        crear nueva rifa prueba
      </Text>
    ),
  })

  return (
    <>

        <Button
          ml={45}
          variant='light'
          color='blue'
          leftSection={<IconPlus />}
          onClick={openAddRaffleModal}
        >
          Añadir rifa
        </Button>
    </>
  )
}

export default AddRaffleModal