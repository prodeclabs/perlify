'use server'

import { createClient } from '@/utils/supabase/server'
import { Resend } from 'resend'
import { WaitlistEmail } from '@/emails/Welcome'

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

const isDevelopment = process.env.NODE_ENV === 'development'

export async function subscribeToWaitlist(formData: FormData) {
  const email = formData.get('email')

  if (!email || typeof email !== 'string') {
    return { error: 'Email is required' }
  }

  const supabase = await createClient()

  try {
    // First, insert into waitlist
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert([{ 
        email: email.toLowerCase(),
      }])

    if (dbError?.code === '23505') {
      return { error: 'You are already on the waitlist!' }
    }

    if (dbError) {
      console.error('Error inserting to waitlist:', dbError)
      return { error: 'Something went wrong. Please try again.' }
    }

    try {
      // Send welcome email
      const emailResult = await resend.emails.send({
        from: 'Perlify <welcome@perlify.club>',
        to: email.toLowerCase(),
        subject: 'Welcome to Perlify!',
        react: WaitlistEmail({
          userEmail: email.toLowerCase()
        }),
      })

      // console.log('Email sent successfully:', emailResult)

    } catch (emailError) {
      console.error('Error sending email:', emailError)
      // Don't return error to user since DB insertion was successful
    }

    return { success: 'Thanks for joining the waitlist!' }
  } catch (error) {
    console.error('Error in waitlist subscription:', error)
    return { error: 'Something went wrong. Please try again.' }
  }
}   