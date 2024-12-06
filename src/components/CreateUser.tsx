import { Button, Stack, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { userSignUpFormSchema, userSignUpFormType } from "../utils/schema"
import { zodResolver } from "@hookform/resolvers/zod"

const CreateUser = () => {

    const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm<userSignUpFormType>({
        mode: "all",
        resolver: zodResolver(userSignUpFormSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
        }
    })

    const handleFormSubmit = async (data: userSignUpFormType) => {
        await new Promise((res) => setTimeout(res, 2000))
        console.log(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="p-4 my-4" action="">
            <Stack spacing={2}>
                <TextField {...register("name")} label="Name" error={!!errors.name} helperText={errors.name?.message} />
                <TextField {...register("email")} label="Email" error={!!errors.email} helperText={errors.email?.message} />
                <TextField type="password" {...register("password")} label="Password" error={!!errors.password} helperText={errors.password?.message} />
                <TextField type="password" {...register("confirmPassword")} label="Confirm Password" error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message} />
                <Button disabled={isSubmitting} type="submit" variant="contained">Submit</Button>
            </Stack>
        </form>
    )
}

export default CreateUser