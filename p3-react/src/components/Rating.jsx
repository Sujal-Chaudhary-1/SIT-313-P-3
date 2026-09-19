import { Star } from 'lucide-react'

// Small reusable child: star icon + numeric rating (e.g. "5" or "4.9")
export default function Rating({ value }) {
  return (
    <span className="inline-flex items-center gap-1 font-bold text-sm">
      <Star size={16} className="fill-star text-star" aria-hidden="true" />
      <span aria-label={`Rated ${value} out of 5`}>{value}</span>
    </span>
  )
}
