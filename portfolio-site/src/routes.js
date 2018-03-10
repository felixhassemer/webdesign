import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Gallery from './components/Gallery.vue';

// project pages
import Bachelor from './components/projects/Bachelor.vue';
import BachelorExhibition from './components/projects/BachelorExhibition.vue';
import Voyager from './components/projects/Voyager.vue';
import AbstractPosters from './components/projects/AbstractPosters.vue';
import MonsExhibition from './components/projects/MonsExhibition.vue';



export const routes = [
  // main page routes
  { path: '/', component: Gallery },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },

  // project routes
  { path: '/projects/bachelor', component: Bachelor },
  { path: '/projects/bachelor_exhibition', component: BachelorExhibition },
  { path: '/projects/voyager', component: Voyager },
  { path: '/projects/abstract_posters', component: AbstractPosters },
  { path: '/projects/mons_exhibition', component: MonsExhibition },
];
