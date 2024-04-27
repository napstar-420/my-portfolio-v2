import {
  SiGithub,
  SiVisualstudiocode,
  SiSlack,
  SiCodepen,
  SiDocker,
} from 'react-icons/si';
import { FaTerminal } from 'react-icons/fa';

const tools = [
  {
    title: 'Github',
    description: 'Github is a web-based Git repository hosting service.',
    Icon: SiGithub,
  },
  {
    title: 'VSCode',
    description: 'VSCode is a source code editor developed by Microsoft.',
    Icon: SiVisualstudiocode,
  },
  {
    title: 'Slack',
    description: 'Slack is a collaboration hub for teams.',
    Icon: SiSlack,
  },
  {
    title: 'Codepen',
    description:
      'Codepen is an online community for testing and showcasing user-created HTML, CSS, and JavaScript code snippets.',
    Icon: SiCodepen,
  },
  {
    title: 'Docker',
    description:
      'Docker is an open platform for developing, shipping, and running applications.',
    Icon: SiDocker,
  },
  {
    title: 'Terminal',
    description:
      'Terminal is a command-line interface for interacting with the computer.',
    Icon: FaTerminal,
  },
];

export default tools;
