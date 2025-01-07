import DiscogsRelease from "./DiscogsRelease"

type DiscogsResponse = {
  pagination: Pagination
  releases: DiscogsRelease[]
}

type Pagination = {
  page: number
  pages: number
  per_page: number
  items: number
  urls: PaginationUrls
}

type PaginationUrls = {
  first?: string
  next?: string
  prev?: string 
  last: string
}

export default DiscogsResponse
