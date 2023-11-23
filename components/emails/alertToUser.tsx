interface EmailTemplateProps {
  user: {
    name: string;
  };
  application: {
    name: string;
  };
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  user,
  application,
}) => (
  <div className="bg-slate-500">
    <h3 className="py-5">¡Hola {user.name}!</h3>
    <h5 className="pb-5">Hemos recibido tu solicitud para el puesto de {application.name}. Agradecemos tu interés en nuestra servicio.</h5>
    <h5 className="pb-5">Nos pondremos en contacto contigo si tu perfil coincide con lo que estamos buscando.</h5>
    <p className="pb-10">¡Gracias por aplicar!</p>
    <p>Equipo de Giardelli Gonzalez.</p>
  </div>
);