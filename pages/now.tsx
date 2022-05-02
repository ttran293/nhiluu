import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import HeadHelper from "../components/HeadHelper/HeadHelper";
import motivated2 from "../public/images/motivated2.jpg";
const Now: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
      <HeadHelper title="Now"></HeadHelper>

        <div className={styles.main}>
          <Header></Header>
          <h1 className={styles.title}>What I am up to</h1>
          <ul className={styles.description}>
            <li>Currently in Silver Spring, MD, US</li>
            <li>
              Full-time Student at UMBC B.S., Translational Life Science
              Technology Bioinformatics Track
            </li>
            <li>Part-time Research Assistant . Wound Healing Research</li>
            <li>Focus on learning python and R</li>
            <li>
              Next: using R and Python in applicable bioinformatics projects
            </li>
            <li>
              I have {" "}
              <Link href="/jelly" passHref>
                <a> a dog name Jelly</a>
              </Link>
            </li>
          </ul>

          <div className={styles.illustrations}>
            <Image
              src={motivated2}
              width={250}
              height={250}
              alt={"Illustration"}
            />
          </div>
          <p className={styles.description}>
            Find me at <a href="https://github.com/nluu1">GitHub </a>
            <a href="https://www.linkedin.com/in/nluu/">LinkedIn</a>
          </p>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <footer className={styles.footer}>Copyright © Nhi</footer>
      </div>
    </Layout>
  );
};

export default Now;
