import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Teachers from "../src/components/Teachers";
import Products from "../src/components/Products";
import Services from "../src/components/Services";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Site Class Online</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <Products/>
        <Teachers/>
        <Services/>
        <Footer/>
    </div>
  )
}
