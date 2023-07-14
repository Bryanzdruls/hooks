import { useEffect } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  
  const { formState, username, email, password, onInputChange,onResetForm} =useForm({
      username: '',
      email: '',
      password: '',
  })

  /* const {username,email, password}=formState; */

  useEffect(() => {
      
  },[]);
  
  useEffect(() => {
      
  },[formState]);
  
  useEffect(() => {
      
  },[email]);

  return (
    <>
        <h1>Custom Hook Form</h1>
        <hr />
        <input 
            type="text"
            className="form-control"
            placeholder="username"
            name="username"
            value={ username }
            onChange={ onInputChange }
         />

         <input 
            type="text"
            className="form-control mt-2"
            placeholder="eltiobryanz@gmail.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
         />
        
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="contraseña"
            name="password"
            value={ password }
            onChange={ onInputChange }
         />

         <button onClick={ onResetForm }className="btn btn-primary mt-2">borrar</button>
    </>
  )
}
