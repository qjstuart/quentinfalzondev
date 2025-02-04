import Link from "next/link"

export default function Button({
  classes,
  text,
  href = "",
}: {
  classes: string
  text: string
  href: string
}) {
  return (
    <Link
      href={href}
      className={`py-2 px-2 flex-1 rounded-md text-center text-nowrap text-md transition-colors duration-300 ${classes}`}
    >
      {text}
    </Link>
  )
}
