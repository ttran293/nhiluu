import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import Background from "./bg/background.jpg";
import image1 from "../public/heolly/image1.jpg"
import image2 from "../public/heolly/image2.jpg";
import image3 from "../public/heolly/image3.jpg";
import image4 from "../public/heolly/image4.jpg";
import image5 from "../public/heolly/image5.jpg";
import image6 from "../public/heolly/image6.jpg";
import image7 from "../public/heolly/image7.jpg";
import image8 from "../public/heolly/image8.jpg";
import image9 from "../public/heolly/image9.jpeg";
import image10 from "../public/heolly/image10.jpg";
import image11 from "../public/heolly/image11.jpg";
import image12 from "../public/heolly/image12.jpg";
import image13 from "../public/heolly/image13.jpg";
import image14 from "../public/heolly/image14.jpg";
import HeadHelper from "../components/HeadHelper/HeadHelper";
const Fade = require("react-reveal/Fade");

const itemData = [
  {
    id: 1,
    img: image1,
    title: "image1",
  },
  {
    id: 2,
    img: image2,
    title: "image2",
  },
  {
    id: 3,
    img: image3,
    title: "image3",
  },
  {
    id: 4,
    img: image4,
    title: "image4",
  },
  {
    id: 5,
    img: image5,
    title: "image5",
  },
  {
    id: 6,
    img: image6,
    title: "image6",
  },
  {
    id: 7,
    img: image7,
    title: "image7",
  },
  {
    id: 8,
    img: image8,
    title: "image8",
  },
  {
    id: 9,
    img: image9,
    title: "image9",
  },
  {
    id: 10,
    img: image10,
    title: "image10",
  },
  {
    id: 11,
    img: image11,
    title: "image11",
  },
  {
    id: 12,
    img: image12,
    title: "image12",
  },
  {
    id: 13,
    img: image13,
    title: "image13",
  },
  {
    id: 14,
    img: image14,
    title: "image14",
  },
];
const Jelly: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
      <HeadHelper title="Jelly"></HeadHelper>


        <div className={styles.main}>
          <Header></Header>

          
          <ImageList variant="masonry" >
            {itemData.map((item) => (
              <ImageListItem key={item.id}>

                <Fade><Image
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                /></Fade>
                
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <hr style={{ width: "100%" }}></hr>
        <footer className={styles.footer}>Copyright ?? Nam</footer>
      </div>
    </Layout>
  );
};

export default Jelly;
