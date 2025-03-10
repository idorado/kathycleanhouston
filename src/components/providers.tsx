"use client"

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { HTTPException } from "hono/http-exception"
import { type PropsWithChildren, useState } from "react"
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import PostHogPageView from "@/app/posthog-pageview"
import { useEffect } from 'react'

export const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (err) => {
            if (err instanceof HTTPException) {
              // global error handling, e.g. toast notification ...
            }
          },
        }),
      })
  )

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}


export function PostHogProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? '',
        capture_pageview: false,
        loaded: (posthog) => {
          if (process.env.NODE_ENV !== 'production') {
            posthog.opt_out_capturing()
          }
        }
      })
    }
  }, [])

  if (process.env.NODE_ENV !== 'production') {
    return <>{children}</> // Bypass PostHog entirely
  }

  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  )
}