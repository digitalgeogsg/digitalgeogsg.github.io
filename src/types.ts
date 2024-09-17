import type socialIcons from "@assets/socialIcons";

export type Site = {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  currentMeeting: number;
};

export type Leadership = {
  name: string;
  img: string;
  title: string;
  email: string;
  affil: {
    title: string;
    url: string;
  };
  bio: string;
}[];

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
}[];
