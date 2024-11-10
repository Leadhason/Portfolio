import { Github,  Linkedin, Twitter , ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "Chess Coordinates Trainer",
      description: "In the game of chess, you have 64 squares on the board. 64 squares where you can place your pieces. Each square has its own name. Remembering the name of these squares in key for learning, understanding and improving in chess. But learning the names of these squares is no easy feat, especially for beginners. In order to make this learning process easy, I created a simple game using which you can easily learn chess coordinates.",
      technologies: "React.js, Typescript",
      github: "https://github.com/yourusername/chess-trainer",
      live: "https://chess-trainer.com"
    },
    {
      title: "Fireshell",
      description: "A CLI for running firebase database and firestore queries on the shell. Just install the package globally using npm or yarn, select the service (Realtime Database or Cloud Firestore), enter the path to config file and run your queries.",
      technologies: "Node.js, Firebase API",
      github: "https://github.com/yourusername/fireshell",
      live: "https://fireshell.dev"
    }
  ]

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
      <main className="container mx-auto px-6 py-7 p-5">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6">
                {project.description}
              </p>
              
              <div>
                <h3 className="text-red-600 font-medium mb-2">Technologies Used:</h3>
                <p className="text-gray-400">{project.technologies}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}