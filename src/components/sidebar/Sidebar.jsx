import { useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';

export const Sidebar = (props) => {
  const [top, setY] = useState(0);
  const scrollTop = () => {
    setY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollTop);
    return () => window.removeEventListener('scroll', scrollTop);
  });

  const linksElement = props.arrOfLinks.map((item, i) => {
    return (
      <a
        key={item.href}
        className={top >= item.topY ? styles.active : ''}
        href={item.href}
      >
        <p>{item.name}</p>
      </a>
    );
  });
  return <nav className={styles.sidebar}>{linksElement}</nav>;
};
