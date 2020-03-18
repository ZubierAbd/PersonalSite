import React from "react"

const TechCard = ({ data }) => {
  const name = data.name
  const icon = data.icon
  return (
    <div>
      <span>{icon}</span>
    </div>
  )
}

export default TechCard
