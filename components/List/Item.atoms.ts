import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Description = styled.p(() => css({
  fontSize: '0.9em',
  lineHeight: 1.5,
  margin: '8px 0 0 0',
  paddingRight: '2em',
}));

export const Icon = styled.img(() => css({
  height: '50px',
  width: '50px',
}));

export const IconContainer = styled.div(() => css({
  flexBasis: '100px',
  flexShrink: 0,
  textAlign: 'center',
}));

export const ListItem = styled.li(() => css({
  boxSizing: 'border-box',
  display: 'flex',
  flex: '0 0 30%',
  margin: '1em auto',
  maxWidth: '100%',

  ['@media screen and ( max-width: 900px )']: {
    flex: '0 0 50%',
    margin: '0.5em auto'
  },

  ['h2']: {
    fontWeight: 300,
    margin: 0,
  },

  ['@media screen and (max-width: 700px )']: {
    ['&#mobile-hide']: {
      display: 'none',
    },
  },
}));

export const AgeRange = styled.div(() => css({
  fontSize: '0.75em',
}));

export const ContentContainer = styled.div(() => css({
  paddingBottom: '1.25em',
}));
