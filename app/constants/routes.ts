export enum Routes {
  HOME = '/',
  ABOUT = '/about',
  PORTFOLIO = '/portfolio',
  BLOG = '/blog',
  CONTACT = '/contact',
  THANKS = '/contact/thanks',
}

export const RoutesMap = Object.entries({
  Home: Routes.HOME,
  About: Routes.ABOUT,
  Portfolio: Routes.PORTFOLIO,
  Blog: Routes.BLOG,
  Contact: Routes.CONTACT,
});
