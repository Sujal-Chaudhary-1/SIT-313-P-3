import { FacebookIcon, TwitterIcon, InstagramIcon } from './SocialIcons'

const explore = ['Home', 'Questions', 'Articles', 'Tutorials']
const support = ['FAQs', 'Help', 'Contact Us']
const legal = ['Privacy Policy', 'Terms', 'Code of Conduct']

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
]

function LinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-bold">{title}</h3>
      <ul className="space-y-1.5 text-sm">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:underline">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-panel text-white">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-10 sm:grid-cols-3">
        <LinkColumn title="Explore" links={explore} />
        <LinkColumn title="Support" links={support} />
        <div>
          <h3 className="mb-3 text-lg font-bold">Stay connected</h3>
          <div className="flex gap-2">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded bg-white/20 hover:bg-accent"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/25 px-6 py-5 text-center">
        <p className="font-bold">DEV@Deakin 2026</p>
        <ul className="mt-2 flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm">
          {legal.map((item) => (
            <li key={item}><a href="#" className="hover:underline">{item}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
