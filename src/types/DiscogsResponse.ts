import DiscogsRecord from "./DiscogsRecord"

type DiscogsResponse = {
  pagination: Pagination
  releases: DiscogsRecord[]
}

type Pagination = {
  page: number
  pages: number
  per_page: number
  items: number
  urls: string
}
export default DiscogsResponse
