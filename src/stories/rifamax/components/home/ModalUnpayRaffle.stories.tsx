import { Meta, StoryFn } from '@storybook/react';
import ModalUnpayRaffle from '@components/rifamax/home/ModalUnpayRaffle';
import { Center } from '@mantine/core';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Rechazar rifa',
  component: ModalUnpayRaffle,
};

export default meta;

const Template: StoryFn = (args) => (
  <Center>
    <ModalUnpayRaffle {...args} />
  </Center>
)

export const Default = Template.bind({});
Default.args = {};
