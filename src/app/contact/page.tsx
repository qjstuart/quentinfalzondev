import ContactForm from "@/components/ContactForm"

export default function page() {
  return (
    <section className="mx-auto h-full mt-12">
      <h1 className="text-center pb-8">Get In Touch</h1>
      <h2 className="text-center pb-6">
        Let&apos;s start working together! My inbox is always open.
      </h2>
      {/* A little help for the Netlify post-processing bots */}
      {/* <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="text" name="email" />
        <textarea name="message"></textarea>
      </form> */}
      <ContactForm />
    </section>
  )
}
