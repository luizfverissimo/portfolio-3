import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJsSquare,
  faReact,
  faNodeJs,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { ArrowDown, ArrowUp, Mail, Download } from 'react-feather';
import { Toaster } from 'react-hot-toast';

import styles from '../styles/Home.module.scss';
import projectsData from '../data/projects.json';
import openSourceData from '../data/openSource.json';
import heroImage from '../public/hero_small.jpg';

import MainLogo from '../components/MainLogo';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import TagItem from '../components/TagItem';
import TooltipSkills from '../components/TooltipSkills';
import NextIcon from '../components/NextIcon';
import SocialFloatBar from '../components/SocialFloatBar';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <Head>
        <title>LF Verissimo | Front-end Developer</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Toaster />
      <SocialFloatBar />
      <Image
        className='hero_image'
        src={heroImage}
        alt='Background image of a keyboard'
        layout='fill'
        placeholder='blur'
        quality={100}
      />
      <header className={styles.headerSection}>
        <div>
          <a href='#'>
            <Image
              src='/logo.png'
              alt='Logo LF Verissimo'
              width={124}
              height={15}
            />
          </a>
          <nav>
            <a href='#projects'>Projects</a>
            <a href='#about-me'>About me</a>
            <a href='#resume'>Resume</a>
            <a href='#contact'>Contact</a>
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
          <Button href='#contact'>
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
            All my projects on GitHub <FontAwesomeIcon icon={faGithub} />
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
            <Image
              src='/avatar-lfv.jpg'
              className={styles.avatar}
              alt='Luiz Fernando Verissimo avatar'
              width={192}
              height={205}
            />
          </div>
          <h3 id='resume'>Luiz Fernando Verissimo</h3>
          <p className={styles.location}>Based in Londrina/PR - Brazil</p>
          <p className={styles.aboutDescription}>
            Hi, I’m a <strong>Front-End Developer</strong> with passion for
            solving problems in a modern and effective way. Focused on{' '}
            <strong>React.js</strong> stack and the techs around, like{' '}
            <strong>Next.js</strong> and <strong>React Native</strong>. I’m a
            fast learner person, with attention to details. Geek, gamer and
            boardgame player on free times.
            <br />
            <br />
            <strong>Let me help to solve your problem!</strong>
          </p>
          <div className={styles.aboutButtonContainer}>
            <Button
              href='https://github.com/luizfverissimo/luizfverissimo/raw/master/lf_verissimo_RESUME.pdf'
              blank
            >
              RESUME <Download />
            </Button>
          </div>
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
            <TooltipSkills tooltip='Next.js'>
              <NextIcon />
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
              <a
                href='https://mandarin.com.br/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/mandarin.png'
                  alt='Agência Mandarin'
                  width={170}
                  height={67}
                />
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
              <Image
                src='/positivo.png'
                alt='Universidade Positivo'
                width={163}
                height={51}
              />
            </div>
          </div>
        </div>
      </section>
      <section id='contact' className={styles.contactSection}>
        <SectionTitle>Contact</SectionTitle>
        <div className={styles.contactContent}>
          <ContactForm />
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <a href='#'>
            <Image
              src='/logo.png'
              alt='Logo LF Verissimo'
              width={124}
              height={15}
            />
          </a>
          <a href='#'>
            BACK TO TOP <ArrowUp size={16} />
          </a>
          <div />
        </div>
      </footer>
    </main>
  );
}
