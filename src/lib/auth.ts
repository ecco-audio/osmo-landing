// Types for user data structure
export interface UserProfile {
  admin: boolean
  email: string
  id: number
  plan: string
  profile: {
    aud?: string
    azp?: string
    email: string
    email_verified?: boolean
    exp?: number
    family_name?: string
    given_name: string
    iat?: number
    iss?: string
    jti?: string
    name: string
    nbf?: number
    onboarding?: any
    picture?: string
    sub?: string
    // Legacy fields for backward compatibility
    first_name?: string
    last_name?: string
  }
  prompt_context?: any
  status: string
  username: string
}

export interface EccoUserCookie {
  user_profile: UserProfile
  message: string
}

// Cookie utility functions
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(';').shift()
    return cookieValue || null
  }
  return null
}

export function parseEccoUserCookie(): EccoUserCookie | null {
  try {
    const cookieValue = getCookie('ecco_user')
    console.log('Raw ecco_user cookie:', cookieValue)
    
    if (!cookieValue) {
      console.log('No ecco_user cookie found')
      return null
    }
    
    // Decode URL-encoded cookie value
    const decodedValue = decodeURIComponent(cookieValue)
    console.log('Decoded ecco_user cookie:', decodedValue)
    
    // Parse JSON
    const userData = JSON.parse(decodedValue) as EccoUserCookie
    console.log('Parsed user data:', userData)
    
    // Validate required fields
    if (!userData.user_profile || !userData.user_profile.email) {
      console.log('Invalid user data - missing required fields')
      return null
    }
    
    console.log('User authentication successful:', userData.user_profile.email)
    return userData
  } catch (error) {
    console.warn('Failed to parse ecco_user cookie:', error)
    return null
  }
}

export function isUserAuthenticated(): boolean {
  const userData = parseEccoUserCookie()
  return userData !== null && userData.user_profile.status === 'Active'
}

export function getUserProfile(): UserProfile | null {
  const userData = parseEccoUserCookie()
  return userData?.user_profile || null
}

// Check if user has session cookie as additional validation
export function hasSessionCookie(): boolean {
  const sessionCookie = getCookie('session')
  console.log('Session cookie check:', sessionCookie)
  
  // Debug: Let's see all cookies
  if (typeof document !== 'undefined') {
    console.log('All cookies:', document.cookie)
  }
  
  return sessionCookie !== null
}

// Combined auth check (both cookies present and valid)
export function isFullyAuthenticated(): boolean {
  return isUserAuthenticated() && hasSessionCookie()
}

// Alternative auth check - just ecco_user cookie (more lenient)
export function isAuthenticated(): boolean {
  return isUserAuthenticated()
}