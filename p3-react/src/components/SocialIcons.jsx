// lucide-react v1 no longer ships brand icons, so these are small inline SVGs.
const base = 'h-5 w-5 fill-current'

export const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className={base} aria-hidden="true">
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.7c0-.9.3-1.5 1.5-1.5h1.6V4.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.1H8v3h2.4V21h3.1z" />
  </svg>
)
export const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className={base} aria-hidden="true">
    <path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7C8 8.700 5 7.100 3 4.600c-1.100 1.900-.5 4.200 1.300 5.400-.7 0-1.300-.2-1.900-.5 0 2 1.400 3.700 3.300 4.100-.6.2-1.200.2-1.800.1.500 1.600 2 2.800 3.800 2.900A8.300 8.300 0 0 1 2 18.400 11.600 11.600 0 0 0 8.300 20c7.500 0 11.700-6.300 11.400-12 .8-.6 1.500-1.300 2.300-2.100z" />
  </svg>
)
export const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.500" cy="6.500" r="1" className="fill-current stroke-none" />
  </svg>
)
