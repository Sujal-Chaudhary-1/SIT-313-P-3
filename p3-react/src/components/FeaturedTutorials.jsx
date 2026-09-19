import tutorials from '../data/tutorials'
import Section from './Section'
import TutorialCard from './TutorialCard'
import SeeAllButton from './SeeAllButton'

export default function FeaturedTutorials() {
  return (
    <Section id="tutorials" title="Featured Tutorials">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((tutorial) => (
          <TutorialCard key={tutorial.id} {...tutorial} />
        ))}
      </div>
      <SeeAllButton>See all tutorials</SeeAllButton>
    </Section>
  )
}
