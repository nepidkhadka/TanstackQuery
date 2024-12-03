import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div>
            {/* <h1 className="text-3xl font-bold bg-slate-500 p-4 text-white text-center">Student List</h1> */}
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <span className="text-white font-bold text-2xl" >
                        Students
                    </span>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className={({ isActive }) => `${isActive ? "text-blue-500" : "text-white"} block py-2 px-3`}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/students" className={({ isActive }) => `${isActive ? "text-blue-500" : "text-white"} block py-2 px-3`}>Students</NavLink>
                            </li>
                            <li>
                                <NavLink to="/create" className={({ isActive }) => `${isActive ? "text-blue-500" : "text-white"} block py-2 px-3`}>Create</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/update" className={({ isActive }) => `${isActive ? "text-blue-500" : "text-white"} block py-2 px-3`}>Update</NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header