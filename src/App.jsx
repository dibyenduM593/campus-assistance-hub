import React from "react"
import Navbar from "./components/Navbar.jsx"
import ServiceList from "./components/ServiceList.jsx"
import ServiceDetail from "./components/ServiceDetail.jsx"
import Footer from "./components/Footer.jsx"
import services from "./data/services.js"

// App is written as a CLASS component (instead of a function component)
// specifically to demonstrate:
//   1. A constructor - used to set up initial state
//   2. A life-cycle method - componentDidMount()
// These are two of the required Module 6 concepts for this assignment.
class App extends React.Component {
  constructor(props) {
    super(props)

    // Initial state: no service selected yet, and the full
    // list of services loaded from our mock data file.
    this.state = {
      services: services,
      selectedService: null,
      isLoaded: false,
    }

    // Binding "this" so the method works correctly when passed
    // down to child components as a callback (onSelect).
    this.handleSelectService = this.handleSelectService.bind(this)
  }

  // LIFE-CYCLE METHOD: componentDidMount() runs once, right after
  // the component is first rendered to the page (mounted).
  // Here we use it to simulate an "initialization" step - for example,
  // this is where a real app would fetch services from a backend API.
  // We just log it and flip a flag so it's easy to show in React DevTools.
  componentDidMount() {
    console.log("App mounted - campus services loaded:", this.state.services.length)
    this.setState({ isLoaded: true })
  }

  // Regular method (part of the React Component API) that updates
  // state when a service card is clicked. Updating state here is
  // what causes ServiceDetail to re-render with new information,
  // without navigating to a different page.
  handleSelectService(service) {
    this.setState({ selectedService: service })
  }

  render() {
    const { services, selectedService } = this.state

    return (
      <div className="app">
        <Navbar />

        <main className="main-content">
          <section className="intro">
            <h2>Welcome to the Campus Assistance Hub</h2>
            <p>
              Explore VIT Vellore's campus services below. Click on any
              service card to view its details.
            </p>
          </section>

          <ServiceList
            services={services}
            selectedService={selectedService}
            onSelect={this.handleSelectService}
          />

          <ServiceDetail service={selectedService} />
        </main>

        <Footer />
      </div>
    )
  }
}

export default App
