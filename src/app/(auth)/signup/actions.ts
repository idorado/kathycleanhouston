'use server'

import { createClient } from '@/utils/supabase-server'
import { redirect } from 'next/navigation'

export async function signInWithGoogle() {
  console.log('here')
  const supabase = await createClient()
  console.log(supabase)
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

  if (data.url){
    redirect(data.url)
  }

  return data
}
