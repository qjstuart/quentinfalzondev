import Link from "next/link"
import Image from "next/image"
import MyTooltip from "@/components/MyTooltip"
import { IoIosInformationCircleOutline } from "react-icons/io"

export default function About() {
  return (
    <div className="max-w-[1024px] mx-auto">
      <h1 className="text-center mb-8">About Me</h1>
      <section className="flex flex-col gap-8 text-md sm:text-xl my-8 sm:my-12">
        {/* Paragraph 1 */}
        <div>
          For as long as I can remember, I&apos;ve always been excited about building things. At a
          young age this meant getting my hands on as many Bionicle
          <span className="inline-flex">
            <IoIosInformationCircleOutline className="anchor-bionicle inline outline-none size-[20px]" />
          </span>{" "}
          <MyTooltip anchorSelect=".anchor-bionicle" place="top-start" fontSize="1rem">
            An <span className="italic">awesome</span> series by Lego started in 2002 and retired in
            2016.
          </MyTooltip>{" "}
          sets as I could, or borrowing the kitchenware to build myself the ultimate drum kit.
          Fast-forward to now, and I am still very much the same. Since discovering the world of
          coding and its endless possibilities, I have consistently found great enjoyment in
          designing and creating web-based solutions.
        </div>
        {/* Paragraph 2 */}
        <div>
          I have been fortunate to contribute to a variety of projects in the industries of
          blockchain, payroll, and most recently <span className="text-nowrap">e-commerce</span> at{" "}
          <Link href="https://www.cs-technologies.net/" target="_blank" className="underline">
            <span className="text-nowrap">CS Technologies.</span>
          </Link>{" "}
          There I was responsible for developing the frontend UI on one project, and also worked
          across the full-stack on a custom CMS that allows for easy management of site content and
          performs at scale (thousands of daily orders).
        </div>
      </section>

      {/* Technologies section */}
      <h2 className="mb-4">Technologies I Use</h2>
      {/* <section className="flex flex-wrap gap-4"> */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(70px,1fr))] gap-y-4 py-3">
        {/* HTML */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-html.png" alt="HTML" fill className="object-contain" />
          </div>
          <span className="text-sm">HTML</span>
        </div>

        {/* CSS */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-css.png" alt="CSS" fill className="object-contain" />
          </div>
          <span className="text-sm">CSS</span>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-javascript.png" alt="JavaScript" fill className="object-contain" />
          </div>
          <span className="text-sm">JavaScript</span>
        </div>

        {/* React */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-react.png" alt="React" fill className="object-contain" />
          </div>
          <span className="text-sm">React</span>
        </div>

        {/* NextJS */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-nextjs.svg" alt="NextJS" fill className="object-contain" />
          </div>
          <span className="text-sm">NextJS</span>
        </div>

        {/* Netlify */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-netlify.svg" alt="Netlify" fill className="object-contain" />
          </div>
          <span className="text-sm">Netlify</span>
        </div>

        {/* Tailwind */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-tailwind.svg" alt="Tailwind" fill className="object-contain" />
          </div>
          <span className="text-sm">Tailwind</span>
        </div>

        {/* Sass */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-sass.png" alt="Sass" fill className="object-contain" />
          </div>
          <span className="text-sm">Sass</span>
        </div>

        {/* NodeJS */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-nodejs.png" alt="NodeJS" fill className="object-contain" />
          </div>
          <span className="text-sm">NodeJS</span>
        </div>

        {/* .NET */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-dotnet.png" alt="Microsoft .NET Core" fill className="object-contain" />
          </div>
          <span className="text-sm">.NET Core</span>
        </div>
      </section>

      <h2 className="mt-8">Outside of Coding</h2>
      <div>
        {" "}
        Outside the realm of coding your best chances of finding me are at the tennis court, the
        gym, or at a sound system spinning some of my{" "}
        <Link href="/projects/record-collection/about" target="_blank" className="underline">
          favourite tunes
        </Link>
        . However, if you wish to get in touch it&apos;s easiest to email me through the contact
        form!
      </div>
    </div>
  )
}
