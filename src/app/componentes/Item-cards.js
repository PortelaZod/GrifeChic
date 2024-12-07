'use client'
import Image from "next/image"



function ItemCards(x) {
    return (

        <div >
            <div className="cd1 card">
                <div className="img-container">
                <Image className="card-img-top item-img" src={x.img} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="Camiseta"></Image>
                </div>
                <div className="card-body">
                    <h5 className="card-title item-nome mb-1" style={{userSelect:'none'}}>{x.nome}</h5>
                    <p className="item-grade text-secondary mb-1" style={{userSelect:'none'}}>{`${x.grade}`.replaceAll(',',' | ')}</p>
                    <p className="item-cod d-none d-md-flex text-secondary fs-6 mb-1">{`Cod: ${x.cod}`}</p>
                    <p className="card-text text-dark item-preco" style={{userSelect:'none'}}>{`R$ ${x.preco}`}</p>
                    <div className='btn btn-dark item-btn d-flex align-items-center justify-content-center add-btn' onClick={(e)=>{
                        // console.log(x)
                    }}> Adicionar <Image src='/layout_imgs/bag.png' className="ms-1" width={20} height={20} alt="não Encontrada" ></Image></div>
                </div>
            </div>
        </div>
    )
}

export default ItemCards