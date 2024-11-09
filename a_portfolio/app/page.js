import Image from 'next/image'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <header className="px-4 sm:px-6 lg:px-10 py-6">
        <nav className="flex justify-end">
          <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-white">
            <li><a href="#" className="hover:text-red-600 transition-colors">Projects</a></li>
            <li><a href="#" className="hover:text-red-600 transition-colors">About Me</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-10 py-8 lg:py-16 gap-2 lg:gap-4">
        <div className="w-full ml-8 lg:w-1/2 flex justify-center lg:justify-start">
          <div className="rounded-full  overflow-hidden w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
            <Image
              src="/profile.jpg" 
              alt="Profile"
              height={500}
              width={500}
              className="object-fill"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left mr-8 -pr-5">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Hi, It's <span className="text-red-600">Leaderson</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl mt-2 mb-4 sm:mb-6">
            I'm a <span className="text-red-600">Developer</span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto lg:mx-0">
          Hey, I’m Leaderson—a fullstack developer who’s all about creating smooth, responsive interfaces and efficient backends that just work. I enjoy tackling challenging problems(well, not enjoy them but a guy's gotta eat). I do enjoy bringing ideas to life with clean, reliable code. Take a look at my projects to see what I’m building.
          </p>

          <div className="flex justify-center lg:justify-start space-x-4 mb-6">
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
              <Github className="w-8 h-8" />
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