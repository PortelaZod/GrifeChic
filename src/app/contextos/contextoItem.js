'use client'
const { createContext, useState } = require("react");

export const ContextoItem = createContext();

export function ProvedorItemContext(props) {

    const [item, setItem] = useState(null);

    return (
        <ContextoItem.Provider value={[item, setItem]}>
            {props.children}
        </ContextoItem.Provider>
    );
}