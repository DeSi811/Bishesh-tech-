export default function Contact() {
  return (
    <section className="bg-[#060B18] py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-medium uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Start Your Project Today
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tell us about your business and we will get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Your Name</label>
              <input
                type="text"
                placeholder="Ramesh Shrestha"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Email Address</label>
              <input
                type="email"
                placeholder="ramesh@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Phone Number</label>
              <input
                type="text"
                placeholder="98XXXXXXXX"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Service */}
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Service Needed</label>
              <select className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-orange-500 transition-colors">
                <option>Website Development</option>
                <option>SEO Services</option>
                <option>Social Media Management</option>
                <option>School Management System</option>
                <option>Clinic Booking System</option>
                <option>Restaurant Solutions</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="text-gray-400 text-sm mb-2 block">Your Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your business and what you need..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
              />
            </div>

          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 rounded-lg transition-colors text-lg">
              Send Message →
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-gray-500 text-xs mb-1">Email</p>
              <p className="text-white text-sm">hello@bishestech.com</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Phone</p>
              <p className="text-white text-sm">+977 98XXXXXXXX</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Location</p>
              <p className="text-white text-sm">Kathmandu, Nepal</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}