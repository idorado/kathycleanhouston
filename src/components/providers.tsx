"use client"

import type { PropsWithChildren } from "react"
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import PostHogPageView from "@/app/posthog-pageview"
import { useEffect } from 'react'

export function PostHogProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST

    // If no credentials, do nothing
    if (!apiKey || !apiHost) {
      return
    }

    // Always initialize PostHog when we have apiKey and host
    posthog.init(apiKey, {
      api_host: apiHost,
      capture_pageview: false,
    })

    // In non-production environments, initialize but opt-out of sending data
    if (process.env.NODE_ENV !== 'production') {
      posthog.opt_out_capturing()
    }
  }, [])
  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  )
}