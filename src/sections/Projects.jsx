import AnimatedSection from '../components/AnimatedSection'
import config from '../config'
import { GithubIcon, ExternalLinkIcon } from '../icons'

function ProjectCard({ title, description, tags, link, liveLink, bgImage }) {
  return (
    <div
      className="relative group rounded-lg p-6 overflow-hidden bg-cover bg-center hover:shadow-2xl hover:shadow-slate-900/50 dark:hover:shadow-black/50 hover:-translate-y-1 transition-all duration-300 flex flex-col text-white min-h-[350px]"
      style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.88)), url(${bgImage})` }}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
        <p className="text-slate-300 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-100/10 text-slate-300 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-auto pt-4 border-t border-slate-200/20">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 text-slate-300 hover:text-white font-medium transition-colors duration-300 flex items-center gap-2"
          >
            <GithubIcon className="w-5 h-5" /> GitHub
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 text-slate-300 hover:text-white font-medium transition-colors duration-300 flex items-center gap-2"
          >
            <ExternalLinkIcon className="w-5 h-5" /> Live Demo
          </a>
        </div>
      </div>
      <a href={liveLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0">
        <span className="sr-only">View live demo for {title}</span>
      </a>
    </div>
  )
}

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="py-20 bg-gray-50 dark:bg-black/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {config.projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
