"use client"

import { useEffect, useState } from "react"

export default function LocalTime({classes}: {classes: string}) {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")

      // Get timezone offset in minutes, convert to hours
      const timezoneOffset = -now.getTimezoneOffset() / 60
      const timezone = `UTC${timezoneOffset >= 0 ? `+${timezoneOffset}` : timezoneOffset}`

      setTime(`${hours}:${minutes} ${timezone}`)
    }

    updateTime()
     // Update time every minute
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  return <span className={classes}>{time}</span>
}
