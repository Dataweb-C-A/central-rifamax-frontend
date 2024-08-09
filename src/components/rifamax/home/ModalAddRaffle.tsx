import StepperRaffle from './StepperRaffle';
import { day } from '@utils/time'
import { modals } from '@mantine/modals'
import { IconPlus } from '@tabler/icons-react'
import { Button, Text, Title } from '@mantine/core'

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
    size: 'xl',
    // centered: true,
    closeOnClickOutside: false,
    children: (
      <>
        <StepperRaffle/>
      </>
    ),
  })

  return (
    <>
    <div className="flex justify-center md:justify-start">
  <Button 
    variant='light'
    color='blue'
    leftSection={<IconPlus />}
    onClick={openAddRaffleModal}
  >
    Añadir rifa
  </Button>
</div>

    </>
  )
}

export default AddRaffleModal
