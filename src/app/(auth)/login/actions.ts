'use server'

import { createClient } from '@/utils/supabase-server'

export async function signInWithGoogle() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  })

  if (error) {
    console.error('Error signing in with Google:', error)
    throw new Error('Failed to sign in with Google')
  }

  if(data.url){
    return data.url
  }

  return data
}
