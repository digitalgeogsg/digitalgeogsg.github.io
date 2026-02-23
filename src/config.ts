import type { Site, Leadership, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://digitalgeogsg.github.io", // replace this with your deployed domain
  author: "Digital Geographies Specialty Group",
  profile: "https://www.aag.org/groups/digital-geographies/",
  desc: "The Digital Geographies Specialty Group of the American Association of Geographers supports scholarship and pedagogy that advance our understanding of how digital objects and practices produce space, place, and social relations. We bring together a diverse community of scholars whose work centers the digital as object, subject and medium of geographical knowledge and practice.",
  title: "Digital Geographies Specialty Group",
  ogImage: "/assets/logo_large.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes,
  currentMeeting: 2026
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 90,
  height: 90,
};

export const LEADERSHIP: Leadership = [
  {
    name: "Ryan Burns, PhD",
    img: "ryan.jpg",
    title: "Chair",
    email: "ryan.burns1@ucalgary.ca",
    affil: {
      title: "-----",
      url: "https://profiles.ucalgary.ca/ryan-burns"
    },
    bio: "Ryan works at the intersections of GIScience, digital human geographies, urban studies, political economy, and Science & Technology Studies. Much of his research questions how people, places, and knowledge come to be encoded as data, and then analyzed and acted upon through other digital objects, practices, and spatialities."
  },
  {
    name: "Will Payne, PhD",
    title: "Vice Chair",
    img: "will.jpg",
    email: "will.b.payne@rutgers.edu",
    affil: {
      title: "Assistant Professor, Rutgers University",
      url: "https://bloustein.rutgers.edu/people/payne/"
    },
    bio: "Will uses quantitative and qualitative methods to study the relationship between geospatial technologies and urban inequality, examining how changing technical capabilities, labor relations, and competitive pressures in the location-based services (LBS) industry interact with processes of racialized and class-based segregation in American cities."
  },
  {
    name: "Emma Fraser, PhD",
    img: "emma.png",
    title: "Secretary/Treasurer",
    email: "Board Member At-Large",
    affil: {
      title: "Assistant Professor, University of California, Berkeley",
      url: "https://geography.berkeley.edu/assistant-professor-emma-fraser"
    },
    bio: "Emma’s research considers digital culture, space and place, modern ruins, and visual media in relation to urban experience and the writings of Walter Benjamin and the Frankfurt School. Emma also researches and writes about games and play across sociology, geography, game studies and media and cultural theory."
  },
  {
    name: "Shiloh Deitz, PhD",
    img: "shiloh.jpg",
    title: "Board Member At-Large",
    email: "shiloh.deitz@slu.edu",
    affil: {
      title: "Assistant Professor, Saint Louis University",
      url: "https://www.slu.edu/arts-and-sciences/sociology-anthropology/faculty/shiloh-deitz.php"
    },
    bio: "Shiloh Deitz is an Assistant Professor of Sociology at Saint Louis University. She studies infrastructural inequality and its uneven effects, applying disability justice theory to reimagine data science, AI, and GIS. "
  },
  {
    name: "Genevieve Reid",
    img: "",
    title: "Board Member At-Large",
    email: "",
    affil: {
  title: "Assistant Professor, Florida International University",
  url: "https://sipa.fiu.edu/people/faculty/global-and-sociocultural-studies/genevieve-reid.html/"
}
      title: "Assistant Professor, Florida International University",
      url: "https://sipa.fiu.edu/people/faculty/global-and-sociocultural-studies/genevieve-reid.html/"
    },
    bio: "Genevieve's research looks at issues of spatial data science in Indigenous contexts and adopts a critical GIScience perspective to interrogate ways in which mapping and geospatial technologies reinforce power dynamics in society. "
  },
  {
    name: "Nasha Virata",
    img: "nasha.jpg",
    title: "Student Representative",
    email: "nasha.virata@rutgers.edu",
    affil: {
      title: "PhD Candidate, Rutgers University",
      url: "-"
    },
    bio: "Nasha is a PhD Candidate in Planning and Public Policy at Rutgers University. Her research combines spatial, computational and qualitative analyses to trace how digital platforms reorganize urban space while channeling value into transnational circuits of capital."
  },
  {
    name: "Alexis E. Wood",
    img: "alexis.jpg",
    title: "Student Representative",
    email: "aew78@berkeley.edu",
    affil: {
      title: "PhD Student, University of California, Berkeley.",
      url: "https://geography.berkeley.edu/alexis-e-wood"
    },
    bio: "digital geographies, climate change and rural socio-political movements, oh my."
  }
];

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/digitalgeogsg",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
];
