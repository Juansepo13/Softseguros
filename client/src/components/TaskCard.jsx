export function TaskCard({ task }) {
  return (
    <div>
        <h1>{task.Nombre_Completo}</h1>
        <p>{task.Email}</p>
        <p>{task.Fecha_De_Nacimiento}</p>
        <p>{task.Fecha_De_Creacion}</p>
        <p>{task.Numero_Documento}</p>
        <hr />
    </div>
  )
}
