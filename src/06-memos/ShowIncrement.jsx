import React from "react";


export const ShowIncrement = React.memo(( {increment}) => {
  console.log("me volvi a incrementar")
  return (
    <button
        className="btn btn-primary"
        onClick={()=>{
            increment();
        }}
    >
        incrementar
    </button>
  )
})
