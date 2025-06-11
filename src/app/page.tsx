'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import Scene3D from '@/components/Scene3D';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Scene3D />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center backdrop-blur-sm bg-white/10 dark:bg-gray-900/10 p-8 rounded-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Hi, I&apos;m</span> <span className="text-blue-600 dark:text-blue-400">Mohtashim Nawaz</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Software Engineer specializing in Rust, Solana, and Full Stack Development
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Get in Touch
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300">
                View Projects
              </button>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="about" 
          className="py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 relative z-10"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <Image 
                  src="/profile.jpg" 
                  alt="Mohtashim Nawaz" 
                  width={200} 
                  height={200} 
                  className="rounded-full mx-auto shadow-lg border-4 border-blue-300 dark:border-blue-700"
                />
              </div>
              <div className="md:w-2/3 md:pl-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="mb-4">
                  I&apos;m a passionate software engineer with expertise in blockchain technology, particularly Solana
                  development, and a strong foundation in Rust programming. My journey in software development has led
                  me to work on innovative projects that combine cutting-edge technologies with practical solutions.
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m constantly learning about new technologies and contributing to open-source
                  projects. I believe in writing clean, efficient code and creating solutions that make a real impact.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="skills" 
          className="py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 relative z-10"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: 'Rust', level: 'Advanced' },
                { name: 'Solana', level: 'Advanced' },
                { name: 'TypeScript', level: 'Advanced' },
                { name: 'React', level: 'Advanced' },
                { name: 'Next.js', level: 'Advanced' },
                { name: 'Node.js', level: 'Advanced' },
                { name: 'Blockchain', level: 'Advanced' },
                { name: 'Smart Contracts', level: 'Advanced' },
                { name: 'System Design', level: 'Advanced' },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="projects" 
          className="py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 relative z-10"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold mb-2">DMS Solana</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A decentralized management system built on Solana blockchain, implementing secure and efficient data management solutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                    Solana
                  </span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                    Rust
                  </span>
                </div>
                <a
                  href="https://github.com/mohtashimnawaz/dmssolana"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold mb-2">Solana Flappy Game</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A blockchain-based implementation of the classic Flappy Bird game on Solana, incorporating NFT rewards and on-chain game mechanics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                    Solana
                  </span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                    JavaScript
                  </span>
                </div>
                <a
                  href="https://github.com/mohtashimnawaz/Solana-flappy-game"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold mb-2">Decentralized P2P</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A peer-to-peer decentralized application implementing secure communication and data transfer protocols.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                    Node.js
                  </span>
                </div>
                <a
                  href="https://github.com/mohtashimnawaz/decentralizedp2p"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold mb-2">Space Invaders in Rust</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A modern implementation of the classic Space Invaders game using Rust, showcasing low-level game development and performance optimization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-sm">
                    Rust
                  </span>
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-sm">
                    Game Dev
                  </span>
                </div>
                <a
                  href="https://github.com/mohtashimnawaz/space_invadors"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold mb-2">Decentralized Identity Verification</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A secure identity verification system built on blockchain technology, ensuring privacy and trust in digital identity management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm">
                    Blockchain
                  </span>
                </div>
                <a
                  href="https://github.com/mohtashimnawaz/decentralized-identity-verification"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold mb-2">Custom Kernel</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A custom operating system kernel implementation in Rust, demonstrating low-level systems programming and OS development.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-sm">
                    Rust
                  </span>
                  <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-sm">
                    Systems
                  </span>
                </div>
                <a
                  href="https://github.com/mohtashimnawaz/my-kernel"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold mb-2">DMS ICP</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A decentralized management system on the Internet Computer Protocol (ICP), leveraging blockchain for secure and efficient data handling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-sm">
                    Rust
                  </span>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-sm">
                    ICP
                  </span>
                </div>
                <a
                  href="https://github.com/mohtashimnawaz/dms_icp"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
              {/* View More Projects on GitHub */}
              <a
                href="https://github.com/mohtashimnawaz?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-full flex items-center justify-center p-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-center text-2xl group"
              >
                <span className="group-hover:scale-105 transition-transform duration-300">
                  View All Projects on GitHub →
                </span>
              </a>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="experience" 
          className="py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 relative z-10"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="space-y-8">
              {/* Experience items will be added here */}
              <div className="border-l-2 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold mb-1">Intern</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">BlockseBlock • Internship • Jun 2025 - Present • 1 mo</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Remote
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Volunteering Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="volunteering"
          className="py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Volunteering</h2>
            <div className="space-y-8">
              {/* Volunteering items will be added here */}
              <div className="border-l-2 border-green-600 pl-4">
                <h3 className="text-xl font-semibold mb-1">Instructor</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">CHANDIGARH UNIVERSITY • Sep 2024 - Oct 2024 • 2 mos</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Education
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  I was the instructor of Rust. Interacted with Students in this Workshop and escalated a bigger cause i.e.,
                  making Rust popular among students....
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="contact" 
          className="py-20 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-2xl">
              <a 
                href="https://www.linkedin.com/in/mohtashim-nawaz-0200b5257/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition duration-300"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition duration-300"
              >
                Email
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
