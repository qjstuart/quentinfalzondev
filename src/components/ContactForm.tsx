"use client"

import React from "react"
import { useForm } from "react-hook-form"

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

  async function onSubmit(formData: ContactFormInput) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    }
    console.log("formData: ", requestOptions.body)

    try {
      const response = await fetch("/public/__forms.html", requestOptions)
      console.log(response.headers.get("Content-Type"))
      const data = await response.json()
      console.log("data", data)
      console.log("data returned from POST request: ", data)
    } catch (error) {
      console.log("error:", error)
    }
  }
  console.log(errors)

  return (
    <form
      name="contact"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      data-netlify="true"
      method="POST"
    >
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
