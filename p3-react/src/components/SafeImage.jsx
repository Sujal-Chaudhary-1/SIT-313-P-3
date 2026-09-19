import { useState } from 'react'
import { ImageOff } from 'lucide-react'

// <img> that shows an icon box instead of a broken image if the file is missing.
export default function SafeImage({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`grid place-items-center bg-slate-200 text-slate-500 ${className}`}
      >
        <ImageOff size={28} aria-hidden="true" />
      </div>
    )
  }
  return <img src={src} alt={alt} onError={() => setFailed(true)} className={className} />
}
