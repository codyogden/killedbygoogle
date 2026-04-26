import { FC } from 'react';

type BadgeProps = {
  content: string;
}

const styles = {
  padding: '.25rem',
  display: 'inline-block',
  backgroundColor: 'var(--badge-bg)',
  borderRadius: '0.25rem',
  marginTop: '0.30rem',
  color: 'var(--badge-text)',
  fontSize: '0.7em',
  textTransform: 'capitalize' as const
}

const Bagde: FC<BadgeProps> = ({ content }: BadgeProps) => {
  return (
    <span style={styles}>
      { content }
    </span>
  )
}

export default Bagde;
