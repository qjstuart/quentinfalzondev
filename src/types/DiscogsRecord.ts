type DiscogsRecord = {
  id: number
  instance_id: number
  date_added: string
  rating: 0
  basic_information: BasicInformation
}

type BasicInformation = {
  artists: Artist[]
  cover_image: string
  formats: Formats[]
  genres: string[]
  id: number
  // ?labels: Label[]
  // ?master_id: number
  master_url: string
  resource_url: string
  styles: string[]
  thumb: string
  title: string
  year: number
}

export type Artist = {
  anv: string
  id: string
  join: string
  name: string
  resource_url: string
  role: string
  tracks: string
}

type Formats = {
  descriptions: string[]
  name: string
  qty: string
}

export default DiscogsRecord
