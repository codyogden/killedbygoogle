import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const FooterContainer = styled.footer(() => css({
  backgroundColor: '#474747',
  color: '#fafafa',
  fontSize: '1em',
  padding: '50px 0',
}));

export const FlexWrap = styled.div(() => css({
  margin: '0 auto',
  maxWidth: '90%',
  textAlign: 'center',
  width: '38em',

  ['& > div']: {
    ['&nth-child(1)']: {
      flex: `0 0 ${(1.5 / 3) * 100}%`,
    },
    ['&nth-child(2)']: {
      flex: `0 0 ${(1.25 / 3) * 100}%`,
    },
    ['p']: {
      lineHeight: 1.75,
    },
  },
}));

export const CreatorTag = styled.div(() => css({
  fontSize: '0.8em',
  marginTop: '1.5em',
  textAlign: 'center',
}));
