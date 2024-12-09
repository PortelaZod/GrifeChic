'use client'
import { createContext, use, useContext, useState } from "react";

export const MainContext = createContext()


export function ContextoProverdor(props) {

    const [user, setUser] = useState('Usuário')


    return (
        <MainContext.Provider value={[user, setUser]}>
            {props.children}
        </MainContext.Provider>
    )

}




