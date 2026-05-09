export default function Footer() {
  return (
    <footer className="bg-[#060B18] border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-3">
              Bishesh<span className="text-orange-500">Tech</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Nepal's trusted digital partner for schools, clinics, and restaurants.
              We help local businesses grow online with modern technology.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 transition-all text-sm">f</a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 transition-all text-sm">in</a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 transition-all text-sm">ig</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {["Website Development", "SEO Services", "Social Media", "School Systems", "Clinic Systems", "Restaurant Solutions"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Portfolio", "Testimonials", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 BisheshTech. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ in Nepal
          </p>
        </div>

      </div>
    </footer>
  )
}