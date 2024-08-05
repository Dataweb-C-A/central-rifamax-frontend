import { Button } from '@mantine/core';
import { IconFileBarcode, IconDeviceMobile,IconCoin, IconMailDollar, IconMailX, IconMailForward } from '@tabler/icons-react';

export function AccordionStepTwo() {
  return (
    <>
    
    <Button variant="light" color="teal" leftSection={<IconMailDollar />}>Pagar rifa</Button>
    <Button variant="light" color="red" leftSection={<IconMailX />}>Rifa no pagada</Button>
    <Button variant="light" leftSection={<IconMailForward />}>Devolver rifa</Button>
    </>
    
  );
}
