type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  }; 
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    Certifications: TSection;
    works: Required<TSection>;
    publications: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Atul Sharma: Portfolio",
    fullName: "Atul Sharma",
    email: "atulsharma91192@gmail.com",
  },
  hero: {
    name: "Atul Sharma",
    p: [  "I build AI-powered solutions, while developing interactive", "web applications using Python/JS frameworks, and modern web technologies."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a skilled Software developer and AI engineer with expertise in Python, C++, and web technologies like
       HTML, CSS, and JavaScript. I specialize in building AI-powered applications for NLP, and Generative AI models. 
       With hands-on experience in frameworks like Streamlit and LangChain, I also develop interactive
       web applications and deploy scalable solutions. Additionally, I have a strong understanding of
       the Salesforce platform. I'm a quick learner, passionate about leveraging AI and cloud technologies
       to solve real-world problems, and enjoy collaborating to bring innovative ideas to life! Let's
       create something impactful together!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    Certifications: {
      p: "",
      h2: "My Certifications.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects highlight my skills and experience through practical, real-world applications
      of my work. Each project is briefly outlined with links to code repositories and live demos, showcasing my ability
      to tackle complex problems, utilize diverse technologies, and deliver impactful solutions. From AI-powered tools to
      web applications, these projects reflect my expertise in machine learning, NLP, computer vision, web development, and 
      cloud platforms, demonstrating my capability to innovate and manage projects effectively.`,
    },
    publications: {
      p: "My Publications",
      h2: "Research & Journal Papers.",
      content: `My publications are the culmination of my passion for discovery and innovation in the realms of AI, machine learning,
      and data science. Each paper is a narrative of exploration, where complex problems meet creative solutions, pushing the
      boundaries of technology and research. From developing AI-driven models to addressing real-world challenges, these works 
      reflect my dedication to advancing knowledge and driving impact. Through collaborative efforts and deep technical dives,
      my research has contributed to both academic discourse and practical applications. Explore my publications to see how ideas 
      evolve into meaningful contributions that shape the future of technology.`,
    },
  },
};
