import { Sidebar } from './Sidebar';

export const SidebarContainerComponent = () => {
  const arrOfLinks = [
    { href: '#home', name: 'home', topY: 0 },
    { href: '#about-me', name: 'about me', topY: 1169 },
    { href: '#my-skills', name: 'skills', topY: 2338 },
    { href: '#projects', name: 'projects', topY: 3507 },
  ];
  return (
    <Sidebar
      arrOfLinks={arrOfLinks}
    />
  );
};
