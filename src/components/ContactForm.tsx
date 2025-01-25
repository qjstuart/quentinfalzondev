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
    const body = {
      ...formData,
      "form-name": "contact",
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(body).toString(),
    }

    const response = await fetch("/__forms.html", requestOptions)

    if (!response.ok) {
    }
  }

  return (
    <form name="contact" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {/* Hidden input link required by Netlify. */}
      <input type="hidden" name="form-name" value="contact" />

      <div className="input-box relative">
        <input
          className="border border-gray rounded-md py-3 pl-3 w-full outline-none"
          type="text"
          {...register("name", { required: "Required field", maxLength: 80 })}
        />
        <label className="absolute left-0 px-4 py-3 pointer-events-none">Name</label>
        <p>{errors.name?.message}</p>
      </div>

      <div className="input-box relative">
        <input
          className="border border-gray rounded-md py-3 pl-3 w-full outline-none"
          type="text"
          {...register("email", {
            required: "Required field",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
          })}
        />
        <label className="absolute left-0 px-4 py-3 pointer-events-none">Email</label>
        <p>{errors.email?.message}</p>
      </div>

      <div className="input-box relative">
        <textarea
          className="border border-gray rounded-md min-h-24 py-3 pl-3 w-full outline-none"
          {...register("message", {
            required: "Required field",
            minLength: { value: 100, message: "Minimum message length is 100 characters" },
            maxLength: { value: 5000, message: "Maximum message length is 5000 characters" },
          })}
        />
        <label className="absolute left-0 px-4 py-3 pointer-events-none">Message</label>
        <p>{errors.message?.message}</p>
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
