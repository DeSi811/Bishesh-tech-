const services = [
  {
    icon: "🌐",
    title: "Website Development",
    description: "Modern, fast, mobile-friendly websites for your business. Built to impress clients and rank on Google.",
  },
  {
    icon: "📈",
    title: "SEO Services",
    description: "Get found on Google by local customers. We optimize your website to rank higher in Nepal searches.",
  },
  {
    icon: "📱",
    title: "Social Media Management",
    description: "Consistent posting, branding, and engagement on Facebook and Instagram for your business.",
  },
  {
    icon: "🏫",
    title: "School Management System",
    description: "Digital systems for schools — online admissions, fee tracking, results, and notice boards.",
  },
  {
    icon: "🏥",
    title: "Clinic Booking System",
    description: "Let patients book appointments online. Digital records, doctor profiles, and clinic websites.",
  },
  {
    icon: "🍽️",
    title: "Restaurant Solutions",
    description: "Online menus, table booking, Google Business setup, and social media for restaurants and cafes.",
  },
]

export default function Services() {
  return (
    <section className="bg-[#0A0F1E] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-medium uppercase tracking-widest">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything your Nepal business needs to grow online — under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-orange-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}