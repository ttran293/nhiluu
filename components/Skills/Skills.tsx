/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import styles from "./Skills.module.css";
const Fade = require("react-reveal/Fade");

export default function Skills() {
  return (
    <div className={styles.main}>
      <Fade bottom>
        <h1 className={styles.title}>Skills</h1>
      </Fade>
      <p className={styles.description}>
        <Fade bottom>
          {" "}
          <ul>
            <li>
              Biotechnology
              <ul>
                <li>Immunostaining</li>
              </ul>
              <ul>
                <li>Protein purification techniques</li>
                <ul>
                  <li>Ion exchange chromatography</li>
                  <li>Size exclusion chromatography</li>
                  <li>Affinity chromatography</li>
                  <li>Column chromatography</li>
                </ul>
              </ul>
              <ul>
                <li>DNA quantification techniques</li>
                <ul>
                  <li>RT-PCR</li>
                  <li>DNA Gel Electrophoresis (agarose)</li>
                </ul>
              </ul>
              <ul>
                <li>Cells culturing/fixation</li>
                <ul>
                  <li>Bacterial gram staining</li>
                  <li>
                    Growing spheroids culture with different mice cell lines
                  </li>
                </ul>
              </ul>
              <ul>
                <li>Other staining techniques</li>
                <ul>
                  <li>Hematoxylin and Eosin (H&amp;E)</li>
                  <li>Oil Red O (ORO)</li>
                </ul>
              </ul>
            </li>
          </ul>
        </Fade>

        <Fade bottom>
          {" "}
          <ul>
            <li>
              Bioinformatics
              <ul>
                <li>Design primers with BLAST</li>
              </ul>
              <ul>
                <li>Descriptive statistics (with R)</li>
                <ul>
                  <li>Generate statistical values (mean, median, mode, etc)</li>
                  <li>Generate graps (histogram, scatter plots)</li>
                </ul>
              </ul>
            </li>
          </ul>
        </Fade>

        <Fade bottom>
          {" "}
          <ul>
            <li>Unix Shell</li>
            <ul>
              <li>
                Working with DNA sequences (blast and fasta files) in command
                line interface
              </li>
              <li>Access databases and manipulate data using Terminal</li>
            </ul>
          </ul>
        </Fade>
      </p>
    </div>
  );
}
