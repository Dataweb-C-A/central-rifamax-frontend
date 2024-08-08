import { Meta, StoryFn } from '@storybook/react';
import ModalSendToApp from '@components/rifamax/home/ModalSendToApp';
import { Center } from '@mantine/core';

const meta: Meta = {
  title: 'Rifamax/Dashboard/Componentes/Modales/Enviar a App',
  component: ModalSendToApp,
};

export default meta;

const Template: StoryFn = (args) => (
  <Center>
    <ModalSendToApp {...args} />
  </Center>
)

export const Default = Template.bind({});
Default.args = {};
