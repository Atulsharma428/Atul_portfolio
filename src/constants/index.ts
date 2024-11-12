import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TCertification,
  TProject,
  TPublications,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  postman,
  Jio,
  persistent,
  salesforce,
  trillo2,
  threejs,
  yolo,
  XAI,
  nexter,
  GAN,
  natour,
  linux,
  python,
  vercel,
  github,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Data Science",
    icon: mobile,
  },
  {
    title: "AI Developer",
    icon: backend,
  },
  {
    title: "Investment and Trading",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Linux",
    icon: linux,
  },
  
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "github",
  //   icon: github,
  // },
  // {
  //   name: "vercel",
  //   icon: vercel,
  // },
  // {
  //   name: "postman",
  //   icon: postman,
  // },
];

const experiences: TExperience[] = [
  {
    title: "Data Science Intern",
    companyName: "JIO Platforms Limited",
    icon: Jio,
    iconBg: "#eee",
    date: "May 2024- July 2024",
    points: [
      "Developed an AI-based interview assessment system to assess candidate's performance on confidence, fluency, intonation, and pronunciation.",
      "Processed and diarized 500+ interview audio files using the Hugging Face model pyannote/speaker-diarization. followed by manual annotation.",
      "Innovated Praat and opensmile for comprehensive feature extraction (80+ features) and the Hugging Face Hier-Speech++ model (60+ features).",
      "Analyzed feature importance using machine learning and various plots to study the correlation.",
    ],
  },
  {
    title: "Generative AI intern",
    companyName: "Persistent Systems",
    icon: persistent,
    iconBg: "#eee",
    date: "May 2024- July 2024",
    points: [
      "Implemented a No Code Retrieval-Augmented Generation Application Builder and deployed 5 web applications using Python, Streamlit, OpenAI API, LangChain, and LLAMA index models.",
      "Optimised pdfplumber, Sentence Transformers, and all-MiniLM-L6-v2 for advanced text processing.",
      "Designed an interactive Langflow conversational agent for prompt-based processingand allowing users to upload Langflow JSON files.",
    ],
  },
  {
    title: "Certified Salesforce Developer",
    companyName: "Salesforce",
    icon: salesforce,
    iconBg: "#eee",
    date: "November 2023 - January 2024",
    points: [
"Apex Triggers & Asynchronous Apex: Automated record creation using Apex triggers and synchronized data with external systems via asynchronous REST callouts.",

"Process Automation: Developed approval processes and automated workflows with Flows and screen flows to enhance business processes.",

"Apex Integration & Testing: Integrated Salesforce with external systems using REST APIs and tested logic using Apex unit tests and callout mocks.",

"Salesforce DX & Lightning Components: Built dynamic UIs with Lightning Web Components (LWC) and managed development using Salesforce DX for version control.",

    ],
  },
  {
    title: "Certified Salesforce Administrator",
    companyName: "Salesforce",
    icon: salesforce,
    iconBg: "#eee",
    date: "May 2024 - June 2024",
    points: [
      "User Management & Security: Managed user roles, profiles, and permission sets to control data access, and implemented security settings, including sharing rules and password policies.",

"Data Management: Handled data import/export using Data Loader and ensured data quality through validation rules and automation.",

"Automation & Process Builder: Created workflows, approval processes, and automated business processes using Process Builder and Flow to streamline operations.",

"Reports & Dashboards: Designed and customized reports and dashboards to track business metrics and provide insights for decision-making.",
    ],
  },
];
  
const certifications: TCertification[] = [
  {
    title: "Oracle Cloud Infrastructure (OCI) Generative AI Professional",
    issuer: "Oracle",
    date: "August 2024",
    certificationUrl: "https://drive.google.com/file/d/1Z8CAwgRDNosTSI3YHNuo1kOGvLBSGbSq/view?usp=sharing",
  },
  {
    title: "Generative AI for Software Developers [IBM]",
    issuer: "Coursera",
    date: "Nov 2024",
    certificationUrl: "https://drive.google.com/file/d/15SRVVUm9fyJmxrUgzMlwOBXR3NcK-7sM/view?usp=sharing",
  },
  {
    title: "Prompt Engineering for ChatGPT [VANDERBILT UNIVERSITY]",
    issuer: "Coursera",
    date: "Nov 2024",
    certificationUrl: "https://drive.google.com/file/d/1jLv4IibOjN9qZRubfJJ8YJ-hn7inakBt/view?usp=sharing",
  },
  {
    title: "Programming Essentials in Python",
    issuer: "OPENEDG",
    date: "May 2024",
    certificationUrl: "https://drive.google.com/file/d/19QD44Y3VnTHh6cf1QjltMTtRQPvPagAI/view?usp=sharing",
  },
  {
    title: "Introduction to Networks",
    issuer: "Cisco",
    date: "June 2024",
    certificationUrl: "https://drive.google.com/file/d/1hQiqv62BXAg1dmjEJEdh57LEiDYVEU6U/view?usp=sharing",
  },
  {
    title: "Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    date: "June 2024",
    certificationUrl: "https://drive.google.com/file/d/1Dd6mfbkQ5ELWTMR_IAW0nR7IgL55OBEY/view?usp=sharing",
  },
  {
    title: "Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    date: "June 2024",
    certificationUrl: "https://drive.google.com/file/d/1vH33AcKCfbfyh2bUpaTq_k2rXymhoYqj/view?usp=sharing",
  },
  
];


