import styles from './SRT.module.css';

/**
 * Screen Reader Text
 * 
 * Text will be hidden from visual users but available to 
 * all screen readers.
 */
const SRT = ({ children }: { children: React.ReactNode }) => (
  <span className={styles.srt}>{children}</span>
);

export default SRT;