"use client"

import { useState } from "react"
import DiscogsArtistResponse from "@/types/DiscogsArtistResponse"

export default function ArtistInfo({ artistInfo }: { artistInfo: DiscogsArtistResponse }) {
  const [showFullProfile, setShowFullProfile] = useState(false)

  const showFullProfileHandler = () => {
    setShowFullProfile(!showFullProfile)
  }

  const profileText = showFullProfile ? artistInfo?.profile : artistInfo?.profile?.slice(0, 500)

  return (
    <div className="release-details__artist-info">
      <p className="release-field">Artist Profile</p>
      <div>{profileText}</div>
      <button onClick={showFullProfileHandler}>Read {showFullProfile ? "Less" : "More"}</button>
    </div>
  )
}
