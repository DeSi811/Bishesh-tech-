import type { Metadata } from "next"
import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"

export const metadata: Metadata = {
  title: "Our Portfolio",
  description: "See real projects delivered by Bishesh Tech for restaurants, schools, clinics and hotels across Nepal.",
  alternates: { canonical: "/portfolio" },
}

const projects = [
  {
    title: "Restaurant Website",
    client: "Shrestha Restaurant, Kathmandu",
    category: "Restaurant",
    description: "Modern website with online menu, Google Business setup, and social media management.",
    tags: ["Website", "SEO", "Google Business"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "School Management System",
    client: "Bright Future School, Pokhara",
    category: "Education",
    description: "Complete school website with online admissions, fee tracking, and digital notice board.",
    tags: ["Website", "School System", "Online Admissions"],
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Clinic Booking System",
    client: "Thapa Clinic, Lalitpur",
    category: "Healthcare",
    description: "Doctor profile website with online appointment booking and patient management.",
    tags: ["Website", "Booking System", "SEO"],
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Cafe Digital Presence",
    client: "Mountain Cafe, Pokhara",
    category: "Restaurant",
    description: "Instagram management, Google Business setup, and digital menu for a popular cafe.",
    tags: ["Social Media", "Google Business", "Branding"],
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Hotel Website",
    client: "Himalaya Hotel, Kathmandu",
    category: "Hospitality",
    description: "Professional hotel website with room booking, photo gallery, and SEO optimization.",
    tags: ["Website", "Booking", "SEO"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Coaching Center Website",
    client: "Success Academy, Biratnagar",
    category: "Education",
    description: "Website with course listings, online enrollment form, and results section.",
    tags: ["Website", "Lead Generation", "SEO"],
    color: "from-teal-500/20 to-blue-500/20",
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E]">
      <Navbar />

      <div className="pt-32 pb-16 px-6 text-center">
        <span className="text-orange-500 text-sm font-medium uppercase tracking-widest">Our Work</span>
        <h1 className="text-5xl font-bold text-white mt-3 mb-4">
          Our <span className="text-orange-500">Portfolio</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Real projects we have delivered for Nepal businesses.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 group"
            >
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">{project.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-orange-500 text-xs mb-3">{project.client}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}