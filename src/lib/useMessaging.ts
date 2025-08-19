import { useMemo } from 'react'
import messagingData from '../data/messaging.json'

type MessageVariant = 'current' | 'mandate_winning'

// Type definitions for better TypeScript support
type HeroMessaging = {
  preHeadline?: string
  headline: {
    line1: string
    line2: string
  }
  subheadline: string
  brandLine?: string
  cta: {
    primary: string
    primaryUrl: string
    secondary?: string
    secondaryUrl?: string
    tertiary?: string
    tertiaryUrl?: string
  }
  trustStrip?: {
    metrics: Array<{
      value: string
      label: string
      isLive?: boolean
    }>
  }
  proofMetrics?: Array<{
    value: string
    label: string
  }>
}

type FeatureItem = {
  title: string
  description: string
}

type FeaturesMessaging = {
  sectionTitle: string
  headline: string
  subheadline: string
  items: FeatureItem[]
}

type ContactMessaging = {
  sectionTitle: string
  headline: string
  subheadline: string
  formHeader?: string
  helperText?: string
}

type FeatureHighlightsMessaging = {
  sectionTitle: string
  headline: string
  subheadline: string
}

type BenefitItem = {
  title: string
  description: string
}

type BenefitsMessaging = {
  sectionTitle: string
  headline: string
  items: BenefitItem[]
}

export function useMessaging(variant?: MessageVariant) {
  // Default to mandate_winning variant, but allow override via URL params for A/B testing
  const activeVariant = useMemo(() => {
    if (variant) return variant
    
    // Check URL params for variant override (useful for A/B testing)
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const urlVariant = urlParams.get('variant') as MessageVariant
      if (urlVariant && ['current', 'mandate_winning'].includes(urlVariant)) {
        return urlVariant
      }
    }
    
    // Default to the new mandate-winning messaging
    return 'mandate_winning' as MessageVariant
  }, [variant])

  const messaging = useMemo(() => {
    const data = messagingData.variants[activeVariant]
    
    return {
      hero: data.hero as HeroMessaging,
      features: data.features as FeaturesMessaging,
      contact: data.contact as ContactMessaging,
      featureHighlights: data.featureHighlights as FeatureHighlightsMessaging,
      benefits: data.benefits as BenefitsMessaging,
      testimonials: messagingData.testimonials,
      socialProof: messagingData.socialProof,
      navigation: messagingData.navigation,
      footer: messagingData.footer,
      variant: activeVariant
    }
  }, [activeVariant])

  return messaging
}

// Helper function to get messaging without React hook (for server-side usage)
export function getMessaging(variant: MessageVariant = 'mandate_winning') {
  const data = messagingData.variants[variant]
  
  return {
    hero: data.hero as HeroMessaging,
    features: data.features as FeaturesMessaging,
    contact: data.contact as ContactMessaging,
    featureHighlights: data.featureHighlights as FeatureHighlightsMessaging,
    benefits: data.benefits as BenefitsMessaging,
    testimonials: messagingData.testimonials,
    socialProof: messagingData.socialProof,
    navigation: messagingData.navigation,
    footer: messagingData.footer,
    variant
  }
}