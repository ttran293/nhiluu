import React, { useState } from "react";
import styles from "./ExperienceInfo.module.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import BiotechIcon from "@mui/icons-material/Biotech";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BrushIcon from "@mui/icons-material/Brush";
const Fade = require("react-reveal/Fade")
export default function ExperienceInfo(props: any) {
  return (
    <Timeline className={styles.timeline}>
      <Fade right><TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.primary"
        >
          2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <MenuBookIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Chemistry and Biology Peer Tutor
          </Typography>
          <Typography>Ackerman Learning Center</Typography>
        </TimelineContent>
      </TimelineItem></Fade>
      
      <Fade left> <TimelineItem>
        <TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Student Assistant
          </Typography>
          <Typography>Novel Solutions to Wound Healing Project</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <MenuBookIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem></Fade>
     

      <Fade right><TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.primary"
        >
          2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <BrushIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Graphic Design Chair
          </Typography>
          <Typography>Societies of Asian Scientists and Engineers</Typography>
        </TimelineContent>
      </TimelineItem></Fade>
      

      <Fade left><TimelineItem>
        <TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Student Assistant
          </Typography>
          <Typography>
            McKeldin Library Services Desk/ Logistics and Periodicals
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <MenuBookIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.primary"
        >
          2019
        </TimelineContent>
      </TimelineItem></Fade>
      

      <Fade right><TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.primary"
        >
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <BiotechIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Part-time Research Assistant
          </Typography>
          <Typography>Wound Healing Research</Typography>
        </TimelineContent>
      </TimelineItem></Fade>
      

      <Fade left><TimelineItem>
        <TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Full-time Research Assistant
          </Typography>
          <Typography>Wound Healing Research</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <BiotechIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.primary"
        >
          Present
        </TimelineContent>
      </TimelineItem></Fade>
      
    </Timeline>
  );
}
