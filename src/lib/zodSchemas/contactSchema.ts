import { z } from "zod";

export const ContactFormSchema = z.object({
    name:z.string().min(3,'name must be atleast of 3 characters'),
    email:z.string().email({message:"invalid email address"}),
    contact:z.string().regex( /^\+?[1-9]\d{1,14}$/,{message:'invalid phone number'}).optional(),
    linkedin:z.string(),
    subject:z.string().optional(),
    message:z.string().max(500,'max 500 characters are allowed').optional()
})