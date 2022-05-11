import Head from 'next/head';
import { useState, useEffect } from 'react';
import { About, Bts, Contact, Cursus, Header, HomePage, Project, SliderPresentation, Update } from '../components';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <>
      <Head>
        <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet" />
        <title>Alexandra STVIL - Portfolio</title>
      </Head>

      <Header/>
      <main style={{marginLeft: '80px'}}>
        <HomePage />
        <About/>
        <SliderPresentation/>
        <Bts/>
        <Skills/>
        <Cursus/>
        <Project/>
        <Update/>
        <Contact/>
      </main>
    </>
  );
}

