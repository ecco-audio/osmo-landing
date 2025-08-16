export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm">
            © 2024 Osmosis Technologies Inc
          </p>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://osmosis.fm/terms"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Terms of Use
            </a>
            <a 
              href="https://osmosis.fm/privacy"
              className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          <div>
            <a 
              href="https://deepgram.com/"
              className="inline-flex items-center space-x-2 bg-gray-300 hover:bg-gray-400 text-gray-700 text-sm px-4 py-2 rounded-full transition-colors"
            >
              <span>Powered by</span>
              <span className="font-semibold">Deepgram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}