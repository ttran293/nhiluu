/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import styles from "./Projects.module.css";
const Fade = require("react-reveal/Fade");

export default function Projects() {
  return (
    <div className={styles.main}>
      <Fade bottom> </Fade>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.description}>
        <Fade bottom>
          {" "}
          <ul>
            <li>
              Wound healing 3D model research @ Montgomery College Lab
              <ul>
                <li>
                  Establishing optimized protocols for: Growing of 3D cultures
                  for cell viability and interactions
                </li>
                <li>
                  Establishing optimized protocols for: Staining and assays for
                  special cell lines and cultures
                </li>
              </ul>
              <ul>
                <li>
                  Putting together a research paper and protocol on current
                  findings
                </li>
              </ul>
            </li>
          </ul>
        </Fade>

        <Fade bottom>
          {" "}
          <ul>
            <li>
              Descriptive statistical analysis on biological data sets using R
            </li>
          </ul>{" "}
        </Fade>

        <Fade bottom>
          {" "}
          <ul>
            <li>
              100 Days of Python Challenge
              <ul>
                <li>
                  Challenge myself to learn Python from basic to advanced level
                </li>
                <li>
                  <a href="https://github.com/nluu1/100-Days-Of-Python">
                    Project notes and codes
                  </a>
                </li>
              </ul>
            </li>
          </ul>{" "}
        </Fade>
      </p>
    </div>
  );
}
