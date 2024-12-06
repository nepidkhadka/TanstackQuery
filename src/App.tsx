import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Students from "./components/Students"
import Create from "./components/Create"
import Header from "./components/Header"
import Products from "./components/Products"
import Student from "./components/Student"
import Product from "./components/Product"
import CreateUser from "./components/CreateUser"

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
          <Student />
        </>} />
        <Route path="/students/update/:id" element={<>
          <Header />
          <Create />
        </>} />
        <Route path="/products/" element={<>
          <Header />
          <Products />
        </>} />
        <Route path="/products/:id" element={<>
          <Header />
          <Product />
        </>} />
        <Route path="/createuser/" element={<>
          <Header />
          <CreateUser />
        </>} />
      </Routes>

    </>
  )
}

export default App
