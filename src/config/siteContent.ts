import profileImage from '../assets/foto-perfil.jpeg'
import kifomeImage from '../assets/kifome.png'
import habitFlowLandingImage from '../assets/habitflowlanding.png'
import pagpayImage from '../assets/pagpay.png'
import curriculumPdf from '../assets/currículo.pdf'
import miniTwitter from '../assets/mini-twitter.png'
import resumeEnglishPdf from '../assets/Resume - English.pdf'

export const SITE_OWNER_NAME = 'Judyson Justino'

export const SOCIAL_LINKS = {
  github: 'https://github.com/Judysonandrade',
  linkedIn: 'https://www.linkedin.com/in/judyson-justino-82978a379/',
} as const

export const PROFILE = {
  image: profileImage,
  name: SITE_OWNER_NAME,
} as const

export const RESUMES = {
  pt: {
    file: curriculumPdf,
    downloadName: 'Currículo-Judyson Justino.pdf',
  },
  en: {
    file: resumeEnglishPdf,
    downloadName: 'Resume-Judyson Justino.pdf',
  },
} as const

type LocalizedText = {
  pt: string
  en: string
}

type LocalizedList = {
  pt: string[]
  en: string[]
}

export type ProjectCard = {
  title: LocalizedText
  description: LocalizedText
  kind: LocalizedText
  technologies: LocalizedText
  fileName: string
  role: LocalizedText
  highlights: LocalizedList
  figmaUrl?: string
  githubUrl?: string
  liveUrl?: string
  color: string
  img: string
}

export const PROJECT_CARDS: ProjectCard[] = [
  {
    title: {
      pt: 'Ki Fome',
      en: 'Ki Fome',
    },
    description: {
      pt: 'Aplicativo de pesquisa de restaurantes, bares e lanchonetes perto de você.',
      en: 'Restaurant, bar, and snack place discovery app near you.',
    },
    kind: {
      pt: 'Aplicativo mobile',
      en: 'Mobile application',
    },
    img: kifomeImage,
    technologies: {
      pt: 'React Native, Figma, UX Design',
      en: 'React Native, Figma, UX Design',
    },
    fileName: 'ki-fome.mobile.tsx',
    role: {
      pt: 'UX/UI Design e desenvolvimento mobile',
      en: 'UX/UI design and mobile development',
    },
    highlights: {
      pt: ['Experiência de descoberta de restaurantes, bares e lanchonetes.', 'Protótipo e interface pensados para uma busca simples e próxima do usuário.'],
      en: ['Restaurant, bar, and snack place discovery experience.', 'Prototype and interface designed for a simple, user-centered search.'],
    },
    figmaUrl: 'https://www.figma.com/proto/Y8xowrqqXgTmq9FHqk1A4C/KI-FOME?node-id=3-2&p=f&t=iStIoZGqN0aYiFAd-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    githubUrl: 'https://github.com/GeorgiaSilva/KIFOME',
    color: '#1e1e2e',
  },
  {
    title: {
      pt: 'HabitFlow Landing Page',
      en: 'HabitFlow Landing Page',
    },
    description: {
      pt: 'Landing page para o aplicativo HabitFlow, focada em design moderno e responsivo.',
      en: 'Landing page for the HabitFlow app focused on modern and responsive design.',
    },
    kind: {
      pt: 'Landing page',
      en: 'Landing page',
    },
    img: habitFlowLandingImage,
    technologies: {
      pt: 'Figma, React, UX Design',
      en: 'Figma, React, UX Design',
    },
    fileName: 'habitflow-landing.tsx',
    role: {
      pt: 'UX/UI Design e desenvolvimento frontend',
      en: 'UX/UI design and frontend development',
    },
    highlights: {
      pt: ['Landing page responsiva para apresentar o produto HabitFlow.', 'Estrutura visual criada para comunicar benefícios e guiar a navegação.'],
      en: ['Responsive landing page to introduce the HabitFlow product.', 'Visual structure created to communicate benefits and guide navigation.'],
    },
    figmaUrl: 'https://www.figma.com/design/9EYh23KfMjrru3nhGpgMPl/HabitFlow-Landing-page?node-id=0-1&t=8U7898mp0UmblPXQ-1',
    color: '#2d2d42',
  },
  {
    title: {
      pt: 'PagPay',
      en: 'PagPay',
    },
    description: {
      pt: 'Sistema de pagamento online de boletos, com integração de APIs de pagamento e interface intuitiva.',
      en: 'Online payment system for boletos with payment API integration and an intuitive interface.',
    },
    kind: {
      pt: 'Experiência mobile',
      en: 'Mobile experience',
    },
    img: pagpayImage,
    technologies: {
      pt: 'Figma, React Native, Mobile Design',
      en: 'Figma, React Native, Mobile Design',
    },
    fileName: 'pagpay.mobile.fig',
    role: {
      pt: 'UX/UI Design para experiência mobile',
      en: 'UX/UI design for a mobile experience',
    },
    highlights: {
      pt: ['Fluxos de pagamento de boletos organizados em uma interface direta.', 'Protótipo voltado a clareza e facilidade de uso em tarefas financeiras.'],
      en: ['Boleto payment flows organized into a straightforward interface.', 'Prototype focused on clarity and ease of use in financial tasks.'],
    },
    figmaUrl: 'https://www.figma.com/proto/ueZChOcIQaijTC1xG0OuZn/PAGPAY?node-id=175-381&p=f&t=ew6q0dg2MebYBfvD-0&scaling=scale-down&content-scaling=fixed&page-id=175%3A90&starting-point-node-id=175%3A381',
    color: '#1a1a2e',
  },
  {
    title: {
      pt: 'Mini Twitter',
      en: 'Mini Twitter',
    },
    description: {
      pt: 'Mini rede social para publicação de posts curtos em tempo real.',
      en: 'Small social feed app for posting short updates in real time.',
    },
    kind: {
      pt: 'Aplicação web',
      en: 'Web application',
    },
    img: miniTwitter,
    githubUrl: 'https://github.com/GeorgiaSilva/b2bit-mini-twitter',
    liveUrl: 'https://b2bit-mini-twitter.vercel.app/',
    technologies: {
      pt: 'React, Tailwind CSS',
      en: 'React, Tailwind CSS',
    },
    fileName: 'mini-twitter.tsx',
    role: {
      pt: 'Desenvolvimento frontend',
      en: 'Frontend development',
    },
    highlights: {
      pt: ['Interface de feed para publicações curtas em tempo real.', 'Aplicação web construída com React e Tailwind CSS.'],
      en: ['Feed interface for short posts in real time.', 'Web application built with React and Tailwind CSS.'],
    },
    color: '#0f172a',
  },
]
