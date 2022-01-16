import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import experiences, { ExperienceType } from '../data/experiences';
import Experience from '../components/Experience';

type HomeProps = {
  experiences: ExperienceType[];
};

const Home: NextPage<HomeProps> = ({ experiences }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clément Bourgoin · web developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" href="/icons/favicon-32x32.png" sizes="32x32"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Clément Bourgoin
        </h1>

        {experiences.map((experience: ExperienceType) => {
          return <Experience key={experience.slug} experience={experience}/>
        })}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      experiences,
    },
  };
}

export default Home;
