'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Code, Briefcase, GraduationCap, Heart, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function About() {
  const [expandedSections, setExpandedSections] = useState({})
  
  const skills = {
    "Programming Languages": ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C++"],
    "Frontend": ["React", "Next.js", "Vue.js", "HTML5", "CSS3/Sass", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "Django", "MySQL", "MongoDB", "Firebase"],
    "Tools & Methodologies": ["Git", "  Figma", "RESTful API Design"]
  }

  return (
    <div className="bg-black min-w-screen text-white font-sans">
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
      <div className='p-5'>
        <main className="px-5 sm:px-3 lg:px-4 py-1 lg:mt-5 w-full">
          <div className="mx-6 w-auto p-8 space-y-4 justify-center">
            <section className='mb-6'>
              <h1 className="text-5xl font-semibold mb-6">About</h1>
              <div className="space-y-4 text-lg">
                <p>
                Hey there! I'm Leaderson Kussiba, a fullstack developer and a student with a serious passion for crafting high-performance applications that solve real problems and keep users coming back for more. My journey in tech has been all about pushing boundaries and learning from each new challenge, whether it’s building sleek web apps, diving into backend systems, or polishing up front-end experiences.
                </p>
                <p>
                Beyond coding, I'm all about epic fantasy novels, where I get lost in otherworldly adventures, and video games, where I level up my skills and strategy. And if I’m not doing either of those, you’ll find me elbow-deep in a DIY electronics project, figuring out how things tick. My goal? To combine creativity, technical know-how, and a dash of fun to build projects that really make a difference.
                </p>
              </div>
            </section>

            <section className="py-8">
              <h2 className="text-2xl font-bold mb-2 flex items-center space-x-1">
                <Code className="text-red-600" />
                <span>My</span> <span className="text-red-600">Tech</span> <span>Stack</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="mb-2">
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                    <span key={index} className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    {skill}
                    </span>
                    ))}
                  </div>
                </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}