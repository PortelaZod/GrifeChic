import Image from "next/image"
const ImgCard = (x) => {

    return (
        <div className="position-relative rounded overflow-hidden">
            <p className="position-absolute top-50 bg-black w-100 p-1 fw-medium text-light text-center">{x.nome}</p>
            <Image className="grd2Img" src={x.url} width={150} height={150}  alt='nomeMarca' style={{objectFit:'cover',objectPosition:'center'}}></Image>
        </div>
    )

}

export default ImgCard