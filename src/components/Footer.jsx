import config from '../config'
import { GithubIcon, LinkedinIcon } from '../icons'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={config.socials.github} target="_blank" rel="noopener noreferrer"
             className="hover:text-white transition-colors duration-300">
            <GithubIcon />
          </a>
          <a href={config.socials.linkedin} target="_blank" rel="noopener noreferrer"
             className="hover:text-white transition-colors duration-300">
            <LinkedinIcon />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} {config.name}. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
