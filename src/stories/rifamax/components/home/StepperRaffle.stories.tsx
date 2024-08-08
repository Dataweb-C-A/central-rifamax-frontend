import { Meta, StoryFn } from '@storybook/react';
import AddRaffleModal from '@components/rifamax/home/ModalAddRaffle';
import { Center } from '@mantine/core';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Crear rifa',
  component: AddRaffleModal,
};

export default meta;

const Template: StoryFn = (args) => (
  <Center>
    <AddRaffleModal {...args} />
  </Center>
)

export const Default = Template.bind({});
Default.args = {};
