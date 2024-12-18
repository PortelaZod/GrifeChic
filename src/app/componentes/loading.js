import { useContext } from "react"
import { MainContext } from "../contextos/contexto"



function LoadingAnimation(){
    const [display] = useContext(MainContext)
    console.log(display)
    return (
        <div className={display}>
            <p>Grife Chic</p>
            <p>Moda Masculina</p>
        </div>
    )
}

export default LoadingAnimation