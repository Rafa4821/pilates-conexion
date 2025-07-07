import { Container, Title, Text, Grid, Card, Image, Button, Modal, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandWhatsapp, IconMail } from '@tabler/icons-react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    title: 'Clases Grupales de Pilates',
    description: 'Sesiones grupales de hasta 8 personas. Ideal para tonificar y mejorar la postura en un ambiente motivador.',
    price: '$8.000 CLP',
    image: 'https://images.pexels.com/photos/866021/pexels-photo-866021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Pilates Personalizado',
    description: 'Clases individuales para objetivos específicos: rehabilitación, tonificación o acondicionamiento general.',
    price: '$25.000 CLP',
    image: 'https://images.pexels.com/photos/3756527/pexels-photo-3756527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Pilates con Reformer',
    description: 'Utiliza nuestras máquinas Reformer de última generación para un entrenamiento de bajo impacto y alta intensidad.',
    price: '$30.000 CLP',
    image: 'https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Pilates para Embarazadas',
    description: 'Clases seguras y adaptadas para acompañarte durante el embarazo, preparando tu cuerpo para el parto.',
    image: 'https://images.pexels.com/photos/9288101/pexels-photo-9288101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Pilates para Rehabilitación',
    description: 'Clases especializadas para recuperación de lesiones y fisioterapia complementaria con Pilates.',
    image: 'https://images.unsplash.com/photo-1600146532978-b2dae4bfb9b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI3fDB8MHxzZWFyY2h8Mnx8cmViYWxpdGFjaWNvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&q=80&w=800',
  },
  {
    title: 'Clases Privadas en Pareja',
    description: 'Comparte la experiencia con un amigo o pareja, prácticas personalizadas para ambos niveles.',
    image: 'https://images.pexels.com/photos/7530002/pexels-photo-7530002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

function ServicesPage() {
  const [opened, { open, close }] = useDisclosure(false);

  const services = servicesData.map((service, index) => (
    <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={service.title}>
      <Fade direction="up" delay={index * 100} triggerOnce>
        <Card 
          shadow="sm" 
          padding="lg" 
          radius="md" 
          withBorder 
          className="interactive-card" 
          style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <Card.Section>
            <Image
              src={service.image}
              height={200}
              alt={service.title}
              className="card-image"
            />
          </Card.Section>

          <Title order={3} mt="md">{service.title}</Title>

          <Text mt="sm" c="dimmed" size="sm" style={{ flexGrow: 1 }}>
            {service.description}
          </Text>

          {service.price && (
            <Text fw={700} color="brand-primary.6" mt="md">
              {service.price}
            </Text>
          )}

          <Button color="brand-secondary" fullWidth mt="auto" radius="md" onClick={open}>
            Más Información
          </Button>
        </Card>
      </Fade>
    </Grid.Col>
  ));

  return (
    <Container py="xl">
      <Title order={2} ta="center" mb="sm" fz={{ base: '1.8rem', sm: '2.125rem' }}>Nuestros Servicios</Title>
      <Text ta="center" mb="xl">Elige la opción que mejor se adapte a tus necesidades. Haz clic para más información.</Text>

      <Grid>
        {services}
      </Grid>

      <Modal opened={opened} onClose={close} title="Contáctanos" centered>
        <Text ta="center" mb="lg">Elige la vía de contacto que prefieras:</Text>
        <Group justify="center">
          <Button 
            component="a" 
            href="https://wa.me/56912345678" // Example number
            target="_blank" 
            color="brand-accent" 
            leftSection={<IconBrandWhatsapp size={16} />}
          >
            WhatsApp
          </Button>
          <Button 
            component={Link} 
            to="/contacto" 
            color="brand-primary" 
            leftSection={<IconMail size={16} />} 
            onClick={close}
          >
            Formulario
          </Button>
        </Group>
      </Modal>
    </Container>
  );
}

export default ServicesPage;
