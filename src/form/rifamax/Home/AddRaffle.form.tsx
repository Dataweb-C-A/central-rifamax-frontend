import { useState } from 'react';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import { IAddRaffleForm } from '@interfaces/index';
import { Button, Group, Grid, TextInput, Text, Switch, Divider, NumberInput, Select } from '@mantine/core';
import { IconClock, IconGift, IconArrowBigDownFilled, IconCar, IconNumber, IconCurrencyDollar } from '@tabler/icons-react';

function AddRaffleForm({ onNext, onBack }: IAddRaffleForm) {
  const [value, setValue] = useState<Date | null>(null);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <DateInput
          value={value}
          onChange={setValue}
          size="lg"
          radius="md"
          rightSection={<IconClock />}
          label="Fecha de la rifa"
          placeholder="Fecha de la rifa"
        />

        <Grid mt={15}>
          <Grid.Col span={6}>
            <TextInput
              label="Premio con signo"
              placeholder="Premio con signo"
              size="lg"
              radius="md"
              rightSection={<IconGift />}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Premio sin signo"
              placeholder="Premio sin signo (Opcional)"
              size="lg"
              radius="md"
              rightSection={<IconGift />}
            />
          </Grid.Col>
        </Grid>

        <Divider
          my="lg"
          size="xl"
          variant="dashed"
          labelPosition="center"
          label={
            <>
              <IconArrowBigDownFilled size={12} />
              <Text mr={5} ml={5}>Opciones de la rifa</Text>
              <IconArrowBigDownFilled size={12} />
            </>
          }
        />
        <Group justify='center'>
          <Switch
            defaultChecked
            color="teal"
            label="Rifa de dinero"
            size="lg"
          />
        </Group>

        <Grid mt={10}>
          <Grid.Col span={4}>
            <TextInput
              label="Placa"
              placeholder="Placa"
              size="lg"
              radius="md"
              rightSection={<IconCar />}
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <NumberInput
              hideControls
              size="lg"
              radius="md"
              label="Modelo"
              placeholder="Modelo"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Select
              label="Loteria"
              placeholder="Loteria"
              defaultValue={'Zulia 7A'}
              size="lg"
              radius="md"
              data={['Zulia 7A']}
            />
          </Grid.Col>
        </Grid>

        <Select
          label="Loteria"
          mt={10}
          placeholder="Loteria"
          defaultValue={'Dolares Americanos'}
          size="lg"
          radius="md"
          data={['Dolares Americanos', 'Pesos Colombianos', 'Bolivares']}
        />
        <Grid mt={15}>
          <Grid.Col span={6}>
            <NumberInput
              hideControls
              size="lg"
              radius="md"
              label="Numeros"
              placeholder="Numeros"
              rightSection={<IconNumber />}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <NumberInput
              hideControls
              size="lg"
              radius="md"
              label="Precio"
              placeholder="Precio"
              rightSection={<IconCurrencyDollar />}
            />
          </Grid.Col>
        </Grid>

        <Select
          label="Rifero"
          mt={10}
          placeholder="Rifero"
          defaultValue={'Evanan'}
          size="lg"
          radius="md"
          data={['Evanan']}
        />
      </form>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={onBack}>Atras</Button>
        <Button color="teal" onClick={onNext}>Siguiente</Button>
      </Group>
    </>
  );
}

export default AddRaffleForm;
