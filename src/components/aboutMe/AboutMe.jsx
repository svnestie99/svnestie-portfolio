import styles from './AboutMe.module.scss';
import { BsArrowRight, BsDownload } from 'react-icons/bs';
import React, { useEffect, useState } from 'react';
import gif from '../../assets/images/gif-anime-9039s-Favim.com-7259958.gif';

export const AboutMe = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="about-me" className={styles.aboutme_container}>
      <div className={styles.aboutme_row}>
        <span
          style={{
            transform: `translate3D(-${offsetY * 0.3}px, 0px, 0px)`,
          }}
        >
          Who am i <span> Who am i</span>
          Who am i <span> Who am i</span>
          Who am i <span> Who am i</span>
        </span>
        <span
          style={{
            transform: `translate3D(${offsetY * 0.3}px, 0px, 0px)`,
          }}
        >
          Frontend <span>developer</span>
          Frontend <span>developer</span>
          Frontend <span>developer</span>
        </span>
      </div>

      <div className={styles.aboutme_section}>
        <div className={styles.aboutme_item}>
          <span>{'<about>'}</span>
          <span>---</span>
        </div>

        <div className={styles.aboutme_item_2}>
          <p>
            My name is Daniil. I'm a junior frontend developer. Currently based
            in Minsk and looking for a job as a frontend or react developer.
          </p>
          <p>
            I really like to create different things, different sites, make them
            interactive, attractive and it's a wonderful feeling when you come
            up with an idea and turn it into reality.
          </p>
          <p>
            Sometimes i'm ready to sit the all day just to work with the thing i
            really love.
          </p>
          <p>
            I do not have commercial experience, but I would like to get it in
            the future.
          </p>
        </div>
        <div className={styles.about_img_block}>
          <img src={gif} alt="Gif" />
        </div>
      </div>

      <div className={styles.connection_block}>
        <a
          className={styles.contact_block}
          href="mailto:danila.glushakov@gmail.com"
        >
          Get in touch
          <BsArrowRight className={styles.contact_icon}></BsArrowRight>
        </a>
        <a
          className={styles.contact_block}
          href={`https://drive.google.com/uc?export=download&id=1wfS0sB4ay1Jpx-brnrJraYb370YJMOWV`}
        >
          download my cv
          <BsDownload className={styles.contact_icon}></BsDownload>
        </a>
      </div>
    </div>
  );
};
