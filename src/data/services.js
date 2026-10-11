// Sample / mock data for academic demonstration only.
// This does not represent official VIT service information.
// Each service object is what gets passed down as props to ServiceCard
// and ServiceDetail, so adding a 50th service later just means adding
// one more object here - no new component code needed.

const services = [
  {
    id: 1,
    name: "Academic Support",
    icon: "🎓",
    description:
      "Get help with course registration, credit transfers, academic advising, and exam-related queries.",
    location: "Academic Block 1, Ground Floor",
    hours: "9:00 AM - 5:00 PM (Mon - Fri)",
    contact: "academics@vit.ac.in",
  },
  {
    id: 2,
    name: "Library Services",
    icon: "📚",
    description:
      "Access the central library, digital journals, e-books, book renewals, and quiet study rooms.",
    location: "Central Library, VIT Vellore",
    hours: "8:00 AM - 10:00 PM (Mon - Sat)",
    contact: "library@vit.ac.in",
  },
  {
    id: 3,
    name: "Transportation",
    icon: "🚌",
    description:
      "Campus shuttle timings, hostel-to-academic-block routes, and outstation bus booking assistance.",
    location: "Transport Office, Gate 1",
    hours: "6:30 AM - 9:00 PM (Daily)",
    contact: "transport@vit.ac.in",
  },
  {
    id: 4,
    name: "Hostel Services",
    icon: "🏠",
    description:
      "Room allotment, maintenance requests, mess menu, and hostel warden contact information.",
    location: "Hostel Admin Block, Men's Hostel Block D",
    hours: "9:00 AM - 6:00 PM (Mon - Sat)",
    contact: "hostel@vit.ac.in",
  },
  {
    id: 5,
    name: "Health & Wellness",
    icon: "🩺",
    description:
      "On-campus medical center, counseling services, and emergency ambulance contact.",
    location: "Health Center, Near Main Gate",
    hours: "24 Hours (Emergency), 9 AM - 5 PM (OPD)",
    contact: "health@vit.ac.in",
  },
  {
    id: 6,
    name: "Technical Support",
    icon: "💻",
    description:
      "Wi-Fi connectivity issues, VIT student portal (VTOP) login problems, and lab computer support.",
    location: "IT Helpdesk, Technology Tower",
    hours: "9:00 AM - 6:00 PM (Mon - Fri)",
    contact: "ithelpdesk@vit.ac.in",
  },
]

export default services
