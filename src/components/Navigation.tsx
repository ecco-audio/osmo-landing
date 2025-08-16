export default function Navigation() {
  return (
    <header className="bg-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="/img/Osmosis-logo-400.png"
                alt="Osmosis"
                width={140}
                height={36}
                className="h-9 w-auto"
              />
            </a>
          </div>

          {/* Dashboard Link */}
          <div>
            <a
              href="/dashboard"
              className="font-mono text-xs font-semibold text-white hover:text-secondary tracking-wider transition-colors uppercase"
            >
              DASHBOARD
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}