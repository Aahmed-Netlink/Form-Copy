import { createContext, useState } from "react";

export const FormContext = createContext({
    binnedItems: [],
    dragable: [],
    setDragable: () => { }
})

const FormContextProvider = ({children}) => {
    const [dragable, setDragable] = useState([])
    const [binnedItems] = useState([])

    const fromCtx = {
        binnedItems: binnedItems,
        dragable: dragable,
        setDragable: setDragable,
    }

    return <FormContext.Provider value={fromCtx}>
        {children}
    </FormContext.Provider>
}

export default FormContextProvider;