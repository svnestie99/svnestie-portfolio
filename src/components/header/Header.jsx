import styles from './Header.module.scss';
import { BsTelegram, BsGithub, BsLinkedin } from 'react-icons/bs';

export const Header = (props) => {
  return (
    <header>
      <nav>
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
      </nav>

      <div
        onClick={() => {
          props.setActive(true);
        }}
        className={styles.burger}
      >
        menu
      </div>
    </header>
  );
};
