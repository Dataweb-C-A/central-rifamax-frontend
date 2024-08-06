import { 
  IconPrinter, 
  IconDeviceMobileMessage 
} from '@tabler/icons-react';
import { Button } from '@mantine/core';

export function AccordionStepOne() {
  return (
    <>
      <Button variant="light" leftSection={<IconDeviceMobileMessage />}>
        Enviar a APP {/* TODO: Transform in a modal independient component */}
      </Button>
      <Button variant="light" color="red" leftSection={<IconPrinter />}>
        Imprimir tickets {/* TODO: Transform in a modal independient component */}
      </Button>
    </>
  );
}
