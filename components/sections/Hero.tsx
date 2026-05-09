export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0A0F1E] flex items-center justify-center px-6 pt-24">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-gray-400 text-sm">Nepal's Modern Tech Partner</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          We Build Digital
          <span className="text-orange-500"> Solutions </span>
          For Nepal
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Bishes Tech helps schools, clinics, and restaurants in Nepal grow online
          with modern websites, SEO, and smart technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-lg transition-colors w-full sm:w-auto text-center">
            Start Your Project
          </a>
          <a href="/portfolio" className="border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-lg transition-colors w-full sm:w-auto text-center">
            View Our Work
          </a>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
          <span>✓ 100% Nepal Focused</span>
          <span>✓ Affordable Pricing</span>
          <span>✓ Fast Delivery</span>
          <span>✓ Ongoing Support</span>
        </div>

      </div>
    </section>
  )
}