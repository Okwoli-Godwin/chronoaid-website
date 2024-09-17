import { RouterProvider } from "react-router-dom"
import { Element } from "./routes/router"

const App = () => {
  return (
    <RouterProvider router={Element}/>
  )
}

export default App