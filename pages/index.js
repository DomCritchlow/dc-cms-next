import Head from 'next/head'
import Image from 'next/image'
import { getAbout, getUserProfilePicture } from '../lib/api'
import styles from '../styles/Home.module.css'
import ReactMarkdown from 'react-markdown'


export default function Home(about) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="first-letter:bg-white">
        Hello my name is
      </h1>
      <Image src={about.userProfilePicture} width={200} height={200}
              ></Image>
      <ReactMarkdown>{about.content}</ReactMarkdown>
    </div>
  )
}


export async function getStaticProps() {
  const [content, data] = await getAbout(true)
  const userProfilePicture = await getUserProfilePicture()
  return {
    props: {
      data, content, userProfilePicture,
    },
  }
}