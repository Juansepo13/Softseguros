import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {

  const navigate = useNavigate()

  return (
    <div
    className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"

      onClick={() => {
        navigate(`/task/${task.id}`);
      }}
    >
      <h1 className="font-bold uppercase">{task.Nombre_Completo}</h1>
      <p className="text-slate-400">{task.Email}</p>
      <p className="text-slate-400">{task.Fecha_De_Nacimiento}</p>
      <p className="text-slate-400">{task.Fecha_De_Creacion}</p>
      <p className="text-slate-400">{task.Numero_Documento}</p>
    </div>
  );
}
