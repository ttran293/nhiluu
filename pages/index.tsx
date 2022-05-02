import type { NextPage } from "next";

import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import hi from "../public/images/hi.jpg";
import HeadHelper from "../components/HeadHelper/HeadHelper";


const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.page}>
      <HeadHelper title="Home"></HeadHelper>

        <main className={styles.main}>
          <p className={styles.welcomeText}>
            Hello, my name is Nhi. Welcome to my website !
          </p>

          <div className={styles.illustrations}>
            <Image src={hi} width={250} height={250} alt={"Illustration"} />
          </div>

          <div className={styles.wrapper}>
            <Link href="/about" passHref>
              <div className={styles.card}>
                <p> {"👉"}I&apos;m a full-time student @ UMBC and a part-time Molecular Biology Research Assistant. {" "}
                <mark className={styles.tag}>
                  Learn more about me!
                  </mark>
                </p>
              </div>
            </Link>

            <Link href="/now" passHref>
              <div className={styles.card}>
              <p> {"👉"} Check out my current projects. {" "}
                </p>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
