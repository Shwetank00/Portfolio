import AnimatedSection from '../components/AnimatedSection'
import config from '../config'
import { iconMap } from '../icons'

function SkillCard({ skill, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="text-gray-900 dark:text-gray-100">{icon}</div>
      <p className="font-medium text-gray-700 dark:text-gray-300">{skill}</p>
    </div>
  )
}

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {config.skills.map((skill) => (
            <SkillCard key={skill} skill={skill} icon={iconMap[skill]} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
