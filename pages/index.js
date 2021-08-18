import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import MainLogo from "../components/MainLogo"

export default function Home() {
  return (
    <main>
      <img className="hero_image" src="/hero_small.jpg"/>
      <header>
        <div>
          <img src="/logo.png" alt="Logo LF Verissimo"/>
          <nav>
            <a>Projects</a>
            <a>About me</a>
            <a>Resume</a>
            <a>Contact</a>
          </nav>
        </div>
      </header>
      <section className="hero_content">
        <MainLogo/>
      </section>
      <section className="projects_section">
      </section>
      <section className="about_section">
      </section>
      <section className="contact_section">
      </section>
      <footer>
      </footer>
    </main>
  )
}
