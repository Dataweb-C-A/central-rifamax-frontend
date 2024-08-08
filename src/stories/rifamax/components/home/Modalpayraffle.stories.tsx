import { Meta, StoryFn } from '@storybook/react';
import ModalPayRaffle from '@components/rifamax/home/ModalPayRaffle';
import { Center } from '@mantine/core';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Pagar rifa',
  component: ModalPayRaffle,
};

export default meta;

const Template: StoryFn = (args) => (
  <Center>
    <ModalPayRaffle {...args} />
  </Center>
)

export const Default = Template.bind({});
Default.args = {};
