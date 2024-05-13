import Navbar from '../components/Navbar'
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import Spinner from "../Components/Spinner";
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

   

    const sendMailtous = async (data) => {

        await fetch(' http://localhost:8000/api/v1/contact', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                console.log("mail send Successfully");
                setLoading(false);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            })

    }

    const onSubmit = (data) => {
        setLoading(true);
        sendMailtous(data);
        console.log(data);
    };


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    return (
        <div>
            <Navbar />
            {loading ? <Spinner /> : <div></div>}
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-7xl py-12 md:py-24">
                    <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
                        {/* contact from */}
                        <div className="flex items-center justify-center">
                            <div className="px-2 md:px-12">
                                <p className="text-2xl font-bold text-gray-900 md:text-4xl">Get in touch</p>
                                <p className="mt-4 text-lg text-gray-600">
                                    Our friendly team would love to hear from you.
                                </p>
                                <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="first_name"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                id="first_name"
                                                placeholder="First Name"
                                                name='firstName'
                                                {...register("firstName", {
                                                    required: "firstName is required.",
                                                    minLength: {
                                                        value: 2,
                                                        message: "firstName should be at-least 2 characters."
                                                    }
                                                })}
                                            />
                                            {errors.firstName && (
                                                <p className="text-red-500 errorMsg">{errors.firstName.message}</p>
                                            )}
                                        </div>

                                        <div className="grid w-full  items-center gap-1.5">
                                            <label
                                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                htmlFor="last_name"
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                id="last_name"
                                                placeholder="Last Name"
                                                name='lastName'
                                                {...register("lastName", {
                                                    required: "lastName is required.",
                                                    minLength: {
                                                        value: 2,
                                                        message: "lastName should be at-least 2 characters."
                                                    }
                                                })}
                                            />
                                            {errors.lastName && (
                                                <p className="text-red-500 errorMsg">{errors.lastName.message}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid w-full  items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            id="email"
                                            placeholder="Email"
                                            name='email'
                                            {...register("email", {
                                                required: "Email is required.",
                                                pattern: {
                                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                                    message: "Email is not valid."
                                                }
                                            })}
                                        />
                                        {errors.email && <p className="text-red-500 errorMsg">{errors.email.message}</p>}

                                    </div>
                                    <div className="grid w-full  items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="phone_number"
                                        >
                                            Phone number
                                        </label>
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="tel"
                                            id="phone_number"
                                            placeholder="Phone number"
                                            name='phone_number'
                                            {...register("phone_number", {
                                                required: true,
                                                maxLength: 11,
                                                minLength: 8,
                                                message: "Phone Number is required"
                                            })}
                                        />
                                        {errors.phone_number && (
                                            <p className="text-red-500 errorMsg">{errors.phone_number.message}</p>
                                        )}

                                    </div>
                                    <div className="grid w-full  items-center gap-1.5">
                                        <label
                                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            htmlFor="message"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            id="message"
                                            placeholder="Leave us a message"
                                            cols={3}
                                            name='message'
                                            {...register("message", {
                                                required: "message is required.",
                                                minLength: {
                                                    value: 10,
                                                    message: "message should be at-least 10 characters."
                                                }
                                            })}
                                        />
                                        {errors.message && (
                                            <p className="text-red-500 errorMsg">{errors.message.message}</p>
                                        )}

                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                        <img
                            alt="Contact us"
                            className="hidden max-h-full w-full rounded-lg object-cover lg:block"
                            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact