'use client'
import ItemCards from "../componentes/Item-cards";
import { useEffect, useState } from "react";
import { db } from "../componentes/Firebase";
import { getDocs, collection } from "firebase/firestore";
import Label from "../componentes/label-block";
import Navbar from "../componentes/navbar";

const querySnapshot = await getDocs(collection(db, 'NACIONAL'))


function Moda_nacional() {

    function dadosFirebase() {

        let dados = []

        function pushDados() {
            querySnapshot.forEach(e => dados.push(e.data()))
        }
        pushDados()
        return dados
    }

    function grades() {
        let dados = []

        function pushDados() {
            querySnapshot.forEach(e => dados.push(e.data().grade))
        }
        pushDados()
        return dados
    }

    const [data, setData] = useState([])

    useEffect(() => {
        setData(dadosFirebase())
        setGrade(grades())
    }, [])

    return (

        <div className="">
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
