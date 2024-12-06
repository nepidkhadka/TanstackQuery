import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { Student } from "../utils/types"
import { useDeleteStudent } from "../hooks/mutations/studentMutations"

const ProfileCard = ({ data }: { data: Student }) => {
    const nav = useNavigate()
    const { pathname } = useLocation();

    const { mutateAsync: deleteStudent } = useDeleteStudent(data.id!)

    const handleDelete = async () => {
        try {
            await deleteStudent()
            nav("/students")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
                <img className="w-32 h-32 rounded-full mx-auto" src={`https://picsum.photos/id/${data.id}/200/300`} alt={data.studentName} />
            </div>
            <div className="p-2">
                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{data.studentName}</h3>
                <table className="text-xs my-3 mx-auto">
                    <tbody>
                        <tr>
                            <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                            <td className="px-2 py-2">{data.phoneNumber}</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                            <td className="px-2 py-2">{data.studentEmail}</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                            <td className="px-2 py-2">{data.address}</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2 text-gray-500 font-semibold">Joined Date</td>
                            <td className="px-2 py-2">{data.startDate}</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-2 text-gray-500 font-semibold">Hobbies</td>
                            <td className="px-2 py-2">{data.hobbies}</td>
                        </tr>
                    </tbody></table>

                <div className="flex justify-center gap-4">
                    {
                        pathname == `/students/${data?.id}` ?
                            <NavLink to={`/students/`} className="text-center my-3 cursor-pointer">
                                <span className="text-xs bg-gray-600 p-3 text-white italic rounded-sm hover:text-white font-medium">Go Back</span>
                            </NavLink>
                            :
                            <NavLink to={`/students/${data?.id}`} className="text-center my-3 cursor-pointer">
                                <span className="text-xs bg-green-400 p-3 text-white italic rounded-sm hover:text-white font-medium">View Profile</span>
                            </NavLink>
                    }
                    {/* <div onClick={() => deleteStudent(data.id)} className="text-center my-3 cursor-pointer"> */}
                    <div onClick={() => handleDelete()} className="text-center my-3 cursor-pointer">
                        {/* <div className="text-center my-3 cursor-pointer"> */}
                        <span className="text-xs bg-red-400 p-3 text-white italic rounded-sm hover:text-white font-medium">Delete</span>
                    </div>
                    <NavLink to={`/students/update/${data?.id}`} className="text-center my-3 cursor-pointer">
                        <span className="text-xs bg-yellow-400 p-3 text-white italic rounded-sm hover:text-white font-medium">Update</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard