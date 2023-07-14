import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({image,name}) => {
  
  const imgRef=useRef();
  const [boxSize, setBoxSize] = useState({width:0 ,height:0});

  useLayoutEffect(() => {
    const {width,height}=imgRef.current.getBoundingClientRect();
    setBoxSize({
      width: width,
      height: height,
    })
  },[name])
  
  return (
    <>
      <blockquote 
          className="blockquote text-end"
          style={{display: 'flex'}}
      >
          <img ref={imgRef} src={image} alt="No se pudo renderizar la imagen" />
          <p className="mb-2">{ image }</p>
          <footer className="blockquote-footer">{ name }</footer>
      </blockquote>
      <code>{JSON.stringify( boxSize )}</code>
    </>
    
  )
}
