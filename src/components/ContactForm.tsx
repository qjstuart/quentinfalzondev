"use client"

import { useForm } from "react-hook-form"

type ContactFormData = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>()

  async function onSubmit(formData: ContactFormData) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    }

    const response = await fetch("/__forms.html", requestOptions)
    console.log("response: ", response)

    if (response.ok) {
      console.log("response OK: ", response)
    } else if (!response.ok) {
      console.log("response not OK: ", response)
    }
    console.log("form input errors? ", errors)
  }

  return (
    <form name="contact" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {/* Hidden input link required by Netlify. */}
      <input type="hidden" name="form-name" value="contact" />

      <input
        className="border border-gray rounded-md py-3 pl-3"
        type="text"
        placeholder="Name"
        {...register("name", { required: "Required field", maxLength: 80 })}
      />
      <input
        className="border border-gray rounded-md py-3 pl-3"
        type="text"
        placeholder="Email"
        {...register("email", { required: "Required field", pattern: /^\S+@\S+$/i })}
      />
      <textarea
        className="border border-gray rounded-md min-h-24 py-3 pl-3"
        placeholder="Message"
        {...register("message", {
          required: "Required field",
          minLength: { value: 100, message: "Minimum message length is 100 characters" },
          maxLength: { value: 5000, message: "Maximum message length is 5000 characters" },
        })}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
