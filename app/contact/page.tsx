import type { Metadata } from "next"
import Navbar from "@/components/sections/Navbar"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Bishesh Tech. We are ready to help your Nepal business grow online.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E]">
      <Navbar />
      <div className="pt-32 pb-4 px-6 text-center">
        <span className="text-orange-500 text-sm font-medium uppercase tracking-widest">Get In Touch</span>
        <h1 className="text-5xl font-bold text-white mt-3 mb-4">
          Contact <span className="text-orange-500">Us</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Ready to grow your business online? Let's talk!
        </p>
      </div>
      <Contact />
      <Footer />
    </main>
  )
}