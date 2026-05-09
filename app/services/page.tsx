import type { Metadata } from "next"
import Navbar from "@/components/sections/Navbar"
import Services from "@/components/sections/Services"
import Footer from "@/components/sections/Footer"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Bishesh Tech offers website development, SEO, social media management, school systems, clinic booking, and restaurant solutions in Nepal.",
  alternates: { canonical: "/services" },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E]">
      <Navbar />
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Our <span className="text-orange-500">Services</span></h1>
        <p className="text-gray-400 text-lg">Everything your Nepal business needs to grow online.</p>
      </div>
      <Services />
      <Footer />
    </main>
  )
}