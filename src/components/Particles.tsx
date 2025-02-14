"use client"

import { Container, ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useState, useEffect, useMemo } from "react"

export default function MyParticles({ classes }: { classes: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setMounted(true)
    })
  }, [])

  // This function runs when the Particles container loads
  async function particlesLoaded(container?: Container): Promise<void> {
    console.log("New container: ", container)
  }

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      particles: {
        color: {
          value: "#808080",
        },
        links: {
          color: "#808080",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 50,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 3, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  )

  if (!mounted) {
    return <></>
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className={classes}
    />
  )
}
