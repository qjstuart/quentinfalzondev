import { RELEASES_PER_PAGE } from "@/app/lib/utils"

export function ReleasesListSkeleton() {
  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {[...Array(RELEASES_PER_PAGE)].map((_, index) => (
        <li key={index}>
          <div className="size-[200px] relative bg-gray-200 rounded-md">
            Loading release...
          </div>
        </li>
      ))}
    </ul>
  )
}