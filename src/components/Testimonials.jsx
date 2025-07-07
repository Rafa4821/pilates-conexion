import { Container, Title, Text, Grid, Card, Avatar, Group } from '@mantine/core';
import { Fade } from 'react-awesome-reveal';

const testimonialsData = [
  {
    name: 'Ana García',
    role: 'Cliente Satisfecha',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: '¡Las clases son increíbles! He notado un cambio radical en mi postura y energía. El ambiente es acogedor y los instructores son muy profesionales. Lo recomiendo al 100%.',
  },
  {
    name: 'Carlos Vera',
    role: 'Cliente Satisfecho',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Pilates Conexión me ayudó a recuperarme de una lesión de espalda. El enfoque personalizado y el conocimiento de los instructores marcan la diferencia. Me siento más fuerte que nunca.',
  },
  {
    name: 'Isabel Torres',
    role: 'Cliente Satisfecha',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Un lugar maravilloso para desconectar y cuidar tu cuerpo. Las instalaciones son de primera y las clases grupales son dinámicas y muy entretenidas. ¡Me encanta!',
  },
];

function Testimonials() {
  return (
    <Container py="xl">
      <Fade direction="up" triggerOnce>
        <Title order={2} ta="center" mb="xl" fz={{ base: '1.8rem', sm: '2.125rem' }}>Lo que dicen nuestros clientes</Title>
      </Fade>
      <Grid>
        {testimonialsData.map((testimonial, index) => (
          <Grid.Col span={{ base: 12, md: 4 }} key={testimonial.name}>
            <Fade direction="up" delay={index * 100} triggerOnce>
              <Card shadow="sm" padding="xl" radius="md" withBorder style={{ height: '100%' }}>
                <Group>
                  <Avatar src={testimonial.avatar} alt={testimonial.name} radius="xl" size="lg" />
                  <div>
                    <Text fw={500}>{testimonial.name}</Text>
                    <Text size="xs" c="dimmed">{testimonial.role}</Text>
                  </div>
                </Group>
                <Text mt="md" c="dimmed" fst="italic">
                  “{testimonial.quote}”
                </Text>
              </Card>
            </Fade>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default Testimonials;
