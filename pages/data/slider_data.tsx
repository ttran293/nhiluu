export default function findDescriptions(value: Number | Number[]) {
  switch (value) {
    case 0:
      return "Started my journey as an International Student at Montgomery College.";
    case 50:
      return "Achived A.A degree and transfered to University of Maryland, Baltimore County (UMBC)";
    case 70:
      return "Began my Engineering internship @ Media Cybernetics. Inc";
    case 80:
      return "Graduated from UMBC with Computer Science degree - Data Science track";
    case 90:
      return "Received a full-time offer @ Media Cybernetics. Inc";
    case 100:
      return "A passionate full time Jr Software Developer @ MediaCybernetics, Inc and a hobbyist full stack web developer based in Rockville, MD.";
    default:
      return ":)";
  }
}

export const marks = [
  {
    value: 0,
    label: "Aug 2016",
  },
  {
    value: 50,
    label: "Aug 2019",
  },
  {
    value: 70,
    label: "May 2021",
  },
  {
    value: 80,
    label: "Dec 2021",
  },
  {
    value: 90,
    label: "Feb 2022",
  },
  {
    value: 100,
    label: "Present",
  },
];