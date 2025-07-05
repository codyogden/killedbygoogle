import styles from './Loader.module.css';

const Loader = () => (
    <div className={styles.loaderContainer}>
        <img
            className={styles.loaderImage}
            width="60px"
            src="https://static.killedbygoogle.com/com/knife.svg"
            alt="Knife"
        />
    </div>
);

export default Loader;
