import {
  SiGithub,
  SiVisualstudiocode,
  SiSlack,
  SiCodepen,
  SiDocker,
} from 'react-icons/si';
import { FaTerminal, FaLinux } from 'react-icons/fa';
import { TbLetterY } from 'react-icons/tb';

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
  {
    title: 'WSL',
    description:
      'WSL (Windows Subsystem for Linux) is a compatibility layer for running Linux binary executables natively on Windows 10 and Windows Server 2019.',
    Icon: FaLinux,
  },
  {
    title: 'YouTrack',
    description:
      'YouTrack is a web-based issue tracking and project management tool.',
    Icon: TbLetterY,
  },
];

export default tools;
