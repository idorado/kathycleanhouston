'use client'

import Script from 'next/script'
import { createClient } from '@/utils/supabase-browser'
import type { CredentialResponse } from 'google-one-tap'
import { useRouter } from 'next/navigation'
import { useEffect, useCallback, useState } from 'react'
import google from 'google-one-tap'

const OneTapGoogle = () => {
  const supabase = createClient()
  const router = useRouter()
  const [scriptLoaded, setScriptLoaded] = useState(false)

  // generate nonce to use for google id token sign-in
  const generateNonce = useCallback(async (): Promise<[string, string]> => {
    const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))))
    const encoder = new TextEncoder()
    const encodedNonce = encoder.encode(nonce)
    const hashBuffer = await crypto.subtle.digest('SHA-256', encodedNonce)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashedNonce = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')

    return [nonce, hashedNonce]
  }, [])

  useEffect(() => {
    const initializeGoogleOneTap = async () => {
      console.log('Initializing Google One Tap')
      
      // Check for existing session first
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        console.error('Error getting session', error)
      }
      if (data.session) {
        console.log('User already logged in')
        router.push('/')
        return
      }

      if (!scriptLoaded || !window.google) {
        console.log('Google script not loaded yet')
        return
      }

      try {
        const [nonce, hashedNonce] = await generateNonce()
        console.log('Nonce generated:', `${hashedNonce.substring(0, 10)}...`)

        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
          callback: async (response: CredentialResponse) => {
            try {
              console.log('Google callback received')
              const { data, error } = await supabase.auth.signInWithIdToken({
                provider: 'google',
                token: response.credential,
                nonce,
              })

              if (error) throw error
              console.log('Successfully logged in')
              router.push('/')
            } catch (error) {
              console.error('Error logging in with Google One Tap', error)
            }
          },
          nonce: hashedNonce,
          use_fedcm_for_prompt: true,
          cancel_on_tap_outside: false, // Prevents dismissal on outside click
          prompt_parent_id: "oneTap", // Specify container
        })
        
        // Display the One Tap UI with a slight delay to ensure DOM is ready
        setTimeout(() => {
          console.log('Prompting Google One Tap')
          window.google.accounts.id.prompt()
        }, 100)
      } catch (error) {
        console.error('Error initializing Google One Tap', error)
      }
    }

    if (scriptLoaded) {
      initializeGoogleOneTap()
    }
  }, [generateNonce, router, supabase, scriptLoaded])

  return (
    <>
      <Script 
        src="https://accounts.google.com/gsi/client" 
        onLoad={() => {
          console.log('Google script loaded')
          setScriptLoaded(true)
        }}
        onError={() => console.error('Failed to load Google script')}
      />
      <div 
        id="oneTap" 
        className="fixed top-20 right-4 z-[100] min-h-[100px] min-w-[200px]" 
      />
    </>
  )
}

export default OneTapGoogle