import { AppShell, Burger, Group, Title, Text, NavLink, Box, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import { IconHome, IconUsers, IconHeartHandshake, IconPhone } from '@tabler/icons-react';

const navLinks = [
  { icon: IconHome, label: 'Home', to: '/' },
  { icon: IconHeartHandshake, label: 'Servicios', to: '/servicios' },
  { icon: IconUsers, label: 'Nosotros', to: '/nosotros' },
  { icon: IconPhone, label: 'Contacto', to: '/contacto' },
];

function Layout({ children }) {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();

  const links = navLinks.map((link) => (
    <NavLink
      key={link.label}
      component={Link}
      to={link.to}
      label={link.label}
      leftSection={<link.icon size="1rem" stroke={1.5} />}
      active={location.pathname === link.to}
      onClick={toggle}
      variant="filled"
    />
  ));

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title order={3} c="brand-primary.6">Pilates Conexión</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        {links}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>

      <AppShell.Footer p="xs">
        <Container>
          <Group justify="space-between" align="center">
            <Text size="sm" c="dimmed">© 2025 Pilates Conexión. Todos los derechos reservados.</Text>
            <Text size="sm" component={Link} to="/politicas" c="dimmed" style={{ textDecoration: 'none' }}>
              Políticas y Aviso Legal
            </Text>
          </Group>
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}

export default Layout;
