import React, { useEffect } from "react"
import { useLyreEcho } from "../hooks/useLyreEcho"

export default function OrpheusScene() {
  const presence = useLyreEcho()

  useEffect(() => {
    if (presence === "expanding") {
      const audio = new Audio("/lyre-awakened.mp3")
      audio.volume = 0.6
      audio.play().catch((err) => {
        console.warn("Audio playback blocked:", err)
      })
    }
  }, [presence])

  return (
    <div className="mb-10 text-center">
      {presence === "rooted" && (
        <p className="text-gray-400 italic transition-opacity duration-1000 opacity-100">
          The air is still... waiting.
        </p>
      )}
      {presence === "expanding" && (
        <p className="text-echoPink font-semibold text-xl animate-typewriter border-echoPink">
          The Lyre has awakened — your words will echo beyond silence.
        </p>
      )}
    </div>
  )
}

