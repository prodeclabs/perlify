'use client'

import { useFormStatus } from 'react-dom'
import { useRef, useState } from 'react'
import { subscribeToWaitlist } from '@/actions/subscribeToWaitlist'

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <button 
      disabled={pending}
      className="relative w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 group active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
      type="submit"
    >
      <div className="absolute inset-0 bg-[#238636] rounded-lg transition-all duration-300 group-hover:bg-[#2ea043] group-active:bg-[#2ea043]"></div>
      <div className="absolute inset-0 rounded-lg bg-white/[0.075] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute -inset-1 rounded-lg bg-[#238636]/20 blur opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>
      <span className="relative z-10 text-white text-sm sm:text-base">
        {pending ? 'Joining...' : 'Notify Me'}
      </span>
    </button>
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
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#161b22] border border-[#30363d] text-white placeholder-[#8b949e] 
              transition-all duration-300
              focus:outline-none 
              focus:ring-2 
              focus:ring-[#238636]/20 
              focus:border-[#238636]
              focus:bg-[#1c2129]
              text-sm sm:text-base"
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