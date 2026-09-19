import SafeImage from './SafeImage'
import Rating from './Rating'

export default function TutorialCard({ image, title, description, rating, username, url }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-md border border-slate-200 bg-white">
      <SafeImage src={image} alt={`Cover image for ${title}`} className="aspect-video w-full object-cover" />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg font-bold leading-snug">
          <a href={url} target="_blank" rel="noreferrer" className="hover:underline">
            {title}
          </a>
        </h3>
        <p className="text-sm text-slate-600">{description}</p>
        <div className="mt-auto flex items-center justify-between border-t border-dashed border-slate-300 pt-3">
          <Rating value={rating} />
          <span className="text-sm font-medium">@{username}</span>
        </div>
      </div>
    </article>
  )
}