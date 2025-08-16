import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  return (
    <header className="bg-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/img/Osmosis-logo-400.png"
                alt="Osmosis"
                width={140}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
          </div>

          {/* Dashboard Link */}
          <div>
            <Link
              href="/dashboard"
              className="font-mono text-xs font-semibold text-white hover:text-secondary tracking-wider transition-colors uppercase"
            >
              DASHBOARD
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}