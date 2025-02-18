"use client"

import { FaMagnifyingGlass } from "react-icons/fa6"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", "1")
    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="input-box flex items-center h-12 w-full rounded-md border border-gray-200">
      <div className="px-3 hover:cursor-pointer h-full place-content-center">
        <FaMagnifyingGlass className="size-[20px]" />
      </div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get("query")?.toString()}
        className="size-full outline-none rounded-md font-primary"
      />
    </div>
  )
}
