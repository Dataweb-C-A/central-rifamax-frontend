import { Group, Text } from '@mantine/core';

type Props = {
  data: string| number;
  title: string;
};

function Cardtittle({ data, title }: Props) {
  return (
    <>
      <Group justify='space-between'>
        <Text fw={700} size='md' >
          {title}
        </Text>
        <Text size="lg" >
          {data}
        </Text>
      </Group>
    </>
  );
}

export default Cardtittle;
