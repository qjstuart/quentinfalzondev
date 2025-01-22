"use client"

import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"

type ContactFormInput = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInput>()

  const onSubmit: SubmitHandler<ContactFormInput> = (data) => console.log(data)
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
      <input type="submit" />
    </form>
  )
}
