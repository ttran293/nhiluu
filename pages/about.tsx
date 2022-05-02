import React, { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import ExperienceInfo from "../components/ExperienceInfo/ExperienceInfo";
import StoryToShare from "../components/StoryToShare/StoryToShare";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
import about from "../public/images/about.jpg";
import HeadHelper from "../components/HeadHelper/HeadHelper";
const Fade = require("react-reveal/Fade");

const About: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <HeadHelper title="About"></HeadHelper>
        <Header></Header>

        <div className={styles.main}>
          <Fade top>
            <h1 className={styles.title}>About me</h1>
            <div className={styles.illustrations}>
              <Image
                src={about}
                width={175}
                height={175}
                alt={"Illustration"}
              />
            </div>
            <p className={styles.description}>
              a full-time student @ <a href="https://umbc.edu/">UMBC - USG</a>{" "}
              pursuing B.S., Translational Life Science Technology -
              Bioinformatics Track and a part-time Molecular Biology Research
              Assistant.
            </p>
          </Fade>
        </div>

        <div className={styles.main}>
          <Fade top>
            <h1 className={styles.title}>Experience</h1>
          </Fade>

          <div className={styles.parallel}>
            <ExperienceInfo></ExperienceInfo>
          </div>
        </div>

        <Skills></Skills>
        <Projects></Projects>
        
        <StoryToShare></StoryToShare>
        

        <a href="#top">Back to top</a>
        <hr style={{ width: "100%" }}></hr>
        <footer className={styles.footer}>Copyright © Nhi</footer>
      </div>
    </Layout>
  );
};

export default About;
