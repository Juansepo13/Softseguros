import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast} from 'react-hot-toast;';

export function TaskFormPage() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setValue
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      console.log(data);
      await updateTask(params.id, data);
    } else {
      await createTask(data);
      toast.succes('Tarea Creada');
    }
    navigate("/tasks");
  });

  useEffect(() =>{
    async function loadTask() {
      if (params.id) {
        const {data} = await getTask(params.id);
        setValue('Nombre_Completo', data.Nombre_Completo)
        setValue('Email', data.Email)
        setValue('Fecha_De_Nacimiento', data.Fecha_De_Nacimiento)
        setValue('Numero_Documento', data.Numero_Documento)
      }
    }
    loadTask();
  }, []);

  return (
    <div>
      <form onSubmit={(onSubmit)}>
        <input 
          type="text" 
          placeholder="Nombre Completo" 
          name="Nombre_Completo" 
          {...register("Nombre_Completo", { required: true })}
        />
        {errors.Nombre_Completo && <span>El Nombre es requerido</span>}
        <input 
          type="text" 
          placeholder="Email" 
          name="Email" 
          {...register("Email", { required: true })}
        />
        {errors.Email && <span>El Email es requerido</span>}
        <input 
          type="date" 
          placeholder="Fecha de Nacimiento" 
          name="Fecha_De_Nacimiento" 
          {...register("Fecha_De_Nacimiento")}
        />
        {errors.Fecha_De_Nacimiento && <span>Fecha de Nacimiento es requerido</span>}
        <input 
          type="number" 
          placeholder="Número de Documento" 
          name="Numero_Documento" 
          {...register("Numero_Documento", { required: true })}
        />
        {errors.Numero_Documento && <span>Número de Documento es requerido</span>}
        <button type="submit">Save</button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
          const accept = window.confirm('Are you sure?');
          if (accept) {
            await deleteTask(params.id);
            navigate("/task");
          }
        }}
      >
        Delete
      </button>
      )}
    </div>
  );
}
