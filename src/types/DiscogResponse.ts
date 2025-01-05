import DiscogRecord from "./DiscogRecord"

type DiscogResponse = {
  pagination: Pagination
  releases: DiscogRecord[]
}

type Pagination = {
  page: number
  pages: number
  per_page: number
  items: number
  urls: any
}
export default DiscogResponse
