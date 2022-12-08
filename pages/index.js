import Head from "next/head";
import Slider from "../components/hero-slider";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sinamm Development </title>
        <meta
          name='description'
          content='Generated by Nextjs with Tailwindcss'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Slider />
      <h1 className='text-center text-5xl'>Henlo World</h1>
    </div>
  );
}
