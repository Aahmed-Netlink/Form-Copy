import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import BackDrop from "./Components/BackDrop"
import { useState } from "react";
import SideBar from "./Components/SideBar";
import { FormContext } from "./store/form-Context";

function App() {
  const [value, setvalue] = useState([
    {
      placeholder: [],
      label: [],
    }
  ])
  const [binnedItems, setbinnedItems] = useState([])
  console.log("I am In App Jsx File" + binnedItems)
  return (
    <DndProvider backend={HTML5Backend}>
      <FormContext.Provider value={{binnedItems}}>
        <main className="h-screen my-8 flex gap-4 mx-1">
          <SideBar />
          <BackDrop binnedItems={binnedItems} />
        </main>
      </FormContext.Provider>
    </DndProvider>
  )
}

export default App
