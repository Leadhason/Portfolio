import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Code, Briefcase, GraduationCap, Heart, ChevronDown, ChevronUp } from 'lucide-react'
import { client } from '../../sanity/lib/client'

const getAbout = async () => {
  const query = `*[_type == "about"] {
   description,
    stack,
  }`
  try {
    const about = await client.fetch(query)
    return about
  } catch (error) {
    console.error('Error fetching about:', error)
    return []
  }
}

export default async function About() {
  const about = await getAbout()

  return (
    <div className="bg-black max-w-screen text-white font-sans">
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
              <li><Link href="/projects" className="hover:text-red-600 transition-colors">Projects</Link></li>
            </ul>
          </nav>
      </header>
      <div className='flex justify-center px-20 w-full -mt-10'>
        <main className="p-5 sm:p-3 lg:p-4 py-1 lg:mt-5 w-4/5 ">
          <div className="mx-6 w-auto p-8 space-y-4 justify-center">
          {about.map((about, index) => (
            <div key={index}>
              <section className='mb-6'>
                <h1 className="text-5xl font-semibold mb-6">About</h1>
                <div className="space-y-4 text-lg">
                  <p>
                    {about.description}
                  </p>
                </div>
              </section>

              <section className="py-8">
                <h2 className="text-2xl font-bold mb-2 flex items-center space-x-1">
                  <Code className="text-red-600" />
                  <span className="text-red-600">Skills</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                  <ul className="flex flex-wrap gap-2">
                    {about.stack.map((tech, techIndex) => (
                      <li 
                        key={techIndex}
                        className="bg-red-800 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          ))}
          </div>
        </main>
      </div>
    </div>
  )
}