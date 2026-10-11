import React from "react"

// This is the REUSABLE component the assignment asks for.
// Instead of writing separate HTML/JSX for each of the 6 services,
// we write this ONE card component, and ServiceList calls it once
// per service (see ServiceList.jsx).
//
// It receives everything it needs as props:
// - service: the service object (name, icon, description...)
// - isActive: whether this card is the currently selected one
// - onSelect: a function (passed down from App) to run when clicked
function ServiceCard({ service, isActive, onSelect }) {
  return (
    <div
      className={"service-card" + (isActive ? " active" : "")}
      onClick={() => onSelect(service)}
    >
      <div className="service-icon">{service.icon}</div>
      <h3>{service.name}</h3>
      <p className="service-short-desc">{service.description}</p>
    </div>
  )
}

export default ServiceCard
