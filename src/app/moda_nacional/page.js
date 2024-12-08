'use client'
import ItemCards from "../componentes/Item-cards";
import { use, useEffect, useState } from "react";
import { db } from "../componentes/Firebase";
import { getDocs, collection } from "firebase/firestore";
import searchContext from "../searchContext";
import { useContext } from "react";

const querySnapshot = await getDocs(collection(db, 'NACIONAL'))

function Moda_nacional() {
    const [data, setData] = useState([])
   
    function dadosFirebase() {
        let dados = []
        function pushDados() {
            querySnapshot.forEach(e => dados.push(e.data()))
        }
        pushDados()
        return dados
    }

    useEffect(() => {
        setData(dadosFirebase())
    }, [])

    return (

        <div className="">
            <div className="btn btn-danger" onClick={() => {
                
            }}>Click</div>

            <div className="grid">
                {data.map(e => {
                    return (
                        <ItemCards nome={e.nome} preco={e.preco} img={e.img} grade={e.grade} key={e.cod} ></ItemCards>
                    )
                })}
            </div>

        </div>
    )
}

export default Moda_nacional

