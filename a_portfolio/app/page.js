import Image from 'next/image'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <header className="px-4 sm:px-6 lg:px-10 py-6">
        <nav className="flex justify-end">
          <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-white">
            <li><Link href="/projects" className="hover:text-red-600 transition-colors">Projects</Link></li>
            <li><Link href="/about" className="hover:text-red-600 transition-colors">About Me</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col justify-center lg:flex-row gap-9 items-center px-2 sm:px-6 lg:px-4 py-4 lg:py-4 mt-3 mx-3">
        <div className="flex justify-center lg:justify-center mb-8 lg:mb-0">
          <div className="rounded-full border border-blue-500 overflow-hidden w-56 h-56 sm:w-72 sm:h-72 lg:w-[450px] lg:h-[450px] relative">
            <Image
              src="/profile.jpg" 
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Hi, It's <span className="text-red-600">Leaderson</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl mt-2 mb-4 sm:mb-6">
            I'm a <span className="text-red-600">Developer</span>
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto lg:mx-0">
            Hey, I'm Leaderson—a fullstack developer who's all about creating smooth, responsive interfaces and efficient backends that just work. I enjoy tackling challenging problems (well, not enjoy them but a guy's gotta eat). I do enjoy bringing ideas to life with clean, reliable code. Take a look at my projects to see what I'm building.
          </p>

          <div className="flex justify-center lg:justify-start space-x-4 mb-6">
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

          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full transition-colors">
            Hire me
          </button>
        </div>
      </main>
    </div>
  )
}