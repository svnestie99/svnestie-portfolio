import { useEffect, useState } from 'react';
import styles from './MySkills.module.scss';
import { BsArrowDownLeftSquare } from 'react-icons/bs';

export const MySkills = (props) => {
  const [isClicked, setClickStatus] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mySkillsElement = props.arrayOfSkills.map((item) => {
    return (
      <div key={item.skill} className={styles.skill}>
        <p>{item.skill}</p>
        <p className={styles.level}>{item.level}</p>
      </div>
    );
  });

  const languagesElement = props.languages.map((item) => {
    return (
      <div key={item.language} className={styles.language}>
        <p>
          <span>//</span>
          {item.language}
        </p>
        <p>{item.level}</p>
      </div>
    );
  });

  const imagesElement = props.arrayOfSkills.map((item) => {
    return (
      <div key={item.skill}>
        <img
          src={item.src}
          alt={item.skill}
          data-value={item.value}
          style={{
            transform: `translateX(${
              (props.translateX * item.value) / 600
            }px) translateY(${(props.translateY * item.value) / 600}px)`,
          }}
        />
      </div>
    );
  });

  return (
    <div id="my-skills" className={styles.skills_container}>
      <div className={styles.skills_row}>
        <span
          style={{
            transform: `translate3D(${offsetY * 0.3}px, 0px, 0px)`,
          }}
        >
          Skills <span>Skills</span>
          Skills <span>Skills</span>
          Skills <span>Skills</span>
        </span>
        <span
          style={{
            transform: `translate3D(-${offsetY * 0.3}px, 0px, 0px)`,
          }}
        >
          languages <span>languages</span>
          languages <span>languages</span>
          languages <span>languages</span>
        </span>
      </div>

      <div className={styles.skills_block}>
        <div className={styles.notification_block}>
          <div
            onClick={() => {
              if (isClicked === true) {
                setClickStatus(false);
              } else {
                setClickStatus(true);
              }
            }}
            className={styles.notification_btn}
          >
            Press me
          </div>
          <span
            className={`${styles.notification} ${
              isClicked ? styles.active : ''
            }`}
          >
            Hover to see the level of skill
            <BsArrowDownLeftSquare
              className={styles.notification_icon}
            ></BsArrowDownLeftSquare>
          </span>
        </div>

        <div className={styles.skills_items_block}>{mySkillsElement}</div>

        <div className={styles.languages_items_block}>{languagesElement}</div>
      </div>

      <div
        style={{
          transform: `translateX(${
            (props.translateX * 3) / 700
          }px) translateY(${(props.translateY * 3) / 700}px)`,
        }}
        className={styles.skills_images_block}
      >
        {imagesElement}
      </div>
    </div>
  );
};
