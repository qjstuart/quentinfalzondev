type DiscogsArtistResponse = {
  members?: Member[]
  profile?: string
  realname?: string
}

type Member = {
  name: string
}

export default DiscogsArtistResponse
