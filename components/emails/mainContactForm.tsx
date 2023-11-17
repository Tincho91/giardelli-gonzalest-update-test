interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
  email
}) => (
  <div className="bg-slate-500">
    <h1 className="text-4xl font-bold">Consulta de {name}</h1>
    <p className="py-5">Mensaje: {message} </p>
    <p>Email: {email}</p>
  </div>
);