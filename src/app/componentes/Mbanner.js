import Image from "next/image"

function Banner(x) {

    return (
        <div className='banner_container'>
            <Image className='banner' src={x.src} alt='banner' priority={true}></Image>
        </div>
    )

}

export default Banner