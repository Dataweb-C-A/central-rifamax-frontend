import classes from './index.module.css';
import { useState } from 'react';
import { IRafflesAccordion } from '@interfaces/index';
import { Accordion, Divider, Group } from '@mantine/core';
import { AccordionStepOne } from '../RafflesAccordion/AccordionStepOne';
import { AccordionStepTwo } from '../RafflesAccordion/AccordionStepTwo';
import { InfoRafflesAccordion } from '../RafflesAccordion/InfoRafflesAccordion';
import { TitlesRafflesAccordion } from '../RafflesAccordion/TitlesRafflesAccordion';

const groceries = [
  {
    value: 'Apples',
    emoji: '🍎',
    description: 'An apple a day keeps the doctor away!',
  },
];

function Index({ step }: IRafflesAccordion) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (key: string) => {
    setSelected(selected === key ? null : key);
  }

  const items = groceries.map((item, key: number) => (
    <>
      <Accordion.Item
        key={item.value}
        className={selected === String(key) ? classes.itemActive : classes.item}
        value={String(key)}
      >
        <Accordion.Control
          onClick={() => handleSelect(String(key))}
        >
          <Group justify="space-between" >
            <Group>
              <TitlesRafflesAccordion />
              <InfoRafflesAccordion />
            </Group>
            <Group>
              {step === 1 ? <AccordionStepOne /> : <AccordionStepTwo />}
            </Group>
          </Group>
        </Accordion.Control>
        <Accordion.Panel>{item.description}</Accordion.Panel>
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
      {items}
    </Accordion>
  );
}

export default Index;