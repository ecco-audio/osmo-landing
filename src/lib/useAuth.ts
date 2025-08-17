import { useState, useEffect } from 'react'
import { 
  isFullyAuthenticated, 
  isAuthenticated,
  getUserProfile, 
  hasSessionCookie,
  type UserProfile 
} from './auth'

export interface AuthState {
  isAuthenticated: boolean
  user: UserProfile | null
  isLoading: boolean
}

export function useAuth(): AuthState {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    isLoading: true
  })

  useEffect(() => {
    // Check authentication status on mount and when cookies change
    function checkAuth() {
      try {
        // Use the more lenient check for now (just ecco_user cookie)
        const authenticated = isAuthenticated()
        const user = getUserProfile()
        
        console.log('useAuth - checkAuth results:', {
          authenticated,
          user,
          hasSession: hasSessionCookie(),
          fullyAuthenticated: isFullyAuthenticated()
        })
        
        setAuthState({
          isAuthenticated: authenticated,
          user: user,
          isLoading: false
        })
      } catch (error) {
        console.warn('Auth check failed:', error)
        setAuthState({
          isAuthenticated: false,
          user: null,
          isLoading: false
        })
      }
    }

    // Initial check
    checkAuth()

    // Set up interval to periodically check auth status
    // This handles cases where cookies are updated in another tab
    const interval = setInterval(checkAuth, 30000) // Check every 30 seconds

    // Listen for storage events (when cookies change in other tabs)
    const handleStorageChange = () => {
      checkAuth()
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    // Listen for focus events to check auth when user returns to tab
    const handleFocus = () => {
      checkAuth()
    }
    
    window.addEventListener('focus', handleFocus)

    return () => {
      clearInterval(interval)
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('focus', handleFocus)
    }
  }, [])

  return authState
}

// Helper hook for just checking if user is authenticated
export function useIsAuthenticated(): boolean {
  const { isAuthenticated } = useAuth()
  return isAuthenticated
}

// Helper hook for getting user profile
export function useUserProfile(): UserProfile | null {
  const { user } = useAuth()
  return user
}