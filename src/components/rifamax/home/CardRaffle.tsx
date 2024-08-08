
import CardTitle from './CardTitle';
import { ICardRaffle } from '@interfaces/index';
import { Button, Text, Divider, Card, Image, Center } from '@mantine/core'

function CardRaffle({ raffle }: ICardRaffle) {
  return (
    <>
      <Card radius='md' shadow='xl' maw={350} w="100%">
        <Center>
          <Image
            mt={15}
            src="/images/rifamax-logo.png"
            alt="Rifamax Logo"
            maw='15rem' 
            py={40}
          />
        </Center>

        <Center mt={10}>
          <Text fw={700} size="xl">
            {raffle.numbers} - SIGNO
          </Text>
        </Center>

        <Center>
          <Text fw={700} size="xl">
            Precio: {raffle.price} {raffle.currency}
          </Text>
        </Center>

        <Divider my={10} color='white' size="xs" />
        <CardTitle title='Premio' data={raffle.prizes[0]?.award || 'No disponible'} />
        <CardTitle title='Premio sin signo' data={raffle.prizes[1]?.award || 'No disponible'} />
        <Divider mt={10} mb={10} color='white' size="xs" />
        
        <CardTitle title='SERIE NUMERO:' data={raffle.id} />
        <CardTitle title='LOTERIA:' data={raffle.lotery} />
        <CardTitle title='FECHA:' data={raffle.init_date} />
        <CardTitle title='CADUCA:' data={raffle.expired_date} />
        <CardTitle title='RIFERO:' data={raffle.seller.name} />
        <CardTitle title='TELEFONO:' data={raffle.seller.phone} />

        <Text ta='center' mt={15} mb={15} c='grey' size="lg">
          Esto es una representación de como lucirán los tickets.
        </Text>
        <Button variant="light" size="lg" radius="xs">
          Ver Ticket
        </Button>
      </Card>
    </>
  );
}

export default CardRaffle;
