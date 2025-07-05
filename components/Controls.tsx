import styles from './Controls.module.css';

export const Controls = ({ children }: { children: React.ReactNode }) => (
    <div className={styles.controls}>{children}</div>
);