import { useAuth } from '../lib/useAuth'

export default function Navigation() {
  const { isAuthenticated, user, isLoading } = useAuth()

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

          {/* Auth-based Navigation */}
          <div className="flex items-center space-x-6">
            {/* Solutions Link */}
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
            
            {!isLoading && (
              <>
                {isAuthenticated ? (
                  <>
                    {/* Dashboard Link */}
                    <a
                      href="https://osmosis.fm/home"
                      className="font-mono font-normal hover:text-secondary tracking-wider transition-colors uppercase"
                      style={{
                        fontSize: '12px',
                        lineHeight: '17px',
                        color: 'rgb(244, 243, 239)',
                        fontWeight: 400
                      }}
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
                    {/* Sign In Link */}
                    <a
                      href="https://osmosis.fm/enter"
                      className="font-mono font-normal hover:text-secondary tracking-wider transition-colors uppercase"
                      style={{
                        fontSize: '12px',
                        lineHeight: '17px',
                        color: 'rgb(244, 243, 239)',
                        fontWeight: 400
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
                className="font-mono text-white/50 uppercase"
                style={{
                  fontSize: '12px',
                  lineHeight: '17px'
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