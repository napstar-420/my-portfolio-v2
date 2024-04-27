import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaVuejs,
  FaNode,
  FaSnowflake,
  FaTerminal,
} from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa6';
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiQuasar,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const skillsSet = [
  {
    title: 'HTML 5',
    description:
      'The standard markup language for creating web pages and web applications.',
    Icon: FaHtml5,
  },
  {
    title: 'CSS 3',
    description:
      'The style sheet language used for describing the look and formatting of a document written in HTML.',
    Icon: FaCss3,
  },
  {
    title: 'Tailwind CSS',
    description:
      'A utility-first CSS framework for rapidly building custom user interfaces.',
    Icon: SiTailwindcss,
  },
  {
    title: 'JavaScript',
    description:
      'A high-level, interpreted programming language that enables interactive web pages and server-side development.',
    Icon: FaJs,
  },
  {
    title: 'TypeScript',
    description:
      'A typed superset of JavaScript that compiles to plain JavaScript.',
    Icon: SiTypescript,
  },
  {
    title: 'React JS',
    description: 'A JavaScript library for building user interfaces.',
    Icon: FaReact,
  },
  {
    title: 'Next JS',
    description:
      'A framework for building server-side rendered and statically generated React applications.',
    Icon: SiNextdotjs,
  },
  {
    title: 'Vue JS',
    description:
      'A progressive JavaScript framework for building user interfaces.',
    Icon: FaVuejs,
  },
  {
    title: 'Quasar JS',
    description:
      'A high-performance, Material Design based Vue framework for building responsive websites and hybrid mobile apps.',
    Icon: SiQuasar,
  },
  {
    title: 'Node JS',
    description:
      "A JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server side.",
    Icon: FaNode,
  },
  {
    title: 'Express JS',
    description: 'A fast, unopinionated, minimalist web framework for Node.js.',
    Icon: SiExpress,
  },
  {
    title: 'Nest JS',
    description:
      'A progressive Node.js framework for building efficient, scalable, and reliable server-side applications.',
    Icon: SiNestjs,
  },
  {
    title: 'Firebase',
    description:
      'A platform developed by Google for creating mobile and web applications.',
    Icon: SiFirebase,
  },
  {
    title: 'MYSQL',
    description: 'An open-source relational database management system.',
    Icon: SiMysql,
  },
  {
    title: 'MongoDB',
    description:
      'A document-oriented NoSQL database used for high volume data storage.',
    Icon: SiMongodb,
  },
  {
    title: 'Prisma',
    description:
      'A modern database toolkit that makes it easy to work with databases.',
    Icon: SiPrisma,
  },
  {
    title: 'Knex JS',
    description:
      'A SQL query builder for JavaScript that supports multiple database systems.',
    Icon: FaSnowflake,
  },
  {
    title: 'Version control',
    description:
      'The management of changes to documents, computer programs, large web sites, and other collections of information.',
    Icon: FaGitAlt,
  },
  {
    title: 'Command line',
    description:
      'A text-based interface used to interact with the operating system or execute commands.',
    Icon: FaTerminal,
  },
  {
    title: 'Web sockets',
    description:
      'A communication protocol that provides full-duplex communication channels over a single TCP connection.',
    Icon: SiSocketdotio,
  },
];

export default skillsSet;
