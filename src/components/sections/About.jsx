import React from 'react'
import RevealOnScroll from './RevealOnScroll';

function About() {
    const frontendSkills=["React","Vue", "TypeScript", "TailwindCSS", "Svelte",];

    const backendSkills = [
      "Node.js",
      "Python",
      "AWS",
      "MongoDB",
      "GraphQL",
    ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Hey! I'm a tech enthusiast and developer who loves building smart,
              practical solutions through code. With a passion for
              problem-solving and a strong focus on clean, efficient
              development, I enjoy working on both web and mobile projects. I’m
              constantly exploring new technologies and frameworks to stay ahead
              in this fast-paced world, and I believe in the power of learning
              by doing. Whether it’s crafting intuitive UIs or diving into the
              backend, I’m always up for the challenge. Let’s build something
              awesome!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bsc. Information Technology</strong> Dedan Kimathi
                  University of Technology (2022-2026)
                </li>
                <li>
                  {" "}
                  Relevant Coursework: Data Science, Web Development, Mobile
                  Development...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Engineer at Systech Limited(2025-Present)
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Intern at Systech Limited(2025-Present)
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About