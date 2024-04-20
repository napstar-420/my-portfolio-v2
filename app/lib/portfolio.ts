import HeartbeatImage from '@/app/images/heartbeat-project.png';
import StudioImage from '@/app/images/studio-project.png';
import PhotosImage from '@/app/images/photos-project.png';

const portfolioItems = [
  {
    title: 'Heartbeat',
    description: 'Platform to view and create unique moments.',
    skills: ['Vue JS', 'Nest'],
    image: HeartbeatImage,
  },
  {
    title: 'Studio',
    description: 'Website development for admins and users to manage moments.',
    skills: ['Quasar', 'Nest'],
    image: StudioImage,
  },
  {
    title: 'Photos',
    description: 'A better way to view your photos: Just hover!',
    skills: ['Vue JS', 'Node', 'Knex'],
    image: PhotosImage,
  },
];

export default portfolioItems;
