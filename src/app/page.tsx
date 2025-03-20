import Button from "@/components/Button"
import Socials from "@/components/Socials"
import Image from "next/image"

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <section className="grid gap-8 md:gap-12 items-start w-full p-8 mx-auto">
        <Image src="/home-pic-zoomed.webp" alt="" width={130} height={130} className="rounded-full shadow-[0_0_120px_rgba(128,128,128,0.7)]"></Image>
        <div className="md:mb-8">
          <h1 className="text-[40px] md:text-[45px] lg:text-[50px] tracking-tight leading-tight text-nowrap">
            Hi there! <br /> I&apos;m{" "}
            <span className="font-semibold font-secondary italic pb-3 inline-block">
              Quentin Falzon.
            </span>
          </h1>
          <Socials />
        </div>
        <div>
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
