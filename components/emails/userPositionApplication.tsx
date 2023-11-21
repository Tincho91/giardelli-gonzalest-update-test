interface EmailTemplateProps {
  user: {
    name: string;
    cv: string;
    email: string;
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
    <h1 className="text-4xl font-bold">Nuevo Aplicante para {application.name}</h1>
    <p className="py-5">El usuario {user.name} ha aplicado al puesto de trabajo.</p>
    <p className="pb-5">CV: {user.cv}</p>
    <p>Email: {user.email}</p>
  </div>
);