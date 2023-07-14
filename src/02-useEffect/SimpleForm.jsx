import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "brian",
    email: "Eltiobryanz@gmail.com",
  })

  const {username,email}=formState;

  const onInputChange = ({target})=>{
    const {name, value}= target;
    setformState({
      ...formState,
      [name]: value,
    })
  }

  useEffect(() => {
      
  },[]);
  
  useEffect(() => {
      
  },[formState]);
  
  useEffect(() => {
      
  },[email]);

  return (
    <>
        <h1>Simple Form</h1>
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

         {
            (username==='brian')&& <Message/> 
         }
    </>
  )
}
