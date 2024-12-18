'use client'
import { createContext, use, useContext, useState } from "react";
import suitBackground from '@/app/layout_imgs/suit-bakcground.png'

export const MainContext = createContext()

export function ContextoProverdor(props) {
    const [user, setUser] = useState(false)
    return (
        <MainContext.Provider value={[user, setUser]}>
            {props.children}
        </MainContext.Provider>
    );

}




