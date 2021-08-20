import Head from 'next/head';
import Image from 'next/image';

import { ArrowDown, Mail, GitHub } from 'react-feather';

import styles from '../styles/Home.module.scss';
import projectsData from '../data/projects.json';
import openSourceData from '../data/openSource.json';

import MainLogo from '../components/MainLogo';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';

export default function Home() {
  return (
    <main>
      <img className='hero_image' src='/hero_small.jpg' />
      <header className={styles.headerSection}>
        <div>
          <a href='#'>
            <img src='/logo.png' alt='Logo LF Verissimo' />
          </a>
          <nav>
            <a href='#projects'>Projects</a>
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
            Projects
            <ArrowDown size={22} />
          </Button>
          <Button>
            Contact
            <Mail size={22} />
          </Button>
        </div>
      </section>
      <section id='projects' className={styles.projectSection}>
        <div className={styles.projectsContent}>
          <SectionTitle>Projects</SectionTitle>
          <div className={styles.projectsGrid}>
            {projectsData.map((project, index) => {
              return <ProjectItem key={index} data={project} />;
            })}
          </div>
          <Button isBlackText>
            All my projects on GitHub <GitHub />
          </Button>
          <div className={styles.projectOpenSourceSection}>
            <SectionTitle>Open Source Contribution</SectionTitle>
            <div className={styles.projectsGrid}>
              {openSourceData.map((project, index) => {
                return <ProjectItem key={index} data={project} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <SectionTitle isWhiteText>About me</SectionTitle>
        </div>
      </section>
      <section className='contact_section'></section>
      <footer></footer>
    </main>
  );
}
