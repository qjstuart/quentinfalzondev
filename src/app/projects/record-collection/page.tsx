import DiscogRecord from "@/types/DiscogRecord"
import Image from "next/image"

export default async function RecordCollection() {
  const response = await fetch(
    `https://api.discogs.com/users/QJ_Stuart/collection/folders/0/releases?token=${process.env.DISCOGS_TOKEN}&per_page=100&sort=artist`,
    {
      headers: {
        "User-Agent":
          "QuentinFalzonRecordCollection/1.0 +https://github.com/qjstuart/quentinfalzondev",
      },
      next: { revalidate: 3600 },
    }
  )

  const data = await response.json()
  console.log("data", data)

  return (
    <>
      <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.releases.map((record: DiscogRecord) => (
          <li key={record.instance_id}>
            <div className="size-[180px] sm:size-[200px] relative">
              <Image
                fill
                sizes="(min-width: 375px) 150px, (min-width: 640px) 200px, 200px"
                src={record.basic_information.cover_image}
                alt={record.basic_information.title}
              />
            </div>
            {/* 
            <h3>{record.basic_information.title}</h3>
            <p>{record.basic_information.artists[0].name}</p>
            <p>{record.basic_information.year}</p>
            <p>{record.basic_information.genres.join(", ")}</p>
            <p>{record.basic_information.styles.join(", ")}</p>
            <p>{record.basic_information.formats[0].name}</p> */}
          </li>
        ))}
      </ul>
    </>
  )
}
