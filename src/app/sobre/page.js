'use client'
import { useContext,useState } from "react"
import searchContext from "../searchContext"


function sobre() {
    const [state, SetState] = useState()


    return (

        <div>
            <h1>{'search'}</h1>
            <button className="btn btn-danger" onClick={()=>{
                SetState( state+1 )
            }} >Add</button>
        </div>

    )

    return sobre
}



export default sobre