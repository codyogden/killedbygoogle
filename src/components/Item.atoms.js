import styled from 'styled-components';

export const Description = styled.p`
  padding-right: 2em;
  font-size: 0.9em;
  line-height: 1.5;
  margin: 8px 0 0 0;
`;
Description.displayName = 'Description';

export const Icon = styled.img`
  height: 50px;
  width: 50px;
`;
Icon.displayName = 'Icon';

export const IconContainer = styled.div`
  flex-basis: 100px;
  flex-shrink: 0;
  text-align: center;
`;
IconContainer.displayName = 'IconContainer';

export const ListItem = styled.li`
  width: 500px;
  max-width: 100%;
  display: block;
  margin: 1em auto;
  display: flex;
  border-bottom: 1px solid #dedede;
  box-sizing: border-box;
  flex: 0 0 30%;
  @media screen and ( max-width: 1100px ) {
    flex: 0 0 50%;
  }
  h2 {
    margin: 0;
    font-weight: 300;
  }
`;
ListItem.displayName = 'ListItem';

export const AgeRange = styled.div`
  font-size: 0.75em;
`;
AgeRange.displayName = 'AgeRange';

export const ContentContainer = styled.div`
  padding-bottom: 1.25em;
`;
ContentContainer.displayName = 'ContentContainer';
