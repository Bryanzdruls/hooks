
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";



export const MultipleCustomHooks = () => {
  
  const{counter, increment, decrement} =useCounter(1);

  const { data, isLoading, hasError }= useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

  const {name, image}= !!data && data;
  
  return (
    <>
        <h1>RickAndMorty</h1>
        <hr />
        {
          (isLoading)? <LoadingQuote/>: <Quote image={image} name={name}/>  
        }

        <button 
            className="btn btn-primary" 
            disabled={isLoading}
            onClick={()=> increment()}>
            Next quote
        </button>

        <button 
            className="btn btn-primary" 
            disabled={isLoading}
            onClick={()=> decrement(1,1)}>
            Previous quote
        </button>
    </>  
  )
}
