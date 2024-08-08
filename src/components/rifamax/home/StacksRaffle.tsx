import { IStacksRaffle } from '@interfaces/index'
import { Card, Group, Text, Divider } from '@mantine/core'

function StacksRaffle({ color, number, title }: IStacksRaffle) {
  return (
    <Card 
      py={10} 
      px={12} 
      mt={15} 
      mb={10} 
      ml={10} 
      shadow="0 0 7px #5f5f5f3d"
      radius='sm' 
      w='100%' 
    >
      <Group>
        <Divider color={color} size="md" orientation="vertical" />
        <div>
          <Text fz='20px'>{number}</Text>
          <Text fz="14px" c="dimmed">{title}</Text>
        </div>
      </Group>
    </Card>
  );
}

export default StacksRaffle;
