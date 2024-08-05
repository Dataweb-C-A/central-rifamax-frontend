import styles from '../home/RafflesAccordion/AccordionStepTwo.module.css';
import { day } from '@utils/time';
import { modals } from '@mantine/modals';
import { IconX } from '@tabler/icons-react';
import { Button, Text, Title } from '@mantine/core';

function CloseDayModal() {
  const openCloseDayModal = () => modals.open({
    title: (
      <>
        <Title order={3}>Cierre del día</Title>
        <Text size='sm' c='dimmed' fs='italic'>
          {day()}
        </Text>
      </>
    ),
    size: 'lg',
    centered: true,
    closeOnClickOutside: false,
    children: (
      // TODO: close day table COMPONENT goes here
      <Text size='sm'>
        cerrar dia
      </Text>
    ),
  });

  return (
    <div className={styles.centerButtons}>
      <Button
        variant='light'
        color='red'
        leftSection={<IconX />}
        onClick={openCloseDayModal}
      >
        Cerrar día
      </Button>
    </div>
  );
}

export default CloseDayModal;