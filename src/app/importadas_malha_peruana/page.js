'use client'
import ItemCards from "../componentes/Item-cards";
import { use, useContext, useEffect, useState } from "react";
import { db } from "../componentes/Firebase";
import { getDocs, collection } from "firebase/firestore";

 async function fb(){
    const querySnapshot = await getDocs(collection(db, 'grife_chic'))
    return querySnapshot
}



function Moda_nacional() {
    const [data, setData] = useState([])

    function dadosFirebase() {
        let dados = []
        function pushDados() {
            fb().forEach(e => dados.push(e.data()))
        }
        pushDados()
        return dados
    }

    useEffect(() => {
        setData(dadosFirebase().filter(e=> e.colecao == 'IMPORTADAS_PERUANAS'))
    }, [])

    return (

        <div className="mt-2 mb-5">
            <div className="grid">
                {data.map(e => {
                    return (
                        <ItemCards nome={e.name} preco={e.preco} img={e.img} grade={e.grade} key={e.cod} ></ItemCards>
                    )
                })}
            </div>
        </div>
    )
}

export default Moda_nacional

