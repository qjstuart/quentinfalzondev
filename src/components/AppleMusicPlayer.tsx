export default function AppleMusicPlayer({
  appleMusicId,
}: {
  appleMusicId: string
}) {
  return (
    <div className="h-[450px] max-w-[660px] w-full">
      <iframe
        className="size-full rounded-[15px]"
        src={`https://embed.music.apple.com/us/album/${appleMusicId}?theme=auto`}
        allow="encrypted-media; fullscreen; clipboard-write;"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        title="Media player"
      ></iframe>
    </div>
  )
}
