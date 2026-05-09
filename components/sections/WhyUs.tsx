const reasons = [
  {
    number: "01",
    title: "Nepal Market Experts",
    description: "We understand Nepal's business culture, local needs, and what works for Nepali customers online.",
  },
  {
    number: "02",
    title: "Affordable Pricing",
    description: "Professional quality at prices that make sense for Nepal businesses. No hidden charges, ever.",
  },
  {
    number: "03",
    title: "Fast Delivery",
    description: "We deliver your website quickly so you can start getting customers online without long waits.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "We don't disappear after delivery. We support you as your business grows digitally.",
  },
]

export default function WhyUs() {
  return (
    <section className="bg-[#060B18] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-medium uppercase tracking-widest">Why Bishes Tech</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Why Businesses Choose Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We are not just developers. We are your digital growth partner in Nepal.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/40 transition-all duration-300"
            >
              <span className="text-orange-500 font-bold text-3xl">{reason.number}</span>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}