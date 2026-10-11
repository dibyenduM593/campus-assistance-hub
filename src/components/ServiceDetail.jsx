import React from "react"

// This component shows the details of whichever service is currently
// selected. It re-renders automatically whenever "service" (a prop
// coming from App's state) changes - that's the "dynamic interaction"
// the assignment asks for, no page reload / navigation needed.
function ServiceDetail({ service }) {
  // If nothing is selected yet, show a friendly placeholder instead
  if (!service) {
    return (
      <div className="service-detail empty">
        <p>👈 Select a service above to see its details here.</p>
      </div>
    )
  }

  return (
    <div className="service-detail">
      <h2>
        {service.icon} {service.name}
      </h2>
      <p className="detail-description">{service.description}</p>

      <div className="detail-grid">
        <div className="detail-item">
          <strong>📍 Location</strong>
          <span>{service.location}</span>
        </div>
        <div className="detail-item">
          <strong>🕒 Operating Hours</strong>
          <span>{service.hours}</span>
        </div>
        <div className="detail-item">
          <strong>✉️ Contact</strong>
          <span>{service.contact}</span>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
