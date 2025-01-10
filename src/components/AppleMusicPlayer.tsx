export default function AppleMusicPlayer() {
  return (
    <div className="h-[450px]">
      <iframe
        src={`https://embed.music.apple.com/us/album/1753073482`}
        allow="encrypted-media; fullscreen; clipboard-write;"
        className="size-full"
      ></iframe>
    </div>
  )
}
