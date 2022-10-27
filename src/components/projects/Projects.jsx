import { useEffect, useState } from 'react';
import styles from './Projects.module.scss';

export const Projects = (props) => {
  const [isActive, setActive] = useState('list');

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="projects" className={styles.projects_container}>
      <div className={styles.projects_row}>
        <span
          style={{
            transform: `translate3D(-${offsetY * 0.3}px, 0px, 0px)`,
          }}
        >
          projects <span>projects</span>
          projects <span>projects</span>
          projects <span>projects</span>
        </span>
      </div>

      <div className={styles.switcher_block}>
        <div
          onClick={() => {
            setActive('list');
          }}
          className={`${styles.toogle_btn} ${
            isActive === 'list' ? styles.active : ''
          }`}
        >
          // list
        </div>
        <p>select mode</p>
        <div
          onClick={() => {
            setActive('grid');
          }}
          className={`${styles.toogle_btn} ${
            isActive === 'grid' ? styles.active : ''
          }`}
        >
          // grid
        </div>
      </div>

      <div
        className={`${styles.projects_grid_container} ${
          isActive === 'grid' ? styles.active : ''
        }`}
      >
        {props.projectElementGrid}
      </div>
      <div
        className={`${styles.projects_list_container} ${
          isActive === 'list' ? styles.active : ''
        }`}
      >
        {props.projectElementList}
      </div>
      <div className={styles.projects_element}>
        <p>
          Also I have some projects right{' '}
          <a target="_blank" href="https://codesandbox.io/u/svnestie99">
            here
          </a>
        </p>
      </div>
    </div>
  );
};
