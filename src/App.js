import { useEffect, useState } from 'react';
import './App.scss';
import { AboutMeContainerComponent } from './components/aboutMe/AboutMeContainer';
import { MenuComponent } from './components/burger/Menu';
import { Footer } from './components/Footer/Footer';
import { IntroContainerComponent } from './components/intro/IntroContainer';
import { MySkillsContainerComponent } from './components/mySkills/MySkillsContainer';
import { Preloader } from './components/Preloader/Preloader';
import { ProjectsContainerComponent } from './components/projects/ProjectsContainer';
import { SidebarContainerComponent } from './components/sidebar/SidebarContainer';

function App() {
  const [isActive, setActive] = useState(false);

  const [top, setY] = useState(0);

  const [isLoading, setLoading] = useState(false);

  const scrollTop = () => {
    setY(window.pageYOffset);
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    window.addEventListener('scroll', scrollTop);
    return () => window.removeEventListener('scroll', scrollTop);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }
  return (
    <div id="home" className="App">
      <div className={`app-logo ${top > 100 ? 'active' : ''}`}>
        Daniil Glushakov <span>Frontend developer</span>
      </div>
      <SidebarContainerComponent />

      <div className="Main-pages">
        <MenuComponent isActive={isActive} setActive={setActive} />

        <IntroContainerComponent setActive={setActive} />

        <AboutMeContainerComponent />

        <MySkillsContainerComponent />

        <ProjectsContainerComponent />

        <Footer />
      </div>
    </div>
  );
}

export default App;
