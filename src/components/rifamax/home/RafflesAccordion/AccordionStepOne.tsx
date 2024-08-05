import { Button } from '@mantine/core';
import { IconFileBarcode, IconDeviceMobile, IconDeviceMobileCheck, IconPdf, IconPrinter, IconDeviceMobileMessage } from '@tabler/icons-react';

export function AccordionStepOne() {
  return (
    <>
      <Button variant="light" leftSection={<IconDeviceMobileMessage />}>Enviar a APP</Button>
      <Button variant="light" color="red" leftSection={<IconPrinter />}>Imprimir tickets</Button>
    </>
  );
}
