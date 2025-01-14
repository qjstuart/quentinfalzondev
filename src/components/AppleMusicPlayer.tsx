export default function AppleMusicPlayer({ appleMusicId }: { appleMusicId: string }) {
  return (
    <div className="">
      <iframe
        className="rounded-[15px]"
        width="100%"
        height="450"
        src={`https://embed.music.apple.com/us/album/${appleMusicId}?theme=auto`}
        allow="encrypted-media; fullscreen; clipboard-write;"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        title="Media player"
      ></iframe>
    </div>
  )
}
