'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Code, Briefcase, GraduationCap, Heart, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function About() {
  const [expandedSections, setExpandedSections] = useState({})

  const toggleSection = (section) => {
    setExpandedSections(prev => ({...prev, [section]: !prev[section]}))
  }

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2020 - Present",
      description: "Lead developer for high-impact projects, mentoring junior developers, and implementing CI/CD pipelines.",
      achievements: [
        "Increased team productivity by 30% through implementation of Agile methodologies",
        "Reduced application load time by 40% through optimization techniques",
        "Developed and maintained microservices architecture for scalability"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "InnovateSoft",
      period: "2018 - 2020",
      description: "Worked on various client projects using React, Node.js, and AWS technologies.",
      achievements: [
        "Successfully delivered 10+ projects on time and within budget",
        "Implemented responsive design principles, improving mobile user engagement by 25%",
        "Integrated third-party APIs to enhance application functionality"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Hub",
      period: "2016 - 2018",
      description: "Assisted in the development of web applications using JavaScript and PHP.",
      achievements: [
        "Contributed to the development of a CMS that improved content management efficiency by 50%",
        "Collaborated with UX designers to implement intuitive user interfaces",
        "Participated in code reviews and improved code quality standards"
      ]
    }
  ]

  const education = [
    {
      degree: "MSc in Computer Science",
      institution: "Tech University",
      period: "2018 - 2020",
      description: "Focused on Advanced Algorithms, Machine Learning, and Distributed Systems.",
      achievements: [
        "Thesis: 'Optimizing Distributed Systems using Machine Learning Techniques'",
        "Published 2 papers in international conferences",
        "Received Outstanding Graduate Student Award"
      ]
    },
    {
      degree: "BSc in Software Engineering",
      institution: "University of Technology",
      period: "2014 - 2018",
      description: "Comprehensive study of software development methodologies and practices.",
      achievements: [
        "Graduated with First Class Honors",
        "Completed capstone project: 'Real-time Collaborative Code Editor'",
        "President of the University Coding Club"
      ]
    }
  ]

  const skills = {
    "Programming Languages": ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C++"],
    "Frontend": ["React", "Next.js", "Vue.js", "HTML5", "CSS3/Sass", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "Django", "Spring Boot"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    "DevOps & Cloud": ["Docker", "Kubernetes", "AWS", "Google Cloud Platform", "CI/CD (Jenkins, GitLab)"],
    "Tools & Methodologies": ["Git", "Agile/Scrum", "Test-Driven Development", "RESTful API Design"]
  }

  return (
    <div className="bg-black min-w-screen min-h-screen text-white font-sans">
      <header className="px-4 sm:px-6 lg:px-10 py-6">
        <nav className="flex justify-end">
          <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-white">
            <li><Link href="/" className="hover:text-red-600 transition-colors">Home</Link></li>
            <li><Link href="/projects" className="hover:text-red-600 transition-colors">Projects</Link></li>
          </ul>
        </nav>
      </header>

      <main className="px-2 -mt-8 sm:px-3 lg:px-4 py-2.5 lg:py-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-2">
            <Image
              src="/profile.jpg"
              alt="Leaderson"
              width={200}
              height={100}
              className="rounded-full mx-auto mb-2"
            />
          </div>

          <section className="mb-4 bg-gray-900 text-white w-full rounded-lg p-2">
            <h2 className="text-2xl text-center font-bold mb-4">Who I Am</h2>
            <div className="bg-gray-900 text-white space-y-4">
              <p>
                Hey there! I'm Leaderson, a passionate full-stack developer with a knack for turning complex problems into elegant, user-friendly solutions. With over 7 years of experience in the tech industry, I've had the privilege of working on a diverse range of projects that have sharpened my skills and broadened my perspective.
              </p>
              <p>
                When I'm not immersed in lines of code, you can find me pursuing a variety of interests that keep me balanced and inspired:
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>Contributing to open-source projects, because I believe in the power of community-driven development</li>
                <li>Writing tech blogs to share my knowledge and learn from others in the process</li>
                <li>Participating in hackathons, where the adrenaline of creating something meaningful in a short time never gets old</li>
              </ul>
              <p>
                Let's connect and create something amazing together!
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Briefcase className="mr-2 text-red-600" />
              Experience
            </h2>
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company} | {exp.period}</p>
                  </div>
                  <button 
                    onClick={() => toggleSection(`exp-${index}`)}
                    className="text-red-600 hover:text-red-400"
                    aria-label={expandedSections[`exp-${index}`] ? "Collapse experience details" : "Expand experience details"}
                  >
                    {expandedSections[`exp-${index}`] ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>
                <p className="mt-2 text-gray-300">{exp.description}</p>
                {expandedSections[`exp-${index}`] && (
                  <ul className="list-disc list-inside mt-2 text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <GraduationCap className="mr-2 text-red-600" />
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.institution} | {edu.period}</p>
                  </div>
                  <button 
                    onClick={() => toggleSection(`edu-${index}`)}
                    className="text-red-600 hover:text-red-400"
                    aria-label={expandedSections[`edu-${index}`] ? "Collapse education details" : "Expand education details"}
                  >
                    {expandedSections[`edu-${index}`] ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>
                <p className="mt-2 text-gray-300">{edu.description}</p>
                {expandedSections[`edu-${index}`] && (
                  <ul className="list-disc list-inside mt-2 text-gray-300">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Code className="mr-2 text-red-600" />
              Skills
            </h2>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="mb-4">
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
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Connect with me</h2>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Linkedin className="w-8 h-8" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter className="w-8 h-8" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Github className="w-8 h-8" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}