/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import motivated from "../../public/images/motivated.jpg";
import win from "../../public/images/win.jpg";
import fail from "../../public/images/fail.jpg";
import exercise from "../../public/images/exercise.jpg";
import intro from "../../public/images/intro.jpg";
import hmm from "../../public/images/hmm.jpg";
import sad from "../../public/images/sad.jpg";
import Image from "next/image";
import styles from "./StoryToShare.module.css";
const Fade = require("react-reveal/Fade");


export default function StoryToShare(){
    return (
      <div className={styles.main}>
        <Fade bottom><h1 className={styles.title}>A Story to Share</h1>
      <p className={styles.description}>
        Get Back Up When You Fall Down: How to Overcome Failure
      </p></Fade>
      
      <Fade bottom> <div className={styles.illustrations}>
        <Image src={intro} width={175} height={175} alt={"Illustration"} />
      </div>
      <p className={styles.description}>
        Growing up, I had always believed that I was gifted. There was
        always this pressure to do well in school, to be the “smart one”, to
        be “perfect”.
      </p></Fade>
     
    
     


      <Fade bottom><div className={styles.illustrations}>
        <Image src={hmm} width={190} height={190} alt={"Illustration"} />
      </div>


      <p className={styles.description}>
        However, no matter how hard I tried, I hardly receive any
        compliments. Oftentimes, I try too hard to seek and thrive on
        approval. This results in a big burnout in 2020.
      </p> </Fade>
      


      <Fade bottom> <div className={styles.illustrations}>
        <Image src={sad} width={175} height={175} alt={"Illustration"} />
      </div>
      <p className={styles.description}>
        I started to hate all of my decisions, and started to hate my
        surroundings, and worst of all, my own self. I stayed in my comfort
        zone, and was not bold enough to take challenges as opportunities.
      </p> </Fade>
     


      <Fade bottom> <div className={styles.illustrations}>
        <Image
          src={exercise}
          width={175}
          height={175}
          alt={"Illustration"}
        />
      </div>
      <p className={styles.description}>
        Fortunately, I was able to meet so many people that encouraged, and
        comforted me during hard times. With all the love and care, I was
        able to tell myself: “It&apos;s okay to do it wrong”. Failure isn&apos;t the
        opposite of success, it&apos;s a part of success, and a stepping stone to
        achieve all of our goals.
      </p> </Fade>
     

      <Fade bottom><div className={styles.illustrations}>
        <Image
          src={motivated}
          width={175}
          height={175}
          alt={"Illustration"}
        />
      </div>
      <p className={styles.description}>
        Facing difficulties in our life can be incredibly beneficial if we
        choose to allow our challenges to be growth opportunities. Failure
        isnt the opposite of success, its a part of success. It teaches us
        about resilience, courage, growth, and support. 
      </p> </Fade>
      

      <Fade bottom>  <div className={styles.illustrations}>
        <Image src={win} width={200} height={200} alt={"Illustration"} />
      </div>
      <p className={styles.description}>
        I&apos;m finally able to accept that i&apos;m not perfect. And, even if I could be perfect, it would not get me where I really want to go and who I will really become.
      </p></Fade>
     
    </div>
    );
}