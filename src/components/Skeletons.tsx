import { RELEASES_PER_PAGE } from "@/app/lib/utils"
import Vinyl404Logo from "./Vinyl404Logo"

export function ReleasesListSkeleton() {
  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {[...Array(RELEASES_PER_PAGE)].map((_, index) => (
        <li key={index}>
          <div className="flex justify-center items-center size-[200px] relative bg-gray/10 rounded-md">
            {" "}
            <Vinyl404Logo classes="size-[75%] animate-slowspin duration-[8s] origin-center" />
          </div>
        </li>
      ))}
    </ul>
  )
}
