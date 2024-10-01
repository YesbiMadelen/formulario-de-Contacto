import { useRef } from "react";
import { useForm } from "react-hook-form";

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido:"",
      correo: "",
      
      password: "",
      confirmarPassword: "",
      
       mensaje: "",
      aceptaTerminos: false,
    },
  });

  const password = useRef(null);
  password.current = watch("password", "");

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
        {errors.nombre?.type === "maxLength" && (
          <span>Nombre no debe ser mayor a 20 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span>Nombre debe ser mayor a 2 caracteres</span>
        )}
      </div>



      <div>
        <label>Apellido:</label>
        <input
          type="text"
          name="apellido"
          {...register("apellido", {
            required: {
              value: true,
              message: "Apellido es requerido",
            },
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.apellido?.type === "required" && <span>Apellido requerido</span>}
        {errors.apellido?.type === "maxLength" && (
          <span>Apellido no debe ser mayor a 20 caracteres</span>
        )}
        {errors.apellido?.type === "minLength" && (
          <span>Apellido debe ser mayor a 2 caracteres</span>
        )}
      </div>




      <div>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="correo"
          {...register("correo", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
            },
          })}
        />
        {errors.correo && <span>{errors.correo.message}</span>}
      </div>

      

      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          {...register("password", {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "Contraseña debe ser mayor a 6 caracteres",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label>Confirma Contraseña:</label>
        <input
          type="password"
          name="confirmarPassword"
          {...register("confirmarPassword", {
            required: {
              value: true,
              message: "Confirmar contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "Confirmar contraseña debe ser mayor a 6 caracteres",
            },
            validate: (value) =>
              value === password.current || "Las contraseñas no coinciden",
          })}
        />
        {errors.confirmarPassword && (
          <span>{errors.confirmarPassword.message}</span>
        )}
      </div>
       
      <div class="row">
    <label class="required" for="message">Mensaje:</label><br />
    <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
    <span id="message_validation" class="error_message"></span>
  </div>
    

      <div>
        <input
          type="checkbox"
          name="aceptaTerminos"
          {...register("aceptaTerminos", {
            required: {
              value: true,
              message: "Acepta los términos y condiciones",
            },
          })}
        />
        <label>Acepto los términos y condiciones</label>
        {errors.aceptaTerminos && <span>{errors.aceptaTerminos.message}</span>}
      </div>

      

      <button type="submit">Enviar</button>

     
    </form>
  );
}

export default Formulario;
