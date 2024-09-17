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
  currentMeeting: 2025
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
    name: "Eric Robsky Huntley, PhD, GISP",
    img: "eric.jpg",
    title: "Chair",
    email: "ehuntley@mit.edu",
    affil: {
      title: "Lecturer in Urban Science and Planning, Massachusetts Institute of Technology",
      url: "https://dusp.mit.edu/people/eric-robsky-huntley"
    },
    bio: "Eric is a GIScientist, geographer, and urban planner whose research practice focuses on what mapping and spatial data science can do for movements for social justice. In particular, they are interested in 'mapping up', or approaches to mapping and spatial data science that emphasize the role of power and institutions in producing inequality."
  },
  {
    name: "Ryan Burns, PhD",
    title: "Vice Chair",
    img: "ryan.jpg",
    email: "ryan.burns1@ucalgary.ca",
    affil: {
      title: "Associate Professor of Geography, University of Calgary",
      url: "https://profiles.ucalgary.ca/ryan-burns"
    },
    bio: "Ryan works at the intersections of GIScience, digital human geographies, urban studies, political economy, and Science & Technology Studies. Much of his research questions how people, places, and knowledge come to be encoded as data, and then analyzed and acted upon through other digital objects, practices, and spatialities."
  },
  {
    name: "Will Payne, PhD",
    img: "will.jpg",
    title: "Secretary/Treasurer",
    email: "ehuntley@mit.edu",
    affil: {
      title: "Assistant Professor, Rutgers University",
      url: "https://bloustein.rutgers.edu/people/payne/"
    },
    bio: "Will uses quantitative and qualitative methods to study the relationship between geospatial technologies and urban inequality, examining how changing technical capabilities, labor relations, and competitive pressures in the location-based services (LBS) industry interact with processes of racialized and class-based segregation in American cities."
  },
  {
    name: "Emma Fraser, PhD",
    img: "emma.png",
    title: "Board Member At-Large",
    email: "ehuntley@mit.edu",
    affil: {
      title: "Assistant Teaching Professor, University of California, Berkeley",
      url: "https://mediastudies.ugis.berkeley.edu/people/emma-fraser/"
    },
    bio: "Emma’s research considers digital culture, space and place, modern ruins, and visual media in relation to urban experience and the writings of Walter Benjamin and the Frankfurt School. Emma also researches and writes about games and play across sociology, geography, game studies and media and cultural theory."
  },
  {
    name: "Muriel Marseille",
    img: "muriel.jpg",
    title: "Board Member At-Large",
    email: "marseille.muriel@gmail.com",
    affil: {
      title: "PhD Candidate, University of Wisconsin, Milwaukee",
      url: "https://uwm.edu/urban-studies/people/marseille-muriel/"
    },
    bio: "Muriel is an urban geographer with research interests in the financialization of the urban creative economy, digital geographies, dual city narratives, historic preservation, and emotional geographies of place. She contributes to the discourse on urban revitalization by investigating the effects of material culture (theater houses) in neighborhoods in Chicago."
  },
  {
    name: "Nicole Bennett",
    img: "nicole.jpg",
    title: "Student Representative",
    email: "nmbenn@iu.edu",
    affil: {
      title: "PhD Candidate, Indiana University",
      url: "https://geography.indiana.edu/about/graduate-students/bennett-nicole.html"
    },
    bio: "Nicole Bennett is a human geographer interested in the intersection of digital and physical space. The context in which Nicole researches is how digital space and physical space interact during times of humanitarian crisis."
  },
  {
    name: "Tejaswi Polimetla",
    img: "tejaswi.jpg",
    title: "Student Representative",
    email: "tpolimetla@gmail.com",
    affil: {
      title: "Master of Science Candidate, Harvard University.",
      url: "https://seas.harvard.edu/person/tejaswi-polimetla"
    },
    bio: "Tejaswi is a certified data enthusiast with a love for using technical tools to uncover the secrets behind human behavior."
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
