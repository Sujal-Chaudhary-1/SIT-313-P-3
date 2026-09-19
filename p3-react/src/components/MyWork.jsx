import projects from '../data/projects'
import Section from './Section'
import ProjectCard from './ProjectCard'

export default function MyWork() {
  return (
    <Section id="work" title="My Projects">
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  )
}
