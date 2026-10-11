import React from "react"
import ServiceCard from "./ServiceCard.jsx"

// ServiceList's only job is to loop over the "services" array
// and render one <ServiceCard /> per item.
//
// This is the key idea behind the HOTS answer: if the number of
// services grows from 5 to 50, this component and ServiceCard
// don't change at all - only the services.js data file grows.
function ServiceList({ services, selectedService, onSelect }) {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          isActive={selectedService && selectedService.id === service.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

export default ServiceList
