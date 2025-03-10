"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signInWithGoogle } from "./actions";
import OneTapGoogle from "@/components/auth/onetapGoogle";

export default function SignupPage() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 h-16 w-16 overflow-hidden rounded-full bg-primary/10">
            <Image 
              src="/favicon.ico" 
              alt="Kathy Clean Logo" 
              width={64} 
              height={64}
              className="object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Create an Account</h1>
          <p className="mt-2 text-center text-gray-600">
            Sign up to start managing your cleaning services
          </p>
        </div>

        <form className="space-y-6">
          <Button
            onClick={() => signInWithGoogle()}
            type="button"
            className="flex w-full items-center justify-center gap-2 bg-white text-gray-800 hover:bg-gray-100 border border-gray-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign up with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="space-y-4">
            <Input type="email" placeholder="Email" />
            <Button 
              type="button"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Send Magic Link
            </Button>
          </div>
        </form>
        
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-primary hover:text-primary/80">
            Log in
          </Link>
        </div>
      </div>
      <OneTapGoogle />
    </div>
  )
}
