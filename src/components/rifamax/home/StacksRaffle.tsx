import React from 'react'
import { IStackRaffles } from '@interface/index'
import { Title, Card, Group, Text, Divider } from '@mantine/core'

function StacksRaffle({ color, number, title }: IStackRaffles) {
  return (
    <Card radius='sm' w='100%' mt={15} mb={10} ml={10} shadow="xl">
      <Group>
        <Divider color={color} size="xl" orientation="vertical" />
        <div>
          <Title order={3}>{number}</Title>
          <Title order={5}></Title>
          <Text size="lg" c="dimmed">{title}</Text>
        </div>
      </Group>
    </Card>
  );
}

export default StacksRaffle;
