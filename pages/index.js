import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Features from '../components/Features'
import Services from '../components/Services'
import Contact from '../components/Contact';
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thawakal Transport</title>
        <meta name="description" content="We are the best passenger transport company in UAE." />
        <meta meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/thawakal-title.jpg" />
      </Head>

      <main className={styles.main}>

        <Navbar></Navbar>
        <Slider></Slider>
        <Features></Features>
        <Services></Services>
        <Contact></Contact>
        <Footer></Footer>
      </main>

      
    </div>
  )
}
