import { Sidebar } from './Sidebar';

export const SidebarContainerComponent = () => {
  const arrOfLinks = [
    { href: '#home', name: 'home'},
    { href: '#about-me', name: 'about me'},
    { href: '#my-skills', name: 'skills'},
    { href: '#projects', name: 'projects'},
  ];
  return (
    <Sidebar
      arrOfLinks={arrOfLinks}
    />
  );
};
