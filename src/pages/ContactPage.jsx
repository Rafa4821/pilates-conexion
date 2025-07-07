import { Container, Title, Text, Grid, TextInput, Textarea, Select, Button, Paper, Group, ThemeIcon, rem, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { notifications } from '@mantine/notifications';
import { IconMapPin, IconPhone, IconMail, IconClock } from '@tabler/icons-react';

const contactInfo = [
  { icon: IconMapPin, text: 'Av. Providencia 1234, Providencia, Santiago, Chile' },
  { icon: IconPhone, text: '+56 9 1234 5678' },
  { icon: IconMail, text: 'info@pilatesconexion.cl' },
  { icon: IconClock, text: 'Lunes a Viernes: 8:00 – 21:00 | Sábado: 9:00 – 14:00' },
];

const services = [
  'Clases Grupales de Pilates',
  'Pilates Personalizado',
  'Pilates en Reformer',
  'Clases Mat Online',
  'Pilates para Rehabilitación',
  'Clases Privadas en Pareja',
];

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
      servicioInteres: '',
      mensaje: '',
    },
    validate: {
      nombre: (value) => (value.trim().length > 0 ? null : 'El nombre es obligatorio'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
      mensaje: (value) => (value.trim().length > 0 ? null : 'El mensaje es obligatorio'),
    },
  });

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Ocurrió un error al enviar el mensaje.');
      }

      notifications.show({
        title: 'Mensaje Enviado',
        message: 'Gracias por contactarnos. Te responderemos a la brevedad.',
        color: 'green',
      });
      form.reset();
    } catch (error) {
      notifications.show({
        title: 'Error al enviar',
        message: error.message,
        color: 'red',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container py="xl">
      <Title order={2} ta="center">Contáctanos</Title>
      <Text ta="center" c="dimmed" mb="xl">Estamos ubicados en Providencia, Santiago. Escríbenos o visítanos:</Text>

      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper withBorder shadow="md" p="lg" radius="md" style={{ height: '100%' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1114000738024!2d-70.60862728479661!3d-33.442946280779834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c56c6b0f3e4d%3A0x7a13f8483d2e0c9!2sAv.%20Providencia%201234%2C%20Providencia!5e0!3m2!1ses!2scl!4v1696000000000!5m2!1ses!2scl"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: 'var(--mantine-radius-md)' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <Stack mt="lg" gap="md">
              {contactInfo.map((item, index) => (
                <Group key={index} wrap="nowrap" gap="md">
                  <ThemeIcon size="lg" variant="light" color="brand-primary">
                    <item.icon style={{ width: rem(22), height: rem(22) }} />
                  </ThemeIcon>
                  <Text size="sm">{item.text}</Text>
                </Group>
              ))}
            </Stack>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper withBorder shadow="md" p="lg" radius="md">
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                withAsterisk
                label="Nombre completo"
                placeholder="Tu nombre"
                {...form.getInputProps('nombre')}
              />
              <TextInput
                withAsterisk
                label="Correo electrónico"
                placeholder="tucorreo@example.com"
                mt="md"
                {...form.getInputProps('email')}
              />
              <TextInput
                label="Teléfono"
                placeholder="+56 9 1234 5678"
                mt="md"
                {...form.getInputProps('telefono')}
              />
              <Select
                label="Servicio de interés"
                placeholder="Elige un servicio"
                data={services}
                mt="md"
                {...form.getInputProps('servicioInteres')}
              />
              <Textarea
                withAsterisk
                label="Mensaje"
                placeholder="Tu mensaje..."
                mt="md"
                minRows={4}
                {...form.getInputProps('mensaje')}
              />
              <Button type="submit" color="brand-accent" fullWidth mt="xl" loading={isSubmitting}>
                Enviar Mensaje
              </Button>
            </form>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default ContactPage;
