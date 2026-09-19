// Shared wrapper: centred heading + content (same width as your P1 sections).
export default function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto my-12 w-[85%] max-w-[1100px] ${className}`}>
      <h2 className="mb-6 text-center text-3xl font-bold">{title}</h2>
      {children}
    </section>
  )
}
