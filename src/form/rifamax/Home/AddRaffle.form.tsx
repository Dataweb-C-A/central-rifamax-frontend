import { getDate } from '@utils/time';
import { useForm } from '@mantine/form';
import { useViewportSize } from '@mantine/hooks';
import { DatePickerInput } from '@mantine/dates';
import { IAddRaffleForm, IRaffleForm } from '@interfaces/index';
import { Button, Divider, Group, NumberInput, Select, Switch, TextInput } from '@mantine/core';
import { Icon123, IconAward, IconCalendar, IconCar, IconCoin, IconPlus, IconTrash } from '@tabler/icons-react';

function AddRaffleForm({ onNext, onBack }: IAddRaffleForm) {
  const { width } = useViewportSize();

  const form = useForm<IRaffleForm>({
    name: 'add-raffle-form',
    mode: 'uncontrolled',
    initialValues: {
      title: '',
      init_date: getDate(0),
      price: 1.0,
      currency: 'USD',
      numbers: 0,
      lotery: 'Zulia 7A',
      user_id: 0,
      seller_id: 0,
      prizes: [
        {
          award: '',
          plate: null,
          is_money: false,
          wildcard: true
        }
      ]
    },
    validate: {
      numbers: (value: number) => (
        value > 0 
          ? value <= 999 
            ? null 
              : 'Debe ser menor a 1000' 
                : 'Debe ser mayor a 0'
      ),
      price: (value: number) => (value > 0 ? null : 'El precio debe ser mayor a 0'),
      seller_id: (value: number) => (value > 0 ? null : 'Debe seleccionar un rifero'),
    }
  });

  const CURRENCIES = [
    { value: 'USD', label: 'Dólares Américanos' },
    { value: 'VES', label: 'Bolívares Digitales' },
    { value: 'COP', label: 'Pesos Colombianos' }
  ]

  const SELLERS = [
    { value: '1', label: 'Javier Diaz' },
    { value: '2', label: 'Evanan Semprun' }
  ]

  const LOTERIES = [
    { value: 'Zulia 7A', label: 'Zulia 7A' },
    { value: 'Zulia 7B', label: 'Zulia 7B' },
    { value: 'Triple Pelotica', label: 'Triple Pelotica' }
  ]

  const PRIZES_JUSTIFY = form.getValues().prizes.length == 1 ? 'center' : 'space-between'
  const PRIZES_SIZE = form.getValues().prizes.length == 1 ? '100%' : 'calc(50% - 10px)'
  const FIELDS_SIZE = width > 800 ? 'md' : 'sm'

  const prizesField = form.getValues().prizes.map((_, index) => (
    <Group key={index} w={PRIZES_SIZE} mt="xs">
      <TextInput
        w='100%'
        withAsterisk
        size={FIELDS_SIZE}
        rightSection={<IconAward />}
        key={form.key(`prizes.${index}.award`)}
        label={`Premio ${index === 0 ? 'con signo' : 'sin signo'}`}
        placeholder={`Premio ${index === 0 ? 'con signo' : 'sin signo'}`}
        {...form.getInputProps(`prizes[${index}].award`)}
      />
      <TextInput
        mt={-10}
        label="Placa"
        size={FIELDS_SIZE}
        placeholder="Placa"
        rightSection={<IconCar />}
        key={form.key(`prizes.${index}.plate`)}
        w={`calc(100% - ${width > 800 ? '130px' : '1px'})`}
        disabled={form.getValues().prizes[index]?.is_money}
        withAsterisk={!form.getValues().prizes[index]?.is_money}
        {...form.getInputProps(`prizes[${index}].plate`)}
      />
      <Switch
        label="Dinero"
        size={FIELDS_SIZE}
        mt={width > 800 ? 10 : 0}
        key={form.key(`prizes.${index}.is_money`)}
        checked={form.getValues().prizes[index]?.is_money}
        onChange={(e) => {
          form.setFieldValue(`prizes.${index}.is_money`, e.currentTarget.checked)
          e.currentTarget.checked ? form.setFieldValue(`prizes.${index}.plate`, null) : form.setFieldValue(`prizes.${index}.plate`, '')
        }}
      />
    </Group>
  ))

  const PrizesManager = () => (
    <Group justify="center" mt="md">
      <Button
        color='red'
        variant='light'
        w="calc(50% - 10px)"
        leftSection={<IconTrash />}
        disabled={form.getValues().prizes.length === 1}
        onClick={() => form.removeListItem('prizes', 1)}
      >
        Eliminar premio sin signo
      </Button>
      <Button
        variant='light'
        w="calc(50% - 10px)"
        leftSection={<IconPlus />}
        disabled={form.getValues().prizes.length === 2}
        onClick={() => form.insertListItem('prizes', { award: '', plate: '', is_money: false, wildcard: false })}
      >
        Añadir premio sin signo
      </Button>
    </Group>
  )

  const handleSubmit = (values: IRaffleForm) => {
    onNext
    console.log(values)
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit(form.values))}>
      <Group justify='space-between' mb={5}>
        <TextInput
          withAsterisk
          size={FIELDS_SIZE}
          w="calc(50% - 10px)"
          label="Título de la rifa"
          placeholder="Título de la rifa"
          rightSection={<IconAward />}
          {...form.getInputProps('title')}
        />
        <DatePickerInput 
          withAsterisk
          w="calc(50% - 10px)"
          minDate={getDate(0)}
          maxDate={getDate(21)}
          size={FIELDS_SIZE}
          label="Fecha de la rifa"
          placeholder="Fecha de la rifa"
          rightSection={<IconCalendar />}
          {...form.getInputProps('init_date')}
        />
      </Group>
      <PrizesManager />
      <Group justify={PRIZES_JUSTIFY}>
        {prizesField}
      </Group>
      <Divider 
        size='xs' 
        mt={10} 
        label="Opciones de la rifa"
        labelPosition='center'
      />
      <Select
        size={FIELDS_SIZE}
        withAsterisk
        label="Moneda"
        placeholder="Ingrese una moneda"
        data={CURRENCIES}
        {...form.getInputProps('currency')}
      />
      <Group justify='space-between' mt={5}>
        <NumberInput
          type="tel"
          withAsterisk
          label="Precio"
          size={FIELDS_SIZE}
          w="calc(33.23% - 10px)"
          placeholder="Precio"
          rightSection={<IconCoin />}
          {...form.getInputProps('price')}
        />
        <NumberInput
          type="tel"
          withAsterisk
          size={FIELDS_SIZE}
          w="calc(33.24% - 10px)"
          rightSection={<Icon123 />}
          label="Números"
          placeholder="Números"
          {...form.getInputProps('numbers')}
        />
        <Select
          size={FIELDS_SIZE}
          withAsterisk
          w="calc(33.23% - 10px)"
          label="Lotería"
          placeholder="Lotería"
          data={LOTERIES}
          {...form.getInputProps('lotery')}
        />
      </Group>
      <Select
        mt={5}
        withAsterisk
        label="Rifero"
        data={SELLERS}
        size={FIELDS_SIZE}
        placeholder="Rifero"
        {...form.getInputProps('seller_id')}
      />
      <Group justify="center" mt="xl">
        <Button variant="default" onClick={onBack}>Atras</Button>
        <Button type="submit" color="teal">Siguiente</Button>
      </Group>
    </form>
  );
}

export default AddRaffleForm;
