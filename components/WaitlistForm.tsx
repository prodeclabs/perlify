'use client'

import { useFormStatus } from 'react-dom'
import { useRef, useState } from 'react'
import { subscribeToWaitlist } from '@/actions/subscribeToWaitlist'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <Button 
      disabled={pending}
      className="relative w-[30%] sm:w-auto"
      type="submit"
      variant="default"
    >
      {pending ? 'Joining...' : 'Notify Me'}
    </Button>
  )
}

export function WaitlistForm() {
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    const result = await subscribeToWaitlist(formData)
    
    if ('error' in result && result.error) {
      setMessage({ type: 'error', text: result.error })
    } else if ('success' in result && result.success) {
      setMessage({ type: 'success', text: result.success })
      formRef.current?.reset()
    }

    setTimeout(() => setMessage(null), 5000)
  }

  return (
    <div className="w-full max-w-md space-y-3 sm:space-y-4 mt-6 sm:mt-8 px-4 sm:px-0">
      <h2 className="text-lg sm:text-2xl font-semibold text-white">Get Notified When We Launch</h2>
      <form ref={formRef} action={handleSubmit} className="space-y-2">
        <div className="flex flex-row sm:flex-row gap-2 sm:gap-3">
          <Input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="flex-1 bg-neutral-900 border-neutral-700 text-neutral-100 placeholder-neutral-500 
              focus-visible:ring-[#238636]/20 
              focus-visible:border-[#238636]
              focus-visible:bg-neutral-800"
          />
          <SubmitButton />
        </div>
        {message && (
          <div className={`text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'} text-center`}>
            {message.text}
          </div>
        )}
      </form>
    </div>
  )
} 