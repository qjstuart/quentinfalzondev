import { Artist } from "./DiscogsCollectionItem"

type DiscogsRelease = {
  artists: Artist[]
  country: string
  genres: string[]
  images: Image[]
  labels: Label[]
  master_url: string
  styles: string[]
  title: string
  tracklist: Track[]
  year: number
}

type Image = {
  height: number
  resource_url: string
  type: string
  uri: string
  uri150: string
  width: number
}

type Label = {
  catno: string
  entity_type: string

  entity_type_name: string
  id: number
  name: string
  resource_url: string
}

type Track = {
  duration: string
  position: string
  title: string
  type_: string
}

export default DiscogsRelease