import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const recipientEmail = process.env.RECIPIENT_EMAIL;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { nombre, email, telefono, servicioInteres, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ error: 'Nombre, email y mensaje son obligatorios.' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Pilates Conexión <onboarding@resend.dev>',
      to: [recipientEmail],
      subject: `Nuevo Mensaje de Contacto de ${nombre}`,
      reply_to: email,
      html: `
        <h1>Nuevo Mensaje del Formulario de Contacto</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Servicio de Interés:</strong> ${servicioInteres || 'No especificado'}</p>
        <hr>
        <h2>Mensaje:</h2>
        <p>${mensaje}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({ error: 'Error al enviar el correo.' });
    }

    res.status(200).json({ message: 'Correo enviado exitosamente!' });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}
