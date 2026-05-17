import { FC } from 'react';

type BadgeProps = {
  content: string;
};

const Badge: FC<BadgeProps> = ({ content }) => (
  <span className="bg-badge-bg text-badge-text mt-[0.3rem] inline-block rounded p-1 text-[0.7em] capitalize">
    {content}
  </span>
);

export default Badge;
