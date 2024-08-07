import classes from './index.module.css';
import { useState } from 'react';
import { IRafflesAccordion } from '@interfaces/index';
import { Accordion, Divider, Group } from '@mantine/core';
import { AccordionStepOne } from '../RafflesAccordion/AccordionStepOne';
import { AccordionStepTwo } from '../RafflesAccordion/AccordionStepTwo';
import { InfoRafflesAccordion } from '../RafflesAccordion/InfoRafflesAccordion';
import { TitlesRafflesAccordion } from '../RafflesAccordion/TitlesRafflesAccordion';
import CardRaffle from '../CardRaffle';

function Index({ step, data }: IRafflesAccordion) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (key: string) => {
    setSelected(selected === key ? null : key);
  }

  const raffles = data.map((raffle, key: number) => (
    <>
      <Accordion.Item
        key={raffle.id}
        className={selected === String(key) ? classes.itemActive : classes.item}
        value={String(key)}
      >
        <Accordion.Control
          onClick={() => handleSelect(String(key))}
        >
          <Group justify="space-between" >
            <Group>
              <TitlesRafflesAccordion id={raffle.id} numbers={raffle.numbers} />
              <InfoRafflesAccordion title={raffle.title} init_date={raffle.init_date} seller={raffle.seller.name} />
            </Group>
            <Group>
              {step === 1 ? <AccordionStepOne /> : <AccordionStepTwo />}
            </Group>
          </Group>
        </Accordion.Control>
        <Accordion.Panel>
          <Group justify='center'>
            <CardRaffle raffle={raffle} />
          </Group>
        </Accordion.Panel>
      </Accordion.Item>
      <Divider variant='dashed' my={5} />
    </>
  ));

  return (
    <Accordion
      w="100%"
      mt={10}
      classNames={{
        root: classes.root,
        content: classes.content,
      }}
      variant="filled"
      chevron={false}
    >
      {raffles}
    </Accordion>
  );
}

export default Index;
