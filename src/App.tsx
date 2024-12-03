import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Students from "./components/Students"
import Create from "./components/Create"
import Header from "./components/Header"
import Products from "./components/Products"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
          </>
        } />
        <Route path="/students" element={
          <>
            <Header />
            <Students />
          </>
        } />
        <Route path="/create" element={<>
          <Header />
          <Create />
        </>} />
        <Route path="/students/:id" element={<>
          <Header />
          <Home />
        </>} />
        <Route path="/students/update/:id" element={<>
          <Header />
          <Create />
        </>} />
        <Route path="/products/" element={<>
          <Header />
          <Products />
        </>} />
      </Routes>

    </>
  )
}

export default App
