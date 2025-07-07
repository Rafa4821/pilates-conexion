import { Container, Title, Text, Grid, Image, ThemeIcon, List, Paper, Overlay, Button, Group } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconCircleCheck } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const features = [
  'Instructores certificados con más de 5 años de experiencia.',
  'Equipamiento de última generación (reformer, cadillac, mat).',
  'Ambiente acogedor y grupos reducidos de trabajo.',
  'Clases presenciales y online para que elijas cómo entrenar.',
];

const slidesData = [
  {
    image: 'https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Conecta con tu cuerpo, transforma tu vida',
    text: 'Descubre el poder del Pilates para fortalecer, flexibilizar y equilibrar tu mente y cuerpo.',
  },
  {
    image: 'https://images.pexels.com/photos/8436940/pexels-photo-8436940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Un espacio diseñado para tu bienestar',
    text: 'Nuestro estudio cuenta con equipamiento de última generación en un ambiente tranquilo y acogedor.',
  },
  {
    image: 'https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Clases personalizadas para todos los niveles',
    text: 'Desde principiantes hasta avanzados, nuestros instructores certificados te guiarán en cada paso.',
  },
];

function Card({ image, title, text }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius={0} // No radius for full-width look
      style={{ 
        height: { base: 350, sm: 450 }, 
        backgroundImage: `url(${image})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Overlay color="#000" opacity={0.5} zIndex={1} />
      <div style={{ position: 'relative', zIndex: 2, color: 'white', textAlign: 'center' }}>
        <Title order={1} c="white" ta="center" fz={{ base: '2rem', sm: '3rem' }}>{title}</Title>
        <Text size="xl" c="white" ta="center" mt="sm" fz={{ base: '1rem', sm: '1.25rem' }}>{text}</Text>
        <Group justify="center" mt="xl">
          <Button component={Link} to="/servicios" size="lg" color="brand-accent">Ver Servicios</Button>
        </Group>
      </div>
    </Paper>
  );
}

function HomePage() {
  const items = features.map((feature, index) => (
    <List.Item
      key={index}
      icon={
        <ThemeIcon size={24} radius="xl" color="brand-secondary">
          <IconCircleCheck size={16} />
        </ThemeIcon>
      }
    >
      {feature}
    </List.Item>
  ));

  const slides = slidesData.map((slide, index) => (
    <Carousel.Slide key={index}>
      <Card {...slide} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Carousel withIndicators loop autoPlay={{ delay: 5000 }}>
        {slides}
      </Carousel>

      <Container py="xl">
        <Grid align="center" gutter="xl">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Title order={2} ta="center" mb="lg" fz={{ base: '1.8rem', sm: '2.125rem' }}>¿Por qué elegir Pilates Conexión?</Title>
            <Text mb="md">
              En Pilates Conexión creemos que cada cuerpo es único. Nuestro objetivo es ofrecerte clases que se adapten a tus necesidades, combinando la técnica tradicional de Pilates con un enfoque personalizado.
            </Text>
            <List spacing="sm" size="sm">
              {items}
            </List>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Image
              radius="md"
              src="https://images.pexels.com/photos/4753997/pexels-photo-4753997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Pilates class"
              className="card-image"
            />
          </Grid.Col>
        </Grid>
        <Testimonials />
      </Container>
    </>
  );
}

export default HomePage;
