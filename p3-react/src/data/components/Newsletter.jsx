import { useState } from 'react'

// Same endpoint and behaviour as your P2 script.js
const API_URL = 'http://localhost:3000/subscribe'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ text: '', type: '' }) // type: 'success' | 'error'

  async function handleSubmit(e) {
    e.preventDefault()
    setMessage({ text: '', type: '' })
    setLoading(true)

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      const data = await response.json()

      if (response.ok) {
        setMessage({ text: data.message || 'Subscribed! Check your inbox.', type: 'success' })
        setEmail('')
      } else {
        setMessage({ text: data.message || 'Something went wrong. Please try again.', type: 'error' })
      }
    } catch (err) {
      console.error('Error submitting form:', err)
      setMessage({ text: 'Could not reach the server. Is it running?', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-slate-200">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-3 sm:flex-row sm:justify-center"
      >
        <label htmlFor="newsletter-email" className="text-sm font-extrabold sm:text-base">
          SIGN UP FOR OUR DAILY INSIDER
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full max-w-xs rounded border border-slate-400 bg-white px-3 py-1.5 text-sm focus-visible:outline-2 focus-visible:outline-accent"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-accent px-4 py-1.5 text-sm font-bold text-white hover:bg-accent-dark disabled:cursor-not-allowed disabled:bg-slate-500"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {message.text && (
        <p
          role="status"
          className={`pb-2 text-center text-sm font-medium ${
            message.type === 'success' ? 'text-green-700' : 'text-red-700'
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  )
}
