import { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";

export const useMenuContext = () => {
    const context = useContext(MenuContext)

    if(!context){
        console.log("Contexto não encontrado!")
    }

    return context
}