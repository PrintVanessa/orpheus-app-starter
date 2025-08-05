import React from "react"

export default function Stars() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <div className="absolute bg-white opacity-50 rounded-full w-1 h-1 animate-pulse"
        style={{ top: "20%", left: "30%" }} />
      <div className="absolute bg-white opacity-70 rounded-full w-1.5 h-1.5 animate-ping"
        style={{ top: "50%", left: "60%" }} />
      <div className="absolute bg-white opacity-40 rounded-full w-0.5 h-0.5"
        style={{ top: "70%", left: "10%" }} />
      <div className="absolute bg-white opacity-30 rounded-full w-0.5 h-0.5 animate-ping"
        style={{ top: "35%", left: "85%" }} />
      {/* Add more stars if needed */}
    </div>
  )
}
