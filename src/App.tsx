import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Students from "./components/Students"
import Create from "./components/Create"
import Header from "./components/Header"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <>
              <div className="bg-white h-screen flex items-center justify-center dark:bg-gray-800 ">
                <div className="text-start py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                  <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">
                      Look for your students ?
                    </span>
                    <span className="block text-indigo-500">
                      It&#x27;s today or never.
                    </span>
                  </h2>
                  <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                      <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        View Students
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </>
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
      </Routes>

    </>
  )
}

export default App
