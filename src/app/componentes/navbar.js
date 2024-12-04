'use client'
import Image from 'next/image'
import bagIcon from '../../../public/layout_imgs/bag.png'
import UserIcon from '../../../public/layout_imgs/user.png'
import Link from 'next/link'
import { useEffect, useState } from 'react'



function Navbar(x) {

    return (
        <div className='position-sticky top-0 z-2'>
            <div className="navbar bg-black">
                <div className="container-fluid">
                    <p className="navbar-brand text-light h1 no_select ">{x.logo}</p>
                    <div className="user_area d-flex align-items-center">
                        <Image
                            src={bagIcon}
                            height={35}
                            alt='Shopping Bag'
                        />
                        <div className='d-flex align-items-center justify-content-center'>
                            <Image
                                src={UserIcon}
                                height={35}
                                alt='User Icon'
                            />
                            <p className="mb-0 ms-1 p-0 text-light fw-medium">Jefferson</p>
                        </div>
                        
                    </div>

                </div>
            </div>
            <div className='navbar bg-light'>
                <div className='container-fluid'>
                    <p className='navbar-brand h1 no_select'>{x.title}</p>
                    <div className=''>
                        <div className='btn btn-dark' onClick={() => {

                        }} >Entrar</div>
                        <a className='btn btn-danger' onClick={() => {

                        }} >Sair</a>
                    </div>
                </div>
            </div>
            <div className="links d-none d-lg-flex bg-black justify-content-around container-fluid">
                {x.links.map(e => { return <Link className="p-2 fw-bold" href='./sobre' key={e.valor}>{e}</Link> })}
            </div>

        </div>
    )
}

export default Navbar