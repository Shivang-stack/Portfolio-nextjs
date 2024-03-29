import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navabar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Project'
import Contact from '../components/Contact'
import MyProfilePage from '../components/Experience'
import CertificateGrid from '../components/CertificateGrid'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shivang | Full-Stack Developer</title>
        <meta name="google-site-verification" content="dqtJvFR4KWSG0RrtMb5LkLzBq86KHismG-fHfVS10ng" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <MyProfilePage/>
      <CertificateGrid/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
