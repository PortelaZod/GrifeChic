'use client'
import { useState } from "react"


function sobre() {

    const [state, SetState] = useState(0)
    

    return (
        <div>
            <h1>{state}</h1>
            <button className="btn btn-danger" onClick={()=>{
                SetState( state+1 )
            }} >Add</button>
        </div>
    )

    return sobre
}



export default sobre