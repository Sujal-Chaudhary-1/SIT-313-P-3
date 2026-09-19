export default function SeeAllButton({ children, href = '#' }) {
  return (
    <div className="mt-8 flex justify-center">
      <a
        href={href}
        className="rounded-full bg-slate-200 px-6 py-2 text-sm font-bold text-ink hover:bg-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {children}
      </a>
    </div>
  )
}
