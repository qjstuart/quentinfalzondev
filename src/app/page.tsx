import Button from "@/components/Button"
import Socials from "@/components/Socials"

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <section className="grid md:grid-cols-2 gap-12 md:gap-24 items-start w-full p-8 mx-auto">
        <div>
          <h1 className="text-[40px] md:text-[45px] lg:text-[50px] tracking-tight leading-tight text-nowrap">
            Hi there! <br /> I&apos;m{" "}
            <span className="font-semibold font-secondary italic pb-3 inline-block">
              Quentin Falzon.
            </span>
          </h1>
          <Socials />
        </div>
        <div className="">
          <h2 className="md:text-[25px] lg:text-[30px] leading-8 lg:leading-10 pb-2">
            A Web Developer based in Valletta, Malta.
          </h2>
          <p className="text-gray text-lg">
            Passionate about crafting good experiences on the web.
          </p>
          <div className="flex justify-start gap-6 mt-10">
            <Button
              classes="bg-foreground text-background hover:bg-[rgba(var(--foreground),0.75)]"
              text="View My Work"
              href="/projects"
            />
            <Button
              classes="bg-background text-foreground border border-foreground hover:bg-[rgba(var(--foreground),0.15)]"
              text="Get In Touch"
              href="/contact"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
