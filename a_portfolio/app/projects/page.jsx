import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1. This could be a web app, mobile app, or any other development project.",
      image: "/project1.jpg",
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Project 2",
      description: "Description of Project 2. Highlight the key features and technologies used.",
      image: "/project2.jpg",
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Project 3",
      description: "Overview of Project 3. Explain what problem this project solves or what makes it unique.",
      image: "/project3.jpg",
      github: "https://github.com/yourusername/project3",
      live: "https://project3.com",
      tags: ["Vue.js", "Express", "PostgreSQL"]
    }
  ]

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <header className="px-4 sm:px-6 lg:px-10 py-6">
        <nav className="flex justify-end">
          <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-white">
            <li><Link href="/" className="hover:text-red-600 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-red-600 transition-colors">About Me</Link></li>
          </ul>
        </nav>
      </header>

      <main className="px-3 sm:px-4 lg:px-6 py-5 lg:py-9">
        <h1 className="text-2xl sm:text-5xl lg:text-4xl font-bold text-center mb-12">
          My <span className="text-red-600">Projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}