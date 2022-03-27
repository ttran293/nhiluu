import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import findDescriptions, { marks } from "./data/slider_data";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const About: NextPage = () => {
  const [value, setValue] = React.useState<number | number[]>(100);

  const breadcrumbs = [
    <Link href="/" key="1">
      Home
    </Link>,
    <Link href="/about" key="2">
      About
    </Link>,
    <Link href="/now" key="3">
      Now
    </Link>,
  ];

  return (
    <div className={styles.main}>
      <Head>
        <title>About | Nam</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <h1 className={styles.title}>About Nam</h1>
        <Box
          sx={{
            height: 150,
          }}
        >
          {" "}
          <p className={styles.description}>{findDescriptions(value)}</p>
        </Box>

        <Box width={"100%"}>
          <Slider
            aria-label="Restricted values"
            defaultValue={100}
            step={null}
            valueLabelDisplay="off"
            marks={marks}
            onChange={(_, value) => setValue(value)}
            onChangeCommitted={(_, value) => setValue(value)}
            sx={{ color: "#eee" }}
          />
        </Box>
      </div>

      <div className={styles.main}>
        <h1 className={styles.title}>Education and Career</h1>
        <p className={styles.description}>
          After graduated highschool in Vietnam, I studied English and began
          applying for colleges in the United States. In 2016, I got accepted
          and started my studying as an International Student at{" "}
          <a href="">Montgomery College</a> from 2016-2019.
          This is where I had GED courses and first learned programming.
        </p>
        <hr style={{ width: "100%" }}></hr>
        <p className={styles.description}>
          From 2019-2021, at <a href="">UMBC</a>, I
          continued my computer science hike. I studied and improved my
          understanding in Data Structure, OOP, Algorithm. I chose data-science
          track which focused on advanced python libraries, RDBMS, data
          visualization principles and tools. Finally, in December 2021, I
          proudly graduated.
        </p>
        <hr style={{ width: "100%" }}></hr>
        <p className={styles.description}>
          Around May 2021, I applied for an internship offer at{" "}
          <a href="https://www.mediacy.com/">Media Cybernetics</a>. Here, I
          pursuited first hand-on experience as a software developer.
          Ultimately, after graduated I received a full-time offer at the
          company where I continued my learning experience. My work surrounds
          microscopy cameras and image analysis. Specifically, I mostly involve
          in maintain and develop capture interfaces connecting microscopy
          camera drivers and the company main application.
        </p>
        <hr style={{ width: "100%" }}></hr>
        <p className={styles.description}>
          Outside my work, I also follow my hobby as a full-stack web-app
          developer which I find joy in.
        </p>
      </div>

      <div className={styles.main}>
        <h1 className={styles.title}>Projects</h1>
        <h2 className={styles.subtitle} style={{ marginTop: "2rem" }}>
          The Music Confabulation
        </h2>
        <p className={styles.description}>
          A music blog to share your stories and memories or simply to introduce
          others about your favorite artists. Built using Bootstrap, JavaScript,
          NodeJS (Express), MongoDB, and Heroku.
        </p>
        <hr style={{ width: "100%" }}></hr>
        <h2 className={styles.subtitle}>
          The Music Confabulation - Visualization
        </h2>
        <p className={styles.description}>
          A music blog to share your stories and memories or simply to introduce
          others about your favorite artists. Built using Bootstrap, JavaScript,
          NodeJS (Express), MongoDB, and Heroku.
        </p>
        <hr style={{ width: "100%" }}></hr>
        <h2 className={styles.subtitle}>
          Examining the Usage of the UMBC High Performance Computing Facility{" "}
        </h2>
        <p className={styles.description}>
          A compelling visualizations that provide insight into the usage
          patterns of the HPCF. This assists the faculty in allocating resources
          towards the facility and determining future policies on this shared
          UMBC community resource. The visualization also help evaluates the
          COVID-19 lockdown impact on the UMBC users usage habits.
        </p>
      </div>

      <footer className={styles.footer}>Copyright © Nam</footer>
    </div>
  );
};

export default About;
