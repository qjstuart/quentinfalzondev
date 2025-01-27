export default function Footer({ classes }: { classes: string }) {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className={`${classes} flex justify-center pb-8`}>
        <div className="text-gray">
          <em>&#169; </em>
          <em>{currentYear} Quentin Falzon</em>
          {/* <em>All Rights Reserved.</em> */}
        </div>
      </footer>
    </>
  )
}
