import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import FormContextProvider from "./store/form-Context";

import BackDrop from "./Components/BackDrop"
import SideBar from "./Components/SideBar";

function App() {
  console.log("I am In App Jsx File")
  return (
    <DndProvider backend={HTML5Backend}>
      <FormContextProvider>
        <main className="h-screen my-8 flex gap-4 mx-1">
          <SideBar />
          <BackDrop />
        </main>
      </FormContextProvider>
    </DndProvider>
  )
}

export default App
