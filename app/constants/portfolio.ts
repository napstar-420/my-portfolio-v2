import HeartbeatImage from '@/app/images/heartbeat-project.png';
import StudioImage from '@/app/images/studio-project.png';
import PhotosImage from '@/app/images/photos-project.png';

const portfolioItems = [
  {
    id: 'heartbeat',
    title: 'Heartbeat',
    description: 'Platform to view and create unique moments.',
    skills: ['Vue JS', 'Nest'],
    image: HeartbeatImage,
    client: 'Freedom',
    services: 'Web Development',
    live_url: 'https://h.ki',
  },
  {
    id: 'studio',
    title: 'Studio',
    description: 'Website development for admins and users to manage moments.',
    skills: ['Quasar', 'Nest'],
    image: StudioImage,
    client: 'Freedom',
    services: 'Web Development',
    live_url: 'https://h.ki/studio',
  },
  {
    id: 'photos',
    title: 'Photos',
    description: 'A better way to view your photos: Just hover!',
    skills: ['Vue JS', 'Node', 'Knex'],
    image: PhotosImage,
    client: 'Freedom',
    services: 'Web Development',
    live_url: 'https://h.ki/photos',
  },
];

export default portfolioItems;
