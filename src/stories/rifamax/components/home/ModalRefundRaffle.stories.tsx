import { Meta, StoryFn } from '@storybook/react';
import ModalRefundRaffle from '@components/rifamax/home/ModalRefundRaffle';
import { Center } from '@mantine/core';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Devolver rifa',
  component: ModalRefundRaffle,
};

export default meta;

const Template: StoryFn = (args) => (
  <Center>
    <ModalRefundRaffle {...args} />
  </Center>
)

export const Default = Template.bind({});
Default.args = {};
