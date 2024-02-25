import { RouterProvider } from "react-router-dom"
import { router } from "./Routes"
import NavBar from "./components/navbar/navbar"
import Footer from "./components/Footer/Footer"


function App() {
 

  return (
    <>
    <NavBar/>
    <RouterProvider router={router}/> 
    <Footer/>

      
    </>
      
   
  )
}

export default App
