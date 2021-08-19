import Head from 'next/head';
import Image from 'next/image';

import { ArrowDown, Mail } from 'react-feather';

import styles from '../styles/Home.module.scss';

import MainLogo from '../components/MainLogo';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

export default function Home() {
  return (
    <main>
      <img className='hero_image' src='/hero_small.jpg' />
      <header className={styles.headerSection}>
        <div>
          <img src='/logo.png' alt='Logo LF Verissimo' />
          <nav>
            <a>Projects</a>
            <a>About me</a>
            <a>Resume</a>
            <a>Contact</a>
          </nav>
        </div>
      </header>
      <section className={styles.heroContent}>
        <MainLogo />
        <h1>FRONT-END DEVELOPER</h1>
        <p>
          Focused on creating <strong>modern</strong> and <strong>fast</strong>{' '}
          solutions to web problems
        </p>
        <div className={styles.heroButtonsContainer}>
          <Button>
            PROJECTS
            <ArrowDown />
          </Button>
          <Button>
            CONTACT
            <Mail />
          </Button>
        </div>
      </section>
      <section className={styles.projectSection}>
        <div className={styles.projectsContent}>
          <SectionTitle>PROJECTS</SectionTitle>
        </div>
      </section>
      <section className='about_section'></section>
      <section className='contact_section'></section>
      <footer></footer>
    </main>
  );
}
