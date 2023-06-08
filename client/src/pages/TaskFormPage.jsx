import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

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
      toast.success('Contacto Actualizado', {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff"
        }
      });
    } else {
      await createTask(data);
      toast.success('Contacto Creado', {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff"
        }
      });
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getTask(params.id);
        setValue('Nombre_Completo', data.Nombre_Completo);
        setValue('Email', data.Email);
        setValue('Fecha_De_Nacimiento', data.Fecha_De_Nacimiento);
        setValue('Numero_Documento', data.Numero_Documento);
      }
    }
    loadTask();
  }, []);

  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Nombre Completo" 
          name="Nombre_Completo" 
          {...register("Nombre_Completo", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg' block w-full mb-3"
        />
        {errors.Nombre_Completo && <span>El Nombre es requerido</span>}
        <input 
          type="text" 
          placeholder="Email" 
          name="Email" 
          {...register("Email", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg' block w-full mb-3"
        />
        {errors.Email && <span>El Email es requerido</span>}
        <input 
          type="date" 
          placeholder="Fecha de Nacimiento" 
          name="Fecha_De_Nacimiento" 
          {...register("Fecha_De_Nacimiento")}
          className="bg-zinc-700 p-3 rounded-lg' block w-full mb-3"
        />
        {errors.Fecha_De_Nacimiento && <span>Fecha de Nacimiento es requerido</span>}
        <input 
          type="number" 
          placeholder="Número de Documento" 
          name="Numero_Documento" 
          {...register("Numero_Documento", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg' block w-full mb-3"
        />
        {errors.Numero_Documento && <span>Número de Documento es requerido</span>}

        <button 
        className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'
        >Save</button>
      </form>

      {params.id && (
        <div className='flex justify-end'>
          <button
        className='bg-red-500 p-3 rounded-lg w-48 mt-3 '
          onClick={async () => {
            const accept = window.confirm('Are you sure?');
            if (accept) {
              await deleteTask(params.id);
              toast.success('Contacto Eliminado', {
                position: "bottom-right",
                style: {
                  background: "#101010",
                  color: "#fff"
                }
              });
              navigate("/tasks");
            }
          }}
        >
          Delete
        </button>
        </div>  

      )}
    </div>
  );
}
