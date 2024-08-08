import { useState } from 'react';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import { IAddRaffleForm } from '@interfaces/index';
import { Button, Group, Grid, TextInput, NumberInput, Select, Switch } from '@mantine/core';
import { IconClock, IconGift, IconCar, IconNumber, IconCurrencyDollar } from '@tabler/icons-react';

interface FormValues {
  raffleDate: string;
  prizeWithSign: string;
  prizeWithoutSign: string;
  plate: string;
  model: string;
  plateWithoutSign: string;
  modelWithoutSign: string;
  lottery: string;
  currency: string;
  numbers: number;
  price: number;
  rifero: string;
}

function AddRaffleForm({ onNext, onBack }: IAddRaffleForm) {
  const [isFirstSwitchOn, setIsFirstSwitchOn] = useState(false);
  const [isSecondSwitchOn, setIsSecondSwitchOn] = useState(false);

  const form = useForm<FormValues>({
    initialValues: {
      raffleDate: '',
      prizeWithSign: '',
      prizeWithoutSign: '',
      plate: '',
      model: '',
      plateWithoutSign: '',
      modelWithoutSign: '',
      lottery: 'Zulia 7A',
      currency: 'Dolares Americanos',
      numbers: 0,
      price: 0,
      rifero: 'Evanan',
    },
    validate: {
      prizeWithSign: (value) => (value ? null : 'El premio con signo es obligatorio'),
      plate: (value) => (!isFirstSwitchOn && value === '') ? 'La placa es obligatoria' : null,
      model: (value) => (!isFirstSwitchOn && value === '') ? 'El modelo es obligatorio' : null,
      numbers: (value) => (value > 0 ? null : 'Los números deben ser mayores a 0'),
      price: (value) => (value > 0 ? null : 'El precio debe ser mayor a 0'),
    },
  });

  const handleSubmit = (values: FormValues) => {
    const raffleData = {
      rifamax_raffle: {
        title: 'Raffle from insomnia',
        init_date: values.raffleDate,
        expired_date: values.raffleDate,
        price: values.price,
        currency: values.currency,
        numbers: values.numbers,
        lotery: values.lottery,
        seller_id: 1,
        prizes: [
          {
            award: values.prizeWithSign,
            plate: isFirstSwitchOn ? null : values.plate,
            model: isFirstSwitchOn ? null : values.model,
            is_money: isFirstSwitchOn,
            wildcard: true,
          },
          {
            award: values.prizeWithoutSign || 'Premio sin signo',
            plate: isSecondSwitchOn ? null : values.plateWithoutSign,
            model: isSecondSwitchOn ? null : values.modelWithoutSign,
            is_money: isSecondSwitchOn,
            wildcard: false,
          }
        ]
      }
    };

    console.log(JSON.stringify(raffleData, null, 2));

    if (onNext) {
      onNext();
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <DateInput
        size="lg"
        radius="md"
        rightSection={<IconClock />}
        label="Fecha de la rifa"
        placeholder="Fecha de la rifa"
        {...form.getInputProps('raffleDate')}
      />

      <TextInput
        mt={15}
        label="Premio con signo"
        placeholder="Premio con signo"
        size="lg"
        radius="md"
        rightSection={<IconGift />}
        {...form.getInputProps('prizeWithSign')}
      />

      <Switch
        mt={15}
        checked={isFirstSwitchOn}
        onChange={(event) => setIsFirstSwitchOn(event.currentTarget.checked)}
        color="teal"
        label="Rifa de dinero"
        size="lg"
      />

      <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <TextInput
            label="Placa"
            placeholder="Placa"
            size="lg"
            radius="md"
            rightSection={<IconCar />}
            disabled={isFirstSwitchOn}
            {...form.getInputProps('plate')}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <NumberInput
            hideControls
            size="lg"
            radius="md"
            label="Modelo"
            placeholder="Modelo"
            disabled={isFirstSwitchOn}
            {...form.getInputProps('model')}
          />
        </Grid.Col>

      </Grid>

      <Switch
        mt={10}
        checked={isSecondSwitchOn}
        color="teal"
        label="Activar premio sin signo"
        size="lg"
      />
      <TextInput
        mt={10}
        label="Premio sin signo"
        placeholder="Premio sin signo (Opcional)"
        size="lg"
        radius="md"
        rightSection={<IconGift />}
        {...form.getInputProps('prizeWithoutSign')}
      />
      <Switch
        mt={10}
        checked={isSecondSwitchOn}
        onChange={(event) => setIsSecondSwitchOn(event.currentTarget.checked)}
        color="teal"
        label="Rifa de dinero"
        size="lg"
      />
      <Grid>

        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <TextInput
            label="Placa sin signo"
            placeholder="Placa sin signo"
            size="lg"
            radius="md"
            rightSection={<IconCar />}
            disabled={isSecondSwitchOn}
            {...form.getInputProps('plateWithoutSign')}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
          <NumberInput
            hideControls
            size="lg"
            radius="md"
            label="Modelo sin signo"
            placeholder="Modelo sin signo"
            disabled={isSecondSwitchOn}
            {...form.getInputProps('modelWithoutSign')}
          />
        </Grid.Col>
      </Grid>



      <Select
        mt={10}
        label="Loteria"
        placeholder="Loteria"
        size="lg"
        radius="md"
        data={['Zulia 7A', 'Zulia 7B', 'Triple Pelotica']}
        {...form.getInputProps('lottery')}
      />

      <Select
        label="Moneda"
        mt={10}
        placeholder="Moneda"
        size="lg"
        radius="md"
        data={['Dolares Americanos', 'Pesos Colombianos', 'Bolivares']}
        {...form.getInputProps('currency')}
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
            {...form.getInputProps('numbers')}
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
            {...form.getInputProps('price')}
          />
        </Grid.Col>
      </Grid>

      <Select
        label="Rifero"
        mt={10}
        placeholder="Rifero"
        size="lg"
        radius="md"
        data={['Evanan']}
        {...form.getInputProps('rifero')}
      />

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={onBack}>Atras</Button>
        <Button type="submit" color="teal">Siguiente</Button>
      </Group>
    </form>
  );
}

export default AddRaffleForm;