import { Mail, Phone } from 'lucide-react'
import Section from './Section'

const EMAIL = 'sujal9094.ai25@chitkara.edu.in'   // put your email here
const PHONE = '+91-9671726418'                 // put your phone number here

export default function Contact() {
  return (
    <Section id="contact" title="Contact" className="bg-white p-8 text-center">
      <p>
        Interested in project collaboration, internships or connecting with me?
        Feel free to get in touch.
      </p>

      <div className="mt-6 flex flex-col items-center gap-3">
        <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 hover:underline">
          <Phone size={18} aria-hidden="true" />
          Mobile: {PHONE}
        </a>
        <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:underline">
          <Mail size={18} aria-hidden="true" />
          Email: {EMAIL}
        </a>
      </div>
    </Section>
  )
}