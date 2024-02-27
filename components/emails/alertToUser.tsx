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
    <h3 className="py-5">¡Hola {user.name}! Recibimos tu aplicación para el puesto "{application.name}".</h3>
    <h3 className="pb-5">Desde nuestro equipo, vamos a estar revisando tu CV, y si tu perfíl se ajusta a los requisitos de la búsqueda, nos pondremos en contacto para coordinar una entrevista. ¡Agradecemos tu interés en participar en este proceso de selección!</h3>
    <p className="pb-1">Saludos,</p>
    <p>Giardelli Gonzalez.</p>
    <img></img>
  </div>
);