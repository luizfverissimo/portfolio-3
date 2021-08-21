import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJsSquare,
  faReact,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons';
import { ArrowDown, Mail, GitHub, Download } from 'react-feather';

import styles from '../styles/Home.module.scss';
import projectsData from '../data/projects.json';
import openSourceData from '../data/openSource.json';

import MainLogo from '../components/MainLogo';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import TagItem from '../components/TagItem';
import TooltipSkills from '../components/TooltipSkills';

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
            <a href='#about-me'>About me</a>
            <a href='#resume'>Resume</a>
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
          <Button href='#projects'>
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
          <Button
            isBlackText
            href='https://github.com/luizfverissimo?tab=repositories'
            blank
          >
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
      <section id='about-me' className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <SectionTitle isWhiteText>About me</SectionTitle>
          <div className={styles.avatarContainer}>
            <img
              src='/avatar.jpg'
              className={styles.avatar}
              alt='Luiz Fernando Verissimo avatar'
            />
          </div>
          <h3>Luiz Fernando Verissimo</h3>
          <p className={styles.location}>Based in Londrina/PR - Brazil</p>
          <p className={styles.aboutDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt leo sed ultrices rhoncus. Sed elit elit, tristique id
            dolor nec, auctor sagittis est. Donec leo quam, luctus nec varius
            vulputate, dapibus faucibus metus. Ut dapibus mi vitae ultricies
            finibus. Donec malesuada eget dolor ut scelerisque. Suspendisse
            suscipit consequat placerat.
          </p>
          <Button id='resume' href='#' blank>
            RESUME <Download />
          </Button>
          <h4>Skills</h4>
          <div className={styles.skillsContainer}>
            <TooltipSkills tooltip='HTML 5'>
              <FontAwesomeIcon icon={faHtml5} />
            </TooltipSkills>
            <TooltipSkills tooltip='CSS 3'>
              <FontAwesomeIcon icon={faCss3Alt} />
            </TooltipSkills>
            <TooltipSkills tooltip='Sass'>
              <FontAwesomeIcon icon={faSass} />
            </TooltipSkills>
            <TooltipSkills tooltip='JavaScript'>
              <FontAwesomeIcon icon={faJsSquare} />
            </TooltipSkills>
            <TooltipSkills tooltip='React.js'>
              <FontAwesomeIcon icon={faReact} />
            </TooltipSkills>
            <TooltipSkills tooltip='Node.js'>
              <FontAwesomeIcon icon={faNodeJs} />
            </TooltipSkills>
          </div>
          <div className={styles.formationContainer}>
            <div className={styles.experienceSection}>
              <h4>Experience</h4>
              <div className={styles.timeline}>
                <span>Out/2020</span>
                <img src='/timeline.png' alt='timeline' />
                <span>Now</span>
              </div>
              <p>Front-end developer intern at</p>
              <a href='https://mandarin.com.br/' target='_blank'>
                <img src='/mandarin.png' alt='Agência Mandarin' />
              </a>
              <h5>Assignments</h5>
              <div className={styles.assignmentsContainer}>
                <TagItem>Email HTMl</TagItem>
                <TagItem>Landing pages</TagItem>
                <TagItem>HTML banners</TagItem>
                <TagItem>Internal tools</TagItem>
              </div>
            </div>

            <div className={styles.educationContainer}>
              <h4>Education</h4>
              <h5>Graduation</h5>
              <p>
                Coursing -{' '}
                <strong>Technologist in System Analysis and Development</strong>
              </p>
              <img src="/positivo.png" alt="Universidade Positivo"/>
            </div>
          </div>
        </div>
      </section>
      <section className='contact_section'></section>
      <footer></footer>
    </main>
  );
}
