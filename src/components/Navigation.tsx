import { useAuth } from '../lib/useAuth'

export default function Navigation() {
  const { isAuthenticated, user, isLoading } = useAuth()

  return (
    <header className="bg-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Left: Logo */}
          <div className="flex-1">
            <a href="/" className="flex items-center">
              <img
                src="/_image/Osmosis-logo-400.png"
                alt="Osmosis"
                width={140}
                height={36}
                className="h-8 w-auto sm:h-9"
              />
            </a>
          </div>
          
          {/* Center: Main Navigation - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex items-center space-x-8">
              <a
                href="https://solutions.osmosis.fm"
                className="font-mono font-normal hover:text-secondary tracking-wider transition-colors uppercase"
                style={{
                  fontSize: '12px',
                  lineHeight: '17px',
                  color: 'rgb(244, 243, 239)',
                  fontWeight: 400
                }}
                onClick={() => {
                  // Track navigation click
                  if (typeof window !== 'undefined' && (window as any).posthog) {
                    (window as any).posthog.capture('nav_clicked', {
                      nav_item: 'solutions',
                      destination_url: 'https://solutions.osmosis.fm',
                      is_authenticated: isAuthenticated
                    })
                  }
                }}
              >
                SOLUTIONS
              </a>
              <a
                href="/osmosis-faq"
                className="font-mono font-normal hover:text-secondary tracking-wider transition-colors uppercase"
                style={{
                  fontSize: '12px',
                  lineHeight: '17px',
                  color: 'rgb(244, 243, 239)',
                  fontWeight: 400
                }}
                onClick={() => {
                  // Track navigation click
                  if (typeof window !== 'undefined' && (window as any).posthog) {
                    (window as any).posthog.capture('nav_clicked', {
                      nav_item: 'faq',
                      destination_url: '/osmosis-faq',
                      is_authenticated: isAuthenticated
                    })
                  }
                }}
              >
                FAQ
              </a>
            </nav>
          </div>

          {/* Mobile: Compact Navigation - Shown only on mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <a
              href="https://solutions.osmosis.fm"
              className="font-mono font-normal hover:text-secondary tracking-wider transition-colors uppercase text-xs"
              style={{
                color: 'rgb(244, 243, 239)',
                fontWeight: 400
              }}
              onClick={() => {
                // Track navigation click
                if (typeof window !== 'undefined' && (window as any).posthog) {
                  (window as any).posthog.capture('nav_clicked', {
                    nav_item: 'solutions',
                    destination_url: 'https://solutions.osmosis.fm',
                    is_authenticated: isAuthenticated
                  })
                }
              }}
            >
              SOLUTIONS
            </a>
            <a
              href="/osmosis-faq"
              className="font-mono font-normal hover:text-secondary tracking-wider transition-colors uppercase text-xs"
              style={{
                color: 'rgb(244, 243, 239)',
                fontWeight: 400
              }}
              onClick={() => {
                // Track navigation click
                if (typeof window !== 'undefined' && (window as any).posthog) {
                  (window as any).posthog.capture('nav_clicked', {
                    nav_item: 'faq',
                    destination_url: '/osmosis-faq',
                    is_authenticated: isAuthenticated
                  })
                }
              }}
            >
              FAQ
            </a>
          </div>

          {/* Right: Auth CTA */}
          <div className="flex-1 md:flex-1 flex justify-end items-center">
            
            {!isLoading && (
              <>
                {isAuthenticated ? (
                  <>
                    {/* Dashboard Button */}
                    <a
                      href="https://osmosis.fm/home"
                      className="cta-button inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl bg-secondary shadow-lg hover:shadow-xl uppercase text-xs sm:text-sm"
                      onClick={() => {
                        // Track dashboard click
                        if (typeof window !== 'undefined' && (window as any).posthog) {
                          (window as any).posthog.capture('nav_clicked', {
                            nav_item: 'dashboard',
                            destination_url: 'https://osmosis.fm/home',
                            is_authenticated: true
                          })
                        }
                      }}
                    >
                      DASHBOARD
                    </a>
                  </>
                ) : (
                  <>
                    {/* Sign In Button */}
                    <a
                      href="https://osmosis.fm/enter"
                      className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 transition-all uppercase font-mono font-medium shadow-sm hover:shadow-md text-xs sm:text-sm"
                      style={{
                        fontSize: '13px',
                        lineHeight: '18px'
                      }}
                      onClick={() => {
                        // Track sign in click
                        if (typeof window !== 'undefined' && (window as any).posthog) {
                          (window as any).posthog.capture('nav_clicked', {
                            nav_item: 'sign_in',
                            destination_url: 'https://osmosis.fm/enter',
                            is_authenticated: false
                          })
                        }
                      }}
                    >
                      SIGN IN
                    </a>
                  </>
                )}
              </>
            )}
            
            {/* Loading state */}
            {isLoading && (
              <div 
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl bg-white/5 text-white/30 border border-white/10 font-mono font-medium text-xs sm:text-sm"
                style={{
                  fontSize: '13px',
                  lineHeight: '18px'
                }}
              >
                ...
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}