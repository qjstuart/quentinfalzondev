export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <section className="grid md:grid-cols-2 gap-12 md:gap-24 items-start w-full p-8 mx-auto">
        <div>
          <h1 className="text-[40px] md:text-[45px] lg:text-[50px] tracking-tight leading-tight text-nowrap">
            Hi there! <br /> I&apos;m{" "}
            <span className="font-semibold font-secondary italic pb-3 inline-block">
              Quentin Falzon
            </span>
          </h1>
        </div>
        <div>
          <h2 className="md:text-[25px] lg:text-[30px] leading-10">A Web Developer based in Valletta, Malta</h2>
        </div>
      </section>
    </div>
  )
}
