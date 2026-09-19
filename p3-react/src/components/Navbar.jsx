const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Articles', href: '#articles' },
  { label: 'Tutorials', href: '#tutorials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center justify-between gap-3 bg-dark px-[8%] py-4 text-white sm:flex-row">
      <a href="#" className="text-xl font-bold">
        DEV<span className="text-accent">@Deakin</span>
      </a>
      <ul className="m-0 flex list-none flex-wrap justify-center gap-6 p-0">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:underline">{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
