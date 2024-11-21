import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '../../sanity/lib/client'
import { urlFor } from '../../sanity/lib/image'

const getAllProjects = async () => {
  const query = `*[_type == "project"] {
    title,
    overview,
    stack,
    image,
    link,
    github
  }`
  try {
    const projects = await client.fetch(query)
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export default async function Projects() {
  const projects = await getAllProjects()

  return (
    <div className="bg-black min-h-screen text-white font-sans p-1">
      <header className="flex px-4 sm:px-6 lg:px-10 py-6 justify-between w-full">
        <div className="flex justify-start text-sm">
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
        <nav className="flex justify-end">
          <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-white">
            <li><Link href="/" className="hover:text-red-600 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-red-600 transition-colors">About Me</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto py-7 px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-gray-900 rounded-lg p-5 items-start md:items-center">
              <div className="w-full md:w-[400px] h-[300px] border border-white mb-4 md:mb-0 md:mr-6">
                <Image
                  src={urlFor(project.image).url()}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6">
                  {project.overview}
                </p>
                
                <div>
                  <h3 className="text-red-600 font-medium mb-2">Technologies Used:</h3>
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <li 
                        key={techIndex}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}