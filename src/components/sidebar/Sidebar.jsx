import styles from './Sidebar.module.scss';

export const Sidebar = (props) => {
  const linksElement = props.arrOfLinks.map((item, i) => {
    return (
      <a key={item.href} href={item.href}>
        <p>{item.name}</p>
      </a>
    );
  });
  return <nav className={styles.sidebar}>{linksElement}</nav>;
};
