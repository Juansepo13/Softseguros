import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {

  const navigate = useNavigate()

  return (
    <div style={{ background: "black" }}

      onClick={() => {
        navigate(`/task/${task.id}`);
      }}
    >
      <h1>{task.Nombre_Completo}</h1>
      <p>{task.Email}</p>
      <p>{task.Fecha_De_Nacimiento}</p>
      <p>{task.Fecha_De_Creacion}</p>
      <p>{task.Numero_Documento}</p>
      <hr />
    </div>
  );
}
