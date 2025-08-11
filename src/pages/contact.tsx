export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 to-red-600 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">연락처</h1>

        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500/30 rounded-full flex items-center justify-center">
                  📧
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-red-200">your.email@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500/30 rounded-full flex items-center justify-center">
                  📱
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-red-200">+82 10-1234-5678</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500/30 rounded-full flex items-center justify-center">
                  🌐
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-red-200">github.com/yourusername</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500/30 rounded-full flex items-center justify-center">
                  💼
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-red-200">linkedin.com/in/yourprofile</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Send Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-white/20 rounded-lg border border-red-300/30 text-white placeholder-red-200"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-white/20 rounded-lg border border-red-300/30 text-white placeholder-red-200"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-white/20 rounded-lg border border-red-300/30 text-white placeholder-red-200"
              />
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
