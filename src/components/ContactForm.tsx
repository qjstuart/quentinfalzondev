"use client"

import { redirect } from "next/navigation"
import { useState } from "react"
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

    if (!response.ok) {
      console.log("response not OK")
    }
  }

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

function SuccessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}
function ErrorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}
