"use client"

import { Container, ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useState, useEffect, useMemo } from "react"

export default function MyParticles({ classes }: { classes: string }) {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  async function particlesLoaded(container?: Container): Promise<void> {
    console.log(container)
  }

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        // color: {
        //   value: "#0d47a1",
        // },
      },
      fpsLimit: 120,
      interactivity: {
        // events: {
        //   onClick: {
        //     enable: true,
        //     mode: "push",
        //   },
        //   onHover: {
        //     enable: true,
        //     mode: "repulse",
        //   },
        // },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  )

  if (!init) {
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
