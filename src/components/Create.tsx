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

    const { register, handleSubmit, reset, setError, formState: { errors } } = useForm<Student>({
        defaultValues: {
            studentName: "",
            studentEmail: "",
            phoneNumber: "",
            address: "",
            hobbies: "",
            startDate: "",
            gender: ""
        },
    })

    const handleStudentSubmit = async (formData: Student) => {
        if (isEditMode) {
            try {
                await updateStudent(formData)
            } catch (error) {
                setError("root", { message: "Something went wrong" })
            }
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
                        <input id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com"   {...register("studentName", { required: "Name Is Required", maxLength: 15 })} />
                        {errors.studentName && <span className="text-xs text-red-600" >{errors.studentName?.message}</span>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Student Email</label>
                        <input id="email" type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter Student Email"{...register("studentEmail", { required: "Email Is Required", pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, })} />
                        {errors.studentEmail && <span className="text-xs text-red-600" >{errors.studentEmail?.message}</span>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                        <input id="number" type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Eg. 987-0098-009" {...register("phoneNumber", { required: "Phone Number Is Required" })} />
                        {errors.phoneNumber && <span className="text-xs text-red-600" >{errors.phoneNumber?.message}</span>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">Age</label>
                        <input id="age" type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Eg. 18" {...register("age", { required: "Age Is Required", min: { value: 18, message: "Minimum age is 18" } })} />
                        {errors.age && <span className="text-xs text-red-600" >{errors.age.message}</span>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                        <select className="w-full"  {...register("gender", { required: "Gender Is Required" })} >
                            <option value="" selected disabled >Select...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <span className="text-xs text-red-600" >{errors.gender.message}</span>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                        <input id="date" type="datetime-local" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  {...register("startDate", { required: "Date is Required" })} />
                        {errors.startDate && <span className="text-xs text-red-600" >{errors.startDate.message}</span>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="hobbies" className={`block mb-2 text-sm font-medium text-gray-900`}>Hobbies</label>
                        <input id="hobbies" type="text" className={`${errors.hobbies ? "border-red-600" : ""} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`} placeholder="Eg. Signing, Drawing" {...register("hobbies", { required: "Hobbies Is Required" })} />
                        {errors.hobbies && <span className="text-xs text-red-600" >{errors.hobbies?.message}</span>}
                    </div>
                    {/* {getValues("hobbies") && <div className="text-xs text-red-600" ><span>{getValues("hobbies")}</span></div>} */}
                    {
                        isEditMode ?
                            <button type="submit" disabled={updatePending} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{updatePending ? "Updating Student..." : "Update"}</button>
                            :
                            <button type="submit" disabled={addPending} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{addPending ? "Adding Student..." : "Submit"}</button>
                    }
                </form>
                {errors.root && <span className="text-xs text-red-600" >{errors.root?.message}</span>}
            </div>
        </>
    )
}

export default Create