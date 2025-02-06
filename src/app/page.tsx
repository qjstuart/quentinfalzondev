import Button from "@/components/Button"
import Socials from "@/components/Socials"
import Link from "next/link"

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
      <section className="p-8 mt-14 mx-auto">
        <h2 className="text-[30px] mb-5">About Me</h2>
        <div className="flex flex-col gap-4 text-xl">
          <p>
            For as long as I can remember, I&apos;ve always been excited about building things. At a
            young age this meant getting my hands on as many Bionicle sets as I could, or borrowing
            the kitchenware to build the ultimate drum kit. Fast-forward to now, and I am still very
            much the same. Since discovering the world of coding and its endless possibilities, I
            have consistently found great enjoyment in designing and creating web-based solutions.
          </p>
          <p>
            I have been fortunate to contribute to a variety of projects in the industries of
            blockchain, payroll, and most recently <span className="text-nowrap">e-commerce</span>{" "}
            with{" "}
            <Link href="https://www.cs-technologies.net/" target="_blank" className="underline">
              CS Technologies.
            </Link>{" "}
            There I was responsible for developing the frontend UI on one project, and also worked
            across the full-stack on a custom CMS that allows for easy management of site content
            and performs at scale (thousands of daily orders).
          </p>

          <p>
            {" "}
            Technologies I have worked with involve the web foundations HTML, CSS and
            JavaScript/TypeScript, React as a JavaScript framework TBC
          </p>

          <p>
            {" "}
            Outside of the realm of coding your best chances of finding me are at the tennis court,
            the gym, or on a sound system spinning some of my{" "}
            <Link href="/projects/record-collection/about" target="_blank" className="underline">
              favourite tunes
            </Link>
            . However, if you do wish to get in touch it&apos;s probably easiest to email me through the
            contact form!
          </p>
        </div>
      </section>
    </div>
  )
}
