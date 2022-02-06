import styled from '@emotion/styled';
import { css } from '@emotion/react';

/**
 * Screen Reader Text
 * 
 * Text will be hidden from visual users but available to 
 * all screen readers.
 */
const SRT = styled.span(() => css({
  border: 0,
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'inset(50%)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: '1px',
  wordWrap: 'normal'
}));

export default SRT;