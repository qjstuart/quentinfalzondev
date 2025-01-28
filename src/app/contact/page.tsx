"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
import Link from "next/link"

type ContactFormData = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit } = useForm<ContactFormData>({
    shouldUseNativeValidation: true,
  })

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
    } else {
      setSubmitted(true)
    }
  }

  return (
    <>
      {!submitted && (
        <>
          <section className="mx-auto mt-12">
            <h1 className="text-center pb-8">Get In Touch</h1>
            <h2 className="text-center pb-6">
              Let&apos;s start working together! My inbox is always open.
            </h2>
          </section>
          <form
            name="contact"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 max-w-[800px] w-full mx-auto"
          >
            {/* Hidden input link required by Netlify. */}
            <input type="hidden" name="form-name" value="contact" />

            <div className="input-box relative">
              <input
                placeholder=""
                className="border border-gray rounded-md p-3 w-full outline-none"
                type="text"
                {...register("name", { required: "Required field", maxLength: 80 })}
              />
              <label className="absolute left-0 px-4 py-3 pointer-events-none">Name</label>
            </div>

            <div className="input-box relative">
              <input
                placeholder=""
                className="border border-gray rounded-md p-3 w-full outline-none"
                type="text"
                {...register("email", {
                  required: "Required field",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
                })}
              />
              <label className="absolute left-0 px-4 py-3 pointer-events-none">Email</label>
            </div>

            <div className="input-box relative">
              <textarea
                placeholder=""
                className="border border-gray rounded-md min-h-24 p-3 w-full outline-none"
                {...register("message", {
                  required: "Required field",
                  maxLength: { value: 5000, message: "Maximum message length is 5000 characters" },
                })}
              />
              <label className="absolute left-0 px-4 py-3 pointer-events-none">Message</label>
            </div>

            <button
              className="mx-auto mt-3 px-6 py-2 text-lg rounded-2xl bg-green-500 hover:bg-green-900 transition duration-300"
              type="submit"
            >
              <p className="text-white">Submit</p>
            </button>
          </form>
        </>
      )}
      {submitted && (
        <>
          <section className="mx-auto h-full mt-12">
            <h1 className="text-center pb-8">Thank you!</h1>
            <h2 className="text-center pb-6">
              Your message has been sent, I will get back to you soon.
            </h2>
            <div className="flex justify-center">
              <Link href="/">
                <button
                  className="mt-3 px-6 py-2 text-lg rounded-2xl bg-foreground hover:bg-foreground/60 transition-colors"
                  type="button"
                >
                  <p className="text-background">Back to homepage</p>
                </button>
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  )
}
