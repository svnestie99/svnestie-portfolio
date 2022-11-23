import { HeaderContainerComponent } from '../header/HeaderContainer';
import styles from './Intro.module.scss';

export const Intro = (props) => {
  return (
    <div className={styles.intro_container}>
      <HeaderContainerComponent setActive={props.setActive} />
      <div className={styles.intro_block}>
        <div className={styles.intro_block_item}>
          <div className={styles.introduce}>
            <span>daniil</span>
            <span>glushakov</span>

            <p>
              <span>frontend</span> developer
            </p>
          </div>
        </div>

        <div className={styles.intro_block_item_2}>
          <p>
            I'm glad you're here <br />
            Let me tell something about myself
          </p>
          <div className={styles.intro_scroll_down}>
            <span>scroll</span>
            <span>down</span>
          </div>
        </div>
      </div>
    </div>
  );
};
