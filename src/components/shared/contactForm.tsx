'use client'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ContactFormSchema } from "@/lib/zodSchemas/contactSchema"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { createClient } from "@/lib/actions/client.action"
import { ClientActionParams } from "@/lib/actionInterfaces"
import toast from "react-hot-toast"
import { Button } from "../ui/button"
import { Send } from 'lucide-react'

const ContactForm = () => {

    // defining type of form
    type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;
    // 1- define form
    const form = useForm<ContactFormSchemaType>({
        resolver: zodResolver(ContactFormSchema)
    })
    // 2- define the submit function
    async function OnSubmit(values: ContactFormSchemaType) {
        try {
            const newClient: ClientActionParams = await createClient(values)
            toast.success('Sumitted')
            return newClient
        } catch (error) {
            console.log('the error is: ', error);
            toast.error('Something went wrong')
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(values => OnSubmit(values))}>
                <div className=" w-[280px] sm:w-[420px] lg:w-[600px] h-[600px] lg:h-[550px]  bg-[#091427] rounded-lg outline-0 border-gray-800 border-[2px] box-border bg-opacity-70 backdrop-blur-sm p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-5 ">

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="input-cont text-gray-100">
                                        <Input type="text" placeholder="name" className="input-field w-full bg-transparent focus:bg-transparent" {...field} />
                                        <div className="input-label">name</div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="lg:col-span-2">
                                <FormControl>
                                    <div className="input-cont text-gray-100">
                                        <input type="email" placeholder="email" className="input-field w-full bg-transparent focus:bg-transparent" {...field} />
                                        <div className="input-label">email</div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="contact"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="input-cont text-gray-100">
                                        <Input type="tel" placeholder="+923001234567" className="input-field w-full bg-transparent focus:bg-transparent" {...field} />
                                        <div className="input-label">contact</div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="linkedin"
                        render={({ field }) => (
                            <FormItem className="lg:col-span-2">
                                <FormControl>
                                    <div className="input-cont text-gray-100">
                                        <Input type="text" placeholder="linkedin" className="input-field w-full bg-transparent focus:bg-transparent" {...field} />
                                        <div className="input-label">linkedin</div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem className="lg:col-span-3">
                                <FormControl>
                                    <div className="input-cont text-gray-100">
                                        <Input type="text" placeholder="subject" className="input-field w-full bg-transparent focus:bg-transparent" {...field} />
                                        <div className="input-label">subject</div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="lg:col-span-3">
                                <FormControl>
                                    <div className="input-cont text-gray-100">
                                        <Textarea placeholder="you can tell about your requirement here !" className="textarea-field w-full bg-transparent focus:bg-transparent p-5" {...field} />
                                        <div className="textarea-label">message</div>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <Button
                        type="submit"
                        size={"lg"}
                        disabled={form.formState.isSubmitting}
                        className="lg:col-span-2 border-2 text-[#f0ffff] bg-transparent border-[#f0ffff] rounded-[10px] mt-10  text-base sm:text-lg py-2 flex gap-2">
                        {form.formState.isSubmitting ? <div className="container">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div> : <Send className="text-base" />}
                        Get In Touch
                    </Button>
                </div>
            </form>
        </Form>

    )
}

export default ContactForm