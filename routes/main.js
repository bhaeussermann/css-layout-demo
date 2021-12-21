import { Router } from 'express';

const router = Router();

const pages = [
  {
    route: '/',
    name: 'index',
    title: 'Home',
    sideBarText: 'Home'
  },
  { name: 'flexbox', title: 'Flexbox' },
  { name: 'grid', title: 'Grid' },
  { name: 'media-queries', title: 'Media queries' },
  { name: 'scrolling', title: 'Scrolling' },
  { name: 'tabs', title: 'Tabs' }
];

for (const page of pages) {
  page.route = page.route || '/' + page.name;
  page.sideBarText = page.sideBarText || page.title;
}

for (const page of pages) {
  router.get(page.route, function(_req, res, _next) {
    res.render(page.name, { title: page.title, pages: pages });
  });
}

export default router;
