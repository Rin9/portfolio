import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Trustedby from '../components/Trustedby';
import Works from '../components/Works';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>J&apos;s World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Skills />
      <Projects type={''} />
      <Works type={'work'} />
      <Projects type={'personal'} />
      <Works type={'personal'} />
      <Trustedby />
      <Footer />
    </div>
  );
}
