import { Meta, StoryFn } from '@storybook/react';
import ModalRepeatRaffle from '@components/rifamax/home/ModalRepeatRaffle';
import { Center } from '@mantine/core';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Repetir rifa',
  component: ModalRepeatRaffle,
};

export default meta;

const Template: StoryFn = (args) => (
  <Center>
    <ModalRepeatRaffle {...args} />
  </Center>
)

export const Default = Template.bind({});
Default.args = {};
