import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E]">
      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-16 px-6 text-center">
        <span className="text-orange-500 text-sm font-medium uppercase tracking-widest">About Us</span>
        <h1 className="text-5xl font-bold text-white mt-3 mb-4">
          We Are <span className="text-orange-500">Bishes Tech</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A Nepal-focused IT company helping local businesses grow online with modern technology.
        </p>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-gray-400 leading-relaxed">
            Bishes Tech was founded with one mission — to help Nepal's local businesses 
            compete in the digital world. We saw that thousands of schools, clinics, and 
            restaurants in Nepal had no online presence, no website, and no way to reach 
            customers digitally. We decided to change that.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: "Our Vision", text: "To become Nepal's most trusted digital partner for local businesses." },
            { title: "Our Mission", text: "Help Nepal businesses grow online with affordable, practical technology." },
            { title: "Our Values", text: "Honesty, quality, affordability, and long-term partnerships with clients." },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-orange-500 font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "3", label: "Industries Served" },
            { number: "100%", label: "Nepal Focused" },
            { number: "24/7", label: "Client Support" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-orange-500">{stat.number}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}