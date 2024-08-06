import { Button } from '@mantine/core';
import { IconMailDollar, IconMailX } from '@tabler/icons-react';
import ReturnRaffleModal from '../ReturnRaffleModal';
import NoPayRaffleModal from '../NoPayRaffleModal';
import PayRaffle from '../PayRaffle';
export function AccordionStepTwo() {
  return (
    <>
     <PayRaffle/>
      <ReturnRaffleModal/>
     <NoPayRaffleModal/>
    </>
  );
}