const projects: TProject[] = [
  {
    name: "Object Detection using YOLO",
    description:
      "This project focuses on using YOLO (You Only Look Once) for efficient object detection in images and videos, achieving high accuracy and speed. It includes custom dataset training and supports multiple YOLO versions (v3, v5, v8) for improved detection capabilities.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: yolo,
    sourceCodeLink: "https://github.com/Atulsharma428/Object_detection_using_YOLO/tree/main",
  },
  {
    name: "Img Generation using GANs",
    description:
      "This project demonstrates the use of Generative Adversarial Networks (GANs) to generate images. GANs consist of two networks: a Generator that creates fake images from random noise, and a Discriminator that differentiates between real and fake images.",
    tags: [
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "CNN",
        color: "green-text-gradient",
      },
      
    ],
    image: GAN,
    sourceCodeLink: "https://github.com/Atulsharma428/Anime_face_generation_using_GAN",
  },
  {
    name: "Explainable_AI",
    description:
      "This project aims for classification in images by applying image processing techniques and machine learning classifiers. It can uses any dataset, extracts various features, and applies different classifiers. The project also explores the impact of various color spaces on the performance of classifiers.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: XAI,
    sourceCodeLink: "https://github.com/Atulsharma428/Explainable_AI",
  },
  {
    name: "Trillo",
    description:
      "This project is a static front-end website for a fictional hotel booking app called Trillo. It is designed to allow users to search for hotels, view details of different hotels, and book available rooms. The website demonstrates various UI elements such as hotel galleries, user reviews, and booking options.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: trillo2,
    sourceCodeLink: "https://github.com/Atulsharma428/Trillo",
  },
  {
    name: "Nexter",
    description:
      "Nexter is a modern real estate website designed to showcase luxurious homes and properties. The website presents a clean, user-friendly interface with a focus on showcasing top realtors, luxury homes, and features like secure payments, quick home purchases, and prime locations. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      { 
        name: "SASS",
        color: "green-text-gradient",
      },
    ],
    image: nexter,
    sourceCodeLink: "https://github.com/Atulsharma428/Nexter_SASS",
  },
  {
    name: "Natour",
    description:
        "Natour is a travel website that showcases various nature-based tours. The website features stunning visuals, detailed information about various tours, and the ability for users to easily book their next nature getaway. The goal is to provide an engaging and interactive user experience.",
    tags: [
      {
        name: "HTML",
        color: "green--text-gradient",
      },
      {
        name: "SaSS",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap ",
        color: "pink-text-gradient",
      },
    ],
    image: natour,
    sourceCodeLink: "https://github.com/Atulsharma428/Natour",
  },
];

const publications: TPublications[] = [
  {
    title: "Systematic exploration and in-depth analysis of ChatGPT architectures progression",
    journal: "Artificial Intelligence Review ",
    date: "August 2024",
    link: "https://link.springer.com/article/10.1007/s10462-024-10832-0?utm_source=rct_congratemailt&utm_medium=email&utm_campaign=oa_20240816&utm_content=10.1007%2Fs10462-024-10832-0",
    name: "Atul Sharma",
  },
  {
    title: "Exploring Generative Adversarial Network for Image Synthesis: A Comprehensive Approach",
    journal: "IEEE Conference",
    date: "November 2024",
    link: "https://xploreqa.ieee.org/document/10739274",
    name: "Atul Sharma",
  },
  {
    title: "Comparative Evaluation of Machine Learning Techniques for Breast Cancer Detection",
    journal: "IEEE Conference",
    date: "November 2024",
    link: "https://xploreqa.ieee.org/document/10739325",
    name: "Atul Sharma",
  },
];

export { services, technologies, experiences, certifications, projects, publications };
