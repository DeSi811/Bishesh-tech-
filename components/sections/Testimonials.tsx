export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Shrestha",
      business: "Shrestha Restaurant, Kathmandu",
      review: "Bishes Tech built our restaurant website in just one week. Now customers find us on Google and our online orders have increased a lot!",
      avatar: "RS",
    },
    {
      name: "Sunita Adhikari",
      business: "Bright Future School, Pokhara",
      review: "Our school now has a professional website with online admissions. Parents are very impressed. Highly recommend Bishes Tech!",
      avatar: "SA",
    },
    {
      name: "Dr. Bikash Thapa",
      business: "Thapa Clinic, Lalitpur",
      review: "Patients can now book appointments online. My clinic looks very professional and I get new patients through Google every week.",
      avatar: "BT",
    },
  ]

  return (
    <section className="bg-[#0A0F1E] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-medium uppercase tracking-widest">Client Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Real results from real Nepal businesses who trusted Bishes Tech.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/40 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-500 text-sm">★</span>
                ))}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}