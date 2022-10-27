import styles from './Menu.module.scss';
import { BsTelegram, BsGithub, BsLinkedin } from 'react-icons/bs';

export const MenuComponent = (props) => {
  return (
    <div
      className={`${styles.menu_container} ${
        props.isActive ? styles.active : ''
      }`}
    >
      <div
        onClick={() => {
          props.setActive(false);
        }}
        className={styles.burger_close_btn}
      >
        close
      </div>
      <div
        onClick={() => {
          props.setActive(false);
        }}
        className={styles.menu_list}
      >
        <a href="#home">
          <div className={styles.menu_number}>// 1</div>home
        </a>
        <a href="#about-me">
          <div className={styles.menu_number}>// 2</div>about me
        </a>
        <a href="#my-skills">
          <div className={styles.menu_number}>// 3</div>skills
        </a>
        <a href="#projects">
          <div className={styles.menu_number}>// 4</div>projects
        </a>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.links_block}
      >
        <a
          target="_blank"
          title="Telegram"
          href="https://web.telegram.org/k/#@svnestie"
        >
          <BsTelegram className={styles.link_icon}></BsTelegram>
        </a>

        <a
          target="_blank"
          title="LinkedIn"
          href="https://www.linkedin.com/in/daniilglushakov/"
        >
          <BsLinkedin className={styles.link_icon}></BsLinkedin>
        </a>
        <a target="_blank" title="GitHub" href="https://github.com/svnestie99">
          <BsGithub className={styles.link_icon}></BsGithub>
        </a>
      </div>
    </div>
  );
};
