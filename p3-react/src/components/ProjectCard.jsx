import SafeImage from './SafeImage'

export default function ProjectCard({ image, title, description }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white">
      <SafeImage src={image} alt={title} className="h-[180px] w-full object-cover" />
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="text-sm text-slate-700">{description}</p>
      </div>
    </article>
  )
}
