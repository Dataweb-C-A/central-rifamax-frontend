import { Meta, StoryFn } from '@storybook/react';
import RafflesAccordion from '@components/rifamax/home/RafflesAccordion';
import { Card } from '@mantine/core';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Acordeón de Rifas',
  component: RafflesAccordion,
};

export default meta;

const Template: StoryFn = (args) => <Card><RafflesAccordion step={0} data={[]} {...args} /></Card>;

export const Default = Template.bind({});
Default.args = {};
