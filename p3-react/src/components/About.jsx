import Section from './Section'
import SafeImage from './SafeImage'

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col items-center gap-8 bg-white p-8 text-center sm:flex-row sm:text-left">
        <SafeImage
          src="/images/profilepic.png"
          alt="Sujal Chaudhary"
          className="h-[220px] w-[220px] shrink-0 rounded-full object-cover"
        />
        <div className="space-y-3">
          <h3 className="text-xl font-bold">Sujal Chaudhary</h3>
          <p>I am from Karnal, Haryana and I study BE AI/ML at Chitkara University.</p>
          <p>
            I am interested in programming, frontend development, data wrangling and
            computational intelligence.
          </p>
          <p>
            Currently, I am focusing on Data Structures and Algorithms, especially recursion.
          </p>
        </div>
      </div>
    </Section>
  )
}
