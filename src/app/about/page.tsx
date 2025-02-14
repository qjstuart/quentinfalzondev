import Link from "next/link"
import Image from "next/image"
import MyTooltip from "@/components/MyTooltip"
import { IoIosInformationCircleOutline } from "react-icons/io"

export default function About() {
  return (
    <div className="max-w-[1024px] mx-auto">
      <h1 className="text-center mb-8">About Me</h1>
      <section className="flex flex-col gap-8 text-base sm:text-xl my-8 sm:my-12">
        {/* Paragraph 1 */}
        <div>
          For as long as I can remember, I&apos;ve always been excited about building things. At a
          young age this meant getting my hands on as many{" "}
          <span className="inline-flex">
            Bionicle
            <IoIosInformationCircleOutline className="anchor-bionicle inline outline-none size-[20px]" />
          </span>{" "}
          <MyTooltip anchorSelect=".anchor-bionicle" place="top-start" fontSize="0.8rem">
            An <span className="italic">awesome</span> series by Lego <br /> started in 2002 and
            retired in 2016.
          </MyTooltip>{" "}
          sets as I could, or borrowing the kitchenware to build myself the ultimate drum kit.
          Fast-forward to now, and I am still very much the same. Since discovering the world of
          coding and its endless possibilities, I have consistently found great enjoyment in
          designing and creating web-based solutions.
        </div>
        {/* Paragraph 2 */}
        <div>
          So far I have been fortunate to contribute to a variety of projects in the industries of
          blockchain, payroll, and most recently <span className="text-nowrap">e-commerce</span> at{" "}
          <Link href="https://www.cs-technologies.net/" target="_blank" className="underline">
            <span className="text-nowrap">CS Technologies.</span>
          </Link>{" "}
          There I was responsible for developing the frontend UI on one project, and also worked
          across the full-stack on a custom Content Management System (CMS) that allows for easy
          management of site content and performs at scale (thousands of daily orders).
        </div>

        {/* Paragraph 3 */}
        <div>
          Currently I am working as a freelancer with a focus on the front-end. Specifically, I am
          getting familiar with the{" "}
          <Link href="https://jamstack.org/" className="underline" target="_blank">
            JAMstack
          </Link>
          . It stands for JavaScript, APIs and Markup. Briefly, the JAM philosophy strives for the
          following:
          <ul>
            <li>Separation between building and hosting </li>
            <li>Separation between the front-end and back-end</li>
            <li>Use of APIs rather than databases</li>
            <li>
              Front-load with as much static markup as possible, then enhance with JavaScript or
              Single Page Application (SPA) elements e.g. React Components
            </li>
          </ul>
        </div>
      </section>

      {/* Technologies section */}
      <h2 className="mb-4">Technologies I Use</h2>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(70px,1fr))] gap-y-4 pt-3 mb-12 text-sm">
        {/* HTML */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-html.png" alt="HTML" fill className="object-contain" />
          </div>
          <span>HTML</span>
        </div>

        {/* CSS */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-css.png" alt="CSS" fill className="object-contain" />
          </div>
          <span>CSS</span>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-javascript.png" alt="JavaScript" fill className="object-contain" />
          </div>
          <span>JavaScript</span>
        </div>

        {/* TypeScript */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-typescript.png" alt="TypeScript" fill className="object-contain" />
          </div>
          <span>TypeScript</span>
        </div>

        {/* React */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-react.png" alt="React" fill className="object-contain" />
          </div>
          <span>React</span>
        </div>

        {/* NextJS */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-nextjs.svg" alt="NextJS" fill className="object-contain" />
          </div>
          <span>NextJS</span>
        </div>

        {/* 11ty */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-eleventy.png" alt="11ty (Eleventy)" fill className="object-contain" />
          </div>
          <span>11ty</span>
        </div>

        {/* Nunjucks */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-nunjucks.svg" alt="Nunjucks" fill className="object-contain" />
          </div>
          <span>Nunjucks</span>
        </div>

        {/* Netlify */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-netlify.svg" alt="Netlify" fill className="object-contain" />
          </div>
          <span>Netlify</span>
        </div>

        {/* Tailwind */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-tailwind.svg" alt="Tailwind" fill className="object-contain" />
          </div>
          <span>Tailwind</span>
        </div>

        {/* Sass */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-sass.png" alt="Sass" fill className="object-contain" />
          </div>
          <span>Sass</span>
        </div>

        {/* NodeJS */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image src="/logo-nodejs.png" alt="NodeJS" fill className="object-contain" />
          </div>
          <span>NodeJS</span>
        </div>

        {/* .NET */}
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="relative size-[40px]">
            <Image
              src="/logo-dotnet.png"
              alt="Microsoft .NET Core"
              fill
              className="object-contain"
            />
          </div>
          <span>.NET Core</span>
        </div>
      </section>
      <p className="text-md sm:text-xl">
        This is a non-exhaustive list of technologies I work with most often
      </p>

      <section className="text-md sm:text-xl my-8 sm:my-12">
        <h2 className="mb-4">Outside of Coding</h2>
        <div>
          {" "}
          Outside the realm of coding your best chances of finding me are on a tennis court, at a gym, or
          at a sound system spinning some of my{" "}
          <Link href="/projects/record-collection/about" target="_blank" className="text-sky-500">
            favourite tunes
          </Link>
          . However, if you wish to get in touch it&apos;s easiest to email me through the contact
          form!
        </div>
      </section>
    </div>
  )
}
