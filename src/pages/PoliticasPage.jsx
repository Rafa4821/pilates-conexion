import { Container, Title, Text, Space } from '@mantine/core';

function PoliticasPage() {
  return (
    <Container py="xl">
      <Title order={2} ta="center" mb="xl">Políticas de Privacidad y Aviso Legal</Title>

      <Text mb="lg">
        La presente política de privacidad establece los términos en que <strong>Pilates Conexión</strong> utiliza y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Estamos comprometidos en cumplir con el compromiso de mantener su información segura.
      </Text>

      <Title order={4} mt="xl">1. Información que es recogida</Title>
      <Text>
        El sitio web podrá recoger información personal como: nombre, correo electrónico, número de teléfono, dirección física y datos de contacto. Asimismo, cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.
      </Text>

      <Title order={4} mt="xl">2. Uso de la información recogida</Title>
      <Text>
        El sitio web emplea la información con el fin de proporcionar un mejor servicio y atención personalizada, respondiendo a tus solicitudes, procesando pagos y enviando comunicaciones relacionadas con promociones o eventos. Pilates Conexión está autorizado para compartir información con las autoridades si así se requiere por ley.
      </Text>

      <Title order={4} mt="xl">3. Cookies</Title>
      <Text>
        Este sitio web utiliza cookies para mejorar la experiencia de usuario. Las cookies son archivos enviados al navegador para almacenar información que será utilizada por el servidor web en futuras visitas. Puedes configurar tu navegador para rechazar el uso de cookies.
      </Text>

      <Title order={4} mt="xl">4. Enlaces a Terceros</Title>
      <Text>
        En ocasiones, nosotros podemos brindar enlaces a sitios web de terceros. Pilates Conexión no se hace responsable de los contenidos ni las prácticas de dichos sitios.
      </Text>

      <Title order={4} mt="xl">5. Cambios en la Política de Privacidad</Title>
      <Text>
        Pilates Conexión se reserva el derecho de actualizar o cambiar esta política en cualquier momento. Cualquier modificación será publicada en esta misma página.
      </Text>

      <Space h="xl" />

      <Text c="dimmed">Última actualización: 1 de Julio de 2025.</Text>
    </Container>
  );
}

export default PoliticasPage;
