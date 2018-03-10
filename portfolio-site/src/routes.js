import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Gallery from './components/Gallery.vue';

export const routes = [
  { path: '', component: Gallery },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];
