import {z} from 'zod'

export const usernameValidation = z
.string()
.min(2, "Username must be atleast 2 characters")
.max(2, "Username must be no more than 20 characters")
.regex(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/igm,"Username must not contain special character")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email("Invalid email"),
    password: z.string().min(6,{message: "password must be atleast 6 characters"})
})