import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <header className="flex justify-between items-center px-10 py-6">
        <nav>
          <ul className="flex space-x-8 text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex justify-between items-center px-10">
        <div className="w-1/2">
          <div className="rounded-full overflow-hidden w-96 h-96 relative">
            <Image
              src="/profile.jpg" 
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>

        <div className="w-1/2 text-left">
          <h2 className="text-6xl font-bold">
            Hi, It's <span className="text-red-600">Leaderson</span>
          </h2>
          <h3 className="text-3xl mt-2 mb-6">
            I'm a <span className="text-red-600">Developer</span>
          </h3>
          <p className="text-gray-400 mb-6">
          Software Developer by day, epic fantasy buff by night, I bring creativity and precision to every project. I'm passionate about crafting innovative solutions that make a difference. Explore my work, check out my skills, and let's collaborate to turn your ideas into reality.
          </p>

          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-gray-400 hover:text-red-600">
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600">
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600">
              <i className="fab fa-github text-3xl"></i>
            </a>
          </div>

          <button className="bg-red-600 hover:bg-gray-700 text-white px-8 py-4 rounded-full">
            Hire me
          </button>
        </div>
      </main>
    </div>
  );
}
