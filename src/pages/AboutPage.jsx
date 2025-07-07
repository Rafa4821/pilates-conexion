import { Container, Title, Text, Grid, Image, Card, SimpleGrid, Badge, Group } from '@mantine/core';
import { Fade } from 'react-awesome-reveal';

const instructors = [
  {
    name: 'María López',
    certification: 'PMA® Certified Pilates Instructor',
    experience: '6 años dedicados a rehabilitación post-operatoria y entrenamiento avanzado.',
    bio: 'Apasionada por el movimiento consciente, María guía tus clases con energía y empatía. Su especialidad es trabajar con personas que buscan recuperar movilidad tras lesiones de rodilla y columna.',
    image: 'https://images.unsplash.com/photo-1596496059861-4fe087d3eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&q=80&w=800',
  },
  {
    name: 'Juan Pérez',
    certification: 'STOTT Pilates® Certified Instructor',
    experience: '5 años impartiendo clases a nivel corporativo y entrenamiento pre/postnatal.',
    bio: 'Juan combina su formación en fisioterapia con Pilates para diseñar entrenamientos seguros y efectivos. Ha impartido talleres en centros de salud y gimnasios especializados.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Camila Silva',
    certification: 'Balanced Body® Pilates Instructor',
    experience: '4 años enfocada en Pilates para tercera edad y salud mental.',
    bio: 'Con un enfoque holístico, Camila incorpora técnicas de respiración y mindfulness en sus clases para promover un bienestar integral. Ha trabajado en clínicas geriátricas y talleres de estrés.',
    image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI3fDB8MHxzZWFyY2h8MXx8cGlsYXRlc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&q=80&w=800',
  },
];

function AboutPage() {
  return (
    <Container py="xl">
      <Fade direction="up" triggerOnce>
        <Title order={2} ta="center" mb="xl" fz={{ base: '1.8rem', sm: '2.125rem' }}>Quiénes Somos</Title>
        <Text ta="center" c="dimmed" mb="xl">Nuestra pasión por el Pilates y el bienestar te conecta con una nueva forma de entrenar.</Text>
      </Fade>

      <Fade direction="up" triggerOnce>
        <Grid align="center" gutter="xl" mb="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              radius="md"
              src="https://images.pexels.com/photos/8436940/pexels-photo-8436940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Historia del estudio"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={3} mb="md">Nuestra Historia</Title>
            <Text>
              Pilates Conexión abrió sus puertas en marzo de 2021, fruto de la pasión de sus fundadores por mejorar la calidad de vida de cada alumno. Desde entonces, hemos ofrecido una experiencia integral enfocada en la técnica, la conciencia corporal y el bienestar mental. Ubicados en Providencia, Santiago, contamos con salas climatizadas, equipo de última generación y un equipo de instructores certificados por Pilates Method Alliance (PMA).
            </Text>
            <Text mt="sm">
              Nuestro compromiso es enseñar Pilates con los más altos estándares de calidad, adaptándonos a cada persona para que alcance sus metas de salud, rehabilitación y acondicionamiento físico.
            </Text>
          </Grid.Col>
        </Grid>
      </Fade>

      <Fade direction="up" triggerOnce>
        <Title order={3} ta="center" mt="xl" mb="lg" fz={{ base: '1.7rem', sm: '1.9rem' }}>Nuestros Instructores</Title>
      </Fade>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {instructors.map((instructor, index) => (
          <Fade direction="up" delay={index * 100} triggerOnce key={instructor.name}>
            <Card 
              shadow="sm" 
              padding="lg" 
              radius="md" 
              withBorder 
              className="interactive-card"
              style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <Card.Section>
                <Image src={instructor.image} height={250} alt={instructor.name} className="card-image" />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Title order={4}>{instructor.name}</Title>
                <Badge color="pink" variant="light">{instructor.certification}</Badge>
              </Group>

              <Text mt="md" size="sm" fw={700}>Experiencia:</Text>
              <Text size="sm">{instructor.experience}</Text>

              <Text mt="sm" size="sm" fw={700}>Bio:</Text>
              <Text size="sm" c="dimmed" style={{ flexGrow: 1 }}>{instructor.bio}</Text>
            </Card>
          </Fade>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default AboutPage;
