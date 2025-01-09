import DiscogsCollectionItem from "./DiscogsCollectionItem"

type DiscogsCollectionItemsByFolderResponse = {
  pagination: Pagination
  releases: DiscogsCollectionItem[]
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

export default DiscogsCollectionItemsByFolderResponse
