export function ReleasesListSkeleton() {
  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {[...Array(200)].map((_, index) => (
        <li key={index}>
          <div className="size-[200px] relative bg-gray-200 rounded-md">
            OWOWOWOWOWO
          </div>
        </li>
      ))}
    </ul>
  )
}