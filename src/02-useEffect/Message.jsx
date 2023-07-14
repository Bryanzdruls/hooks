import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {

        const mousemove = ({ x, y }) => {
            const coords = { x, y };
            console.log(coords);
        }

        window.addEventListener('mousemove', mousemove);

        return () => {
            window.removeEventListener('mousemove', mousemove);
        }
    }, [])



    return (
        <>
            <h3>Usuario Ya existe</h3>
        </>
    )
}
