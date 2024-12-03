import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Student } from "../utils/types";
import { useStudent } from "../hooks/queries/studentQueries";
import { useAddStudent, useUpdateStudent } from "../hooks/mutations/studentMutations";
import { useForm } from "react-hook-form";

const Create = () => {

    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const { mutateAsync: addStudent, isPending: addPending } = useAddStudent()
    const { mutateAsync: updateStudent, isPending: updatePending } = useUpdateStudent()

    const nav = useNavigate()
    const { id } = useParams()
    const { data } = useStudent(id!)

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Student>({
        defaultValues: {
            studentName: "",
            studentEmail: "",
            phoneNumber: "",
        },
    })

    const handleStudentSubmit = async (formData: Student) => {
        if (isEditMode) {
            await updateStudent(formData)
        } else {
            await addStudent(formData)
        }
        reset()
        nav("/students")
    }

    useEffect(() => {
        if (id && data) {
            setIsEditMode(true)
            reset(data)
        } else {
            setIsEditMode(false)
        }
    }, [id, data])


    return (
        <>
            <div>
                <form onSubmit={handleSubmit(handleStudentSubmit)} className="max-w-sm mx-auto mt-10 border p-6 rounded-md shadow-md">
                    <fieldset>{isEditMode ? "Update Student Details" : "Enter Student Details"}</fieldset>
                    <div className="my-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Student Name</label>
                        <input id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com"   {...register("studentName", { required: "Name Is Required" })} />
                        {errors.studentName && <span className="text-xs text-red-600" >Name is required</span>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Student Email</label>
                        <input id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter Student Email"{...register("studentEmail", { required: "Email Is Required" })} />
                        {errors.studentEmail && <span className="text-xs text-red-600" >Email is required</span>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                        <input id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Eg. 987-0098-009" {...register("phoneNumber", { required: "Phone Number Is Required" })} />
                        {errors.phoneNumber && <span className="text-xs text-red-600" >Phone Number is required</span>}
                    </div>
                    {
                        isEditMode ?
                            <button type="submit" disabled={updatePending} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{updatePending ? "Updating Student..." : "Update"}</button>
                            :
                            <button type="submit" disabled={addPending} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{addPending ? "Adding Student..." : "Submit"}</button>
                    }
                </form>

            </div>
        </>
    )
}

export default Create