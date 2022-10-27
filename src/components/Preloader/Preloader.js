import styles from './Preloader.module.scss';

export let Preloader = (props) => {
  return (
    <div className={styles.preloader}>
      <span data-loading="LOADING">LOADING</span>
    </div>
  );
};
