/**
 * Screen Reader Text
 *
 * Text will be hidden from visual users but available to
 * all screen readers.
 */
const SRT = ({ children }: { children: React.ReactNode }) => (
  <span className="sr-only">{children}</span>
);

export default SRT;
