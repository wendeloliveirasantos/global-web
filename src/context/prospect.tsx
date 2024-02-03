/* eslint-disable react-hooks/rules-of-hooks */
import { STORAGE_PROSPECT } from "@/constants";
import { IProspect } from "@/types/propspect";
import React, { useEffect, useState } from "react";

type IPropspectContext = {
    prospect: IProspect | null
    addPropspect(input: IProspect): void
}

export const ProspectContext = React.createContext<IPropspectContext | null>(null)

const ProspectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [prospect, setPropspect] = useState<IProspect | null>(null)

    useEffect(() => {
        const existPropspect = localStorage.getItem(STORAGE_PROSPECT)
        if (existPropspect) {
            setPropspect(JSON.parse(existPropspect))
        }
    }, [])

    function addPropspect(input: IProspect) {
        localStorage.setItem(STORAGE_PROSPECT, JSON.stringify(input))
        setPropspect(input)
    }

    return (
        <ProspectContext.Provider value={{ prospect, addPropspect }}>
            {children}
        </ProspectContext.Provider>
    )
}

export default ProspectProvider;

export function useProspect() {
    const context = React.useContext(ProspectContext) as IPropspectContext
    return context;
  }